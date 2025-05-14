'use client'
import {useState,useEffect} from 'react'
import { AiOutlineX, AiOutlineInstagram, AiOutlineDiscord, AiOutlineCalendar } from "react-icons/ai";
import Link from 'next/link';
import {usePathname} from 'next/navigation'

export default function Footer(){

    const [movil,setMovil] = useState<boolean>(false)
    const pathname = usePathname()

    useEffect(()=>{
        function isMobile():void {
            const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
            setMovil(regex.test(navigator.userAgent));
        }
        isMobile()
    },[])
    
    return (
        <footer className="sm:h-[10svh] h-[15svh] flex flex-col justify-center items-center">
            
            <div className="flex justify-around sm:w-[40svw] w-[100svw] text-[#FFFFFF] sm:text-[2vw] text-[8vw]">
                {movil && <a target="_blank" //TWITTER MOVIL (abre app)
                    href={'twitter://user?screen_name=radionudista'} 
                    onClick={()=> {window.location.href='twitter://user?screen_name=radionudista'; return false;}}
                    className="icon">
                    <AiOutlineX style={{display:"inline"}}/>
                </a>}
                {!movil && <a target="_blank" //TWITTER PC (abre navegador)
                    href={'https://twitter.com/radionudista'} 
                    className="icon">
                    <AiOutlineX style={{display:"inline"}}/>
                </a>}
                <a target="_blank" href={'https://www.instagram.com/radionudista'} className="icon">
                    <AiOutlineInstagram style={{display:"inline"}}/>
                </a>
                <a target="_blank" href={'https://discord.com/invite/6wmUrKMbdC'} className="icon">
                    <AiOutlineDiscord style={{display:"inline"}}/>
                </a>
                {movil && <Link 
                    href={'/schedule'}
                    className='icon'
                ><AiOutlineCalendar style={{display:"inline"}}/></Link>}
            </div>
        </footer>
    )
}