// app/api/metadata/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import https from 'https';

export async function GET(req: NextRequest) {
  const streamUrl = 'https://servidor30.brlogic.com:7024/live';

  return new Promise((resolve) => {
    const options = {
      headers: {
        'Icy-MetaData': '1', // esto le dice al servidor que queremos metadatos
      },
    };

    const request = https.get(streamUrl, options, (res) => {
      const icyMetaInt = parseInt(res.headers['icy-metaint'] as string);

      if (!icyMetaInt) {
        resolve(NextResponse.json({ error: 'No icy-metaint in response' }, { status: 500 }));
        return;
      }

      let audioData = Buffer.alloc(0);

      res.on('data', (chunk) => {
        audioData = Buffer.concat([audioData, chunk]);

        if (audioData.length >= icyMetaInt + 1) {
          const metadataLength = audioData[icyMetaInt] * 16;
          const metadata = audioData.slice(icyMetaInt + 1, icyMetaInt + 1 + metadataLength).toString();

          const matches = /StreamTitle='([^']*)'/.exec(metadata);
          const streamTitle = matches?.[1] || null;

          resolve(NextResponse.json({ title: streamTitle }));
          res.destroy(); // Cerrar la conexión para que no quede abierta
        }
      });
    });

    request.on('error', () => {
      resolve(NextResponse.json({ error: 'Failed to fetch stream' }, { status: 500 }));
    });
  });
}

/*// app/api/metadata/route.ts
import { NextResponse } from 'next/server';
import { getCachedMetadata } from '@/lib/metadataCache';
import { startMetadataPolling } from '@/lib/metadataPoller';

let hasStartedPolling = false;

export async function GET() {
  if (!hasStartedPolling) {
    startMetadataPolling();
    hasStartedPolling = true;
  }

  const title = getCachedMetadata();
  return NextResponse.json({ title });
}
*/
