import { NextRequest } from 'next/server';
import https from 'https';

export async function GET(req: NextRequest) {
  const streamUrl = 'https://servidor30.brlogic.com:7024/live';

  return new Response(
    new ReadableStream({
      start(controller) {
        const request = https.get(
          streamUrl,
          {
            headers: {
              'Icy-Metadata': '1',
            },
          },
          (res) => {
            res.on('data', (chunk) => controller.enqueue(chunk));
            res.on('end', () => controller.close());
            res.on('error', (err) => controller.error(err));
          }
        );

        request.on('error', (err) => controller.error(err));
      },
    }),
    {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'icy-metadata',
      },
    }
  );
}
