'use client'
import {useEffect, useRef, useState} from 'react'
import { 
  MdOutlinePauseCircle, 
  MdOutlinePlayCircle, 
  MdNoAdultContent, 
  MdOutlineMotionPhotosOn 
} from "react-icons/md";
import Loader from './ui/components/Loader'
import Reproductor from './ui/section/Reproductor';

interface Stream{
  streamTitle?:string
}

export default function Home() {

  const urlRadio = useRef('https://stream.zeno.fm/nboqemutxjpvv')
  const urlStream = useRef('https://api.zeno.fm/mounts/metadata/subscribe/8a1hsarfnpxuv')

  return (
    
    <main className="flex flex-col h-[95svh] z-[100] text-[#000000]">
      <nav className="px-[10px] py-[5px]">
        <div>
          <h1 className="sm:text-[5.5vw] text-[10vw] font-[800] ml-[1svw] flex items-center">radio nudista <MdNoAdultContent style={{display:"inline",marginLeft:20}}/></h1>
        </div>
      </nav>
      
      <Reproductor urlRadio={urlRadio.current} urlStream={urlStream.current}/>
      
    </main>
  
    
  );
}
