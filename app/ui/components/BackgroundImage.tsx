'use client'
import Image, { StaticImageData } from 'next/image'
import VHS01 from '@/public/background/VHS01.jpg'
import VHS02 from '@/public/background/VHS02.jpg'
import VHS03 from '@/public/background/VHS03.jpg'
import VHS04 from '@/public/background/VHS04.jpg'
import VHS05 from '@/public/background/VHS05.jpg'
import VHS06 from '@/public/background/VHS06.jpg'
import VHS07 from '@/public/background/VHS07.jpg'
import VHS08 from '@/public/background/VHS08.jpg'
import VHS09 from '@/public/background/VHS09.jpg'
import VHS10 from '@/public/background/VHS10.jpg'
import { useEffect, useState } from 'react'


interface BackgroundImage{
  background?:number
}
 
export default function BackgroundImage({background}:BackgroundImage) {

  const [bg,setBg] = useState<StaticImageData|null>()
  
  useEffect(()=>{
    const randomImg:number = Math.floor(Math.random()*10)
    console.log(typeof VHS01)
    switch(randomImg){
      case 0:
        setBg(VHS01);
        break;
      case 1:
        setBg(VHS02);
        break;
      case 2:
        setBg(VHS03);
        break;
      case 3:
        setBg(VHS04);
        break;
      case 4:
        setBg(VHS05);
        break;
      case 5:
        setBg(VHS06);
        break;
      case 6:
        setBg(VHS07);
        break;
      case 7:
        setBg(VHS08);
        break
      case 8:
        setBg(VHS09);
        break;
      default:
        setBg(VHS10);
        break;
    }

    console.log('background:',background)
    console.log('randomImg:',randomImg)
    console.log('bg:',bg)
  },[])

  

  return (
    <>
      {bg && <Image
        alt="radionudista"
        src={bg}
        placeholder="empty"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
          zIndex:"-1",
          opacity:0.6
        }}
      />}
    </>
  )
}