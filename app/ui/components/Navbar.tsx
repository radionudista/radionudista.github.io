'use-client'
import Image from 'next/image'
import cover from '@/public/images/cover-alt-white.png'
import { TfiInfoAlt,TfiBackLeft,TfiVolume } from "react-icons/tfi";
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {Dispatch,SetStateAction,useState,useEffect} from 'react'
import { isMobile } from '../hooks/isMobile';

interface Navbar{
    setVolume:Dispatch<SetStateAction<number>>
    volume?:number
}

export default function Navbar({volume,setVolume}:Navbar) {

    const pathname = usePathname()

    const [isVisible, setIsVisible] = useState(false);
    const [isInteracting, setIsInteracting] = useState(false);
    const [movil,setMovil] = useState<boolean | undefined>(undefined)

    useEffect(()=>{
        setMovil(isMobile())
    },[])

    /*useEffect(() => {

        console.log('Cambia Interacting')        
        let timeout: NodeJS.Timeout;

        if (isInteracting) {
        setIsVisible(true);
        timeout = setTimeout(() => {
            setIsVisible(false);
            setIsInteracting(false);
        }, 10000);
        }

        return () => clearTimeout(timeout); // Limpia el timeout anterior
    }, [isInteracting]);*/

    const handleInteraction = () => {
        setIsInteracting(true);
    };

    const handleVolume = ({target}:any) => {
        const v = target.value
        const vol:number = parseFloat(v)/100;

        setVolume(vol)
        setIsInteracting(true)
    }

    return (
        <nav className="rounded-none flex justify-between items-center px-[10px] py-[5px] sm:h-[10svh] h-[15svh] w-full text-[#FFFFFF]">
            <div>
                <Link href={'/'}>
                    <div className='relative flex items-center'>
                        <h1 className="sm:text-[3.5vw] text-[8vw] font-[200] ml-[1svw] flex items-center">radio
                            <span className='font-[800]'>nudista</span>
                        </h1>
                        <div className='relative sm:w-[3.5vw] w-[6vw] sm:h-[3.5vw] h-[6vw] ml-[10px]'>
                            <Image 
                                src={cover} 
                                alt={'cover'} 
                                fill
                                priority
                        />
                        </div>
                    </div>
                </Link>
            </div>
            <div className='mr-[1.5svw] flex flex-row'>
                {movil != undefined && movil && pathname == '/' && <Link href={'/about'}>
                    <TfiInfoAlt className="sm:text-[2vw] text-[6vw]" style={{display:"inline"}} />
                </Link>}
                {movil != undefined && movil && pathname !== '/' && <Link href={'/'}>
                    <TfiBackLeft className="sm:text-[2vw] text-[6vw]" style={{display:"inline"}} />
                </Link>}

                {movil != undefined && !movil && <Link href={'/about'}
                    className='ml-[15px] mr-[15px]'
                >
                    Nudista
                </Link>}
                {movil != undefined && !movil && <Link href={'/schedule'}
                    className='ml-[15px] mr-[15px]'
                >
                    Programación
                </Link>}

                {/*movil != undefined && !movil && <div className='relative'>
                    <TfiVolume className="sm:text-[2vw] text-[6vw] ml-[2vw]" style={{display:"inline"}} onClick={()=>setIsVisible(!isVisible)} />
                    {isVisible && <input className='vol-bar' type='range' min={0} max={100} step={5} value={volume != undefined ? volume*100 : 0} onChange={handleVolume}/>}
                </div>*/}
            </div>
        </nav>
    )
}