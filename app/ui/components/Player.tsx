'use client'
// src/components/RadioPlayer.tsx
import React, { useEffect, useRef, useState } from 'react';
import IcecastMetadataPlayer from "icecast-metadata-player";

const STREAM_URL = '/api/proxy'; // Reemplaza por tu URL real

const Player: React.FC = () => {
  const playerRef = useRef<IcecastMetadataPlayer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [metadata, setMetadata] = useState<string>('Cargando metadata...');

  useEffect(() => {
    const player = new IcecastMetadataPlayer(STREAM_URL,{
        onMetadata: (meta:any) => {
            console.log(meta);
            setMetadata(meta.StreamTitle)
        },
        icyDetectionTimeout: 5000,
        metadataTypes: ["icy", "ogg"]
    });

    playerRef.current = player;

    return () => {
      playerRef.current?.stop();
    };
  }, []);

  const togglePlay = () => {
    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.stop();
      setIsPlaying(false);
    } else {
      playerRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Radionudista</h2>
      <p><strong>Ahora suena:</strong> {metadata}</p>
      <button onClick={togglePlay} style={styles.button}>
        {isPlaying ? 'Pausar' : 'Reproducir'}
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '12px',
    textAlign: 'center' as const,
    maxWidth: '400px',
    margin: 'auto',
    color:'white'
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
  },
};

export default Player;
