'use client'
import Image from 'next/image'
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


interface BackgroundImage{
  background:number
}
 
export default function BackgroundImage({background}:BackgroundImage) {

  let bg;
  switch(background){
    case 0:
      bg = VHS01;
      break;
    case 1:
      bg = VHS02;
      break;
    case 2:
      bg = VHS03;
      break;
    case 3:
      bg = VHS04;
      break;
    case 4:
      bg = VHS05;
      break;
    case 5:
      bg = VHS06;
      break;
    case 6:
      bg = VHS07;
      break;
    case 7:
      bg = VHS08;
      break
    case 8:
      bg = VHS09;
      break;
    default:
      bg = VHS10;
      break;
  }

  console.log('background:',background)
  console.log('bg:',bg)

  return (
    <Image
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
    />
  )
}