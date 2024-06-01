'use client'
import {useRef} from 'react'
import Image from 'next/image'
import cover from '@/public/images/cover-alt-white.png'
import { TfiInfoAlt } from "react-icons/tfi";
import Link from 'next/link'
import Reproductor from '@/app/ui/containers/Reproductor';
import {usePathname} from 'next/navigation'

export default function Header() {

    const pathname = usePathname()

    const urlRadio = useRef('https://stream.zeno.fm/nboqemutxjpvv')
    const urlStream = useRef('https://api.zeno.fm/mounts/metadata/subscribe/8a1hsarfnpxuv')

    return(
        <>
            <nav className="flex justify-between items-center px-[10px] py-[5px] sm:h-[10svh] h-[15svh] w-full text-[#FFFFFF]">
                <div>
                    <Link href={'/'}>
                        <h1 className="sm:text-[3.5vw] text-[8vw] font-[200] ml-[1svw] flex items-center">radio
                            <span className='font-[800]'>nudista</span>
                            <Image src={cover} alt={'cover'} className='sm:w-[3.5vw] w-[6vw] sm:h-[3.5vw] h-[6vw] ml-[10px]' />
                        </h1>
                    </Link>
                </div>
                <div className='mr-[1.5svw]'>
                    <Link href={'/about'}>
                        <TfiInfoAlt className="sm:text-[2vw] text-[6vw]" style={{display:"inline"}} />
                    </Link>
                </div>
            </nav>
            <Reproductor 
                urlRadio={urlRadio.current} 
                urlStream={urlStream.current}
                visibility={pathname == '/'}
            />
        </>
    )
}