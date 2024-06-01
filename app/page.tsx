'use client'
import {useRef} from 'react'
import Reproductor from './ui/containers/Reproductor';
import Image from 'next/image';
import cover from '@/public/images/cover-alt-white.png'

export default function Home() {

  const urlRadio = useRef('https://stream.zeno.fm/nboqemutxjpvv')
  const urlStream = useRef('https://api.zeno.fm/mounts/metadata/subscribe/8a1hsarfnpxuv')

  return (
    
    <main className="flex flex-col sm:h-[80svh] h-[70svh] z-[100] text-[#FFFFFF]">
      {/*<Reproductor urlRadio={urlRadio.current} urlStream={urlStream.current}/>*/}
    </main>
  
    
  );
}
