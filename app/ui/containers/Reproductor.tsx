'use client'
import {useEffect, useRef, useState} from 'react'
import { TfiControlPause, TfiControlPlay } from "react-icons/tfi";
import Loader from '@/app/ui/components/Loader'


interface Reproductor{
    urlRadio:string,
    urlStream?:string,
    visibility:boolean,
    volume?:number
}

interface Stream{
    streamTitle?:string
}

/*
@params
-urlRadio: stream de audio
-urlStream: listener informacion de stream de audio
*/
export default function Reproductor({urlRadio,urlStream,visibility,volume}:Reproductor){

    const audioRef:any = useRef(null)
    const defaultTitle:any = useRef('radionudista')

    const [stream,setStream] = useState<string>(''); //Stream de audio
    const [play,setPlay] = useState<boolean>(false) //Estado de reproduccion (PLAY/PAUSE)
    const [radio,setRadio] = useState<Stream>({}) //Informacion reproductor {streamTitle}
    const [title,setTitle] = useState<string>('') //Titulo de la pagina
    const [load,setLoad] = useState<boolean>(false) //Estado espera por conexion con stream readio

    //Efecto unico y primero del componente
    useEffect(()=>{
        //ref audio tag
        const audio = audioRef.current

        //Asigna valor
        audio.volume = volume;

        setStream(urlRadio)

        const eventSource = urlStream ? new EventSource(urlStream) : null;

        //Event Stream => Espera por mensaje de api (titulo de cancion)
        (urlStream && eventSource) ? eventSource.onmessage = (e) => {
            const data = JSON.parse(e.data)
            console.log('cancion:',data)
            setRadio(p=>({...p,streamTitle:data.streamTitle}))
            setTitle(data.streamTitle)
        } :  null;

        //Handle Error del reproductor
        const handleError = (event:EventTarget)=>{
            console.log('STREAM ERROR:',event)
            audio.pause()
            setPlay(false)
            setTitle(defaultTitle.current)
        }

        audio.addEventListener('error',handleError);
        audio.addEventListener('playing',()=>setLoad(false));

        return () => {
            if(eventSource) eventSource.close();
            audio.removeEventListener('error',handleError);
            audio.removeEventListener('playing',()=>setLoad(false));

        };
        
        
    },[])

    //Efecto cambio de titulo
    useEffect(()=>{
        if(play){
        console.log('cambia title:',title)
        document.title = `@radionudista | ${title}`
        navigator.mediaSession.metadata = new MediaMetadata({
            title: title,
            artist: "@radionudista",
            artwork: [
            {
                src: "/images/cover.jpg",
                sizes: "150x150",
                type: "image/png",
            }
            ]
        })
        } 
    },[title])
    
    //Efecto cambio volumen
    useEffect(()=>{

        if(volume != undefined){
            volume > 0 ? audioRef.current.volume = volume : audioRef.current.volume = 0.0
        }

        console.log('volume_act:',audioRef.current.volume)

    },[volume])

    //Handle play de la transmision
    const HandlePlayRadio=():void=>{
        
        console.log('volumen:',audioRef.current.volume)

        if(!play){
        //PLAY
        setLoad(true)
        audioRef.current.load();
        audioRef.current.play();
        document.title = `@radionudista | ${radio.streamTitle}`
        navigator.mediaSession.metadata = new MediaMetadata({
            title: title,
            artist: "@radionudista",
            artwork: [
            {
                src: "/images/cover.jpg",
                sizes: "150x150",
                type: "image/png",
            }
            ]
        })

        }else{
        //PAUSE
        audioRef.current.pause();
        document.title = defaultTitle.current;
        }
        console.log('setPlay:',!play)
        setPlay(!play)
        
    }


    return (
        <div className='text-[#FFFFFF]' style={{display:visibility?'block':'none'}}>
            <audio ref={audioRef}>
                <source src={stream} type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>
            <section className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center">
                {/*<Image alt="portada" src={portada} style={{height: '20svw',width:'20svw',maxHeight:'150px',maxWidth:'150px',marginBottom:'2svh'}}/>*/}
                <p className="sm:text-[2vw] text-[5svw] font-[400] min-h-[6svw] w-[80svw] text-center mb-[1svh]">{radio.streamTitle ? radio.streamTitle : null}</p>
                <button onClick={HandlePlayRadio}>
                    {!play ? 
                        <TfiControlPlay className="sm:text-[5vw] text-[15vw]" style={{display:"inline"}}/>
                        : 
                        (!load ? <TfiControlPause className="sm:text-[5vw] text-[15vw]" style={{display:"inline"}}/> : null)
                    }
                </button>
                {load && < Loader />}
            </section>
        </div>
        
    );
}