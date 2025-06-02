// lib/metadataPoller.ts
import https from 'https';
import { setCachedMetadata } from './metadataCache';

const streamUrl = 'https://servidor30.brlogic.com:7024/live';

export function startMetadataPolling() {
  const options = {
    headers: {
      'Icy-MetaData': '1',
    },
  };

  const poll = () => {
    const req = https.get(streamUrl, options, (res) => {
      const icyMetaInt = parseInt(res.headers['icy-metaint'] as string);
      if (!icyMetaInt) return;

      let audioData = Buffer.alloc(0);

      res.on('data', (chunk) => {
        audioData = Buffer.concat([audioData, chunk]);

        if (audioData.length >= icyMetaInt + 1) {
          const metadataLength = audioData[icyMetaInt] * 16;
          const metadata = audioData.slice(icyMetaInt + 1, icyMetaInt + 1 + metadataLength).toString();

          const matches = /StreamTitle='([^']*)'/.exec(metadata);
          const title = matches?.[1] || null;

          setCachedMetadata(title);
          res.destroy(); // cerrar conexión

          // Vuelve a hacer polling después de N segundos
          setTimeout(poll, 10000); // cada 10 segundos
        }
      });
    });

    req.on('error', (err) => {
      console.error('Error fetching metadata:', err.message);
      setTimeout(poll, 10000);
    });
  };

  poll(); // inicializa el polling
}
