'use client'
import {useRef} from 'react'
import Reproductor from './ui/section/Reproductor';
import Image from 'next/image';
import cover from '@/public/images/cover-alt-white.png'

export default function Home() {

  const urlRadio = useRef('https://stream.zeno.fm/nboqemutxjpvv')
  const urlStream = useRef('https://api.zeno.fm/mounts/metadata/subscribe/8a1hsarfnpxuv')

  return (
    
    <main className="flex flex-col sm:h-[90svh] h-[85svh] z-[100] text-[#FFFFFF]">
      <nav className="px-[10px] py-[5px]">
        <div>
          <h1 className="sm:text-[3.5vw] text-[8vw] font-[200] ml-[1svw] flex items-center">radio
            <span className='font-[800]'>nudista</span>
            <Image src={cover} alt={'cover'} className='sm:w-[3.5vw] w-[6vw] sm:h-[3.5vw] h-[6vw] ml-[10px]' />
          </h1>
        </div>
      </nav>
      
      <Reproductor urlRadio={urlRadio.current} urlStream={urlStream.current}/>
      
    </main>
  
    
  );
}
