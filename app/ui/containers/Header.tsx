'use client'
import {useRef} from 'react'
import Image from 'next/image'
import cover from '@/public/images/cover-alt-white.png'
import { TfiInfoAlt } from "react-icons/tfi";
import Link from 'next/link'
import Reproductor from '@/app/ui/containers/Reproductor';
import Navbar from '@/app/ui/components/Navbar'
import {usePathname} from 'next/navigation'
import {useState} from 'react'
//import Player from '@/app/ui/components/Player'
import dynamic from 'next/dynamic';
const Player = dynamic(() => import('@/app/ui/components/Player'), {
  ssr: false,
});
export default function Header() {

    const [volume,setVolume] = useState<number>(0.5)

    const pathname = usePathname()

    const urlRadio = useRef('https://servidor30.brlogic.com:7024/live')
    //const urlStream = useRef('https://api.zeno.fm/mounts/metadata/subscribe/8a1hsarfnpxuv')

    return(
        <>
            <Navbar setVolume={setVolume} volume={volume}/>
            <Player/>
            {/*<Reproductor 
                urlRadio={urlRadio.current} 
                visibility={pathname == '/'}
                volume={volume}
            />*/}
        </>
    )
}