"use client"
import Image from 'next/image'
import {useEffect,useState} from 'react'
import tvbg from '@/public/images/VHS01.jpg'

interface BackgroundImage{
  background:string
}
 
export default function BackgroundImage({background}:BackgroundImage) {

  /*const [background,setBackground] = useState<string>('VHS01.jpg')
  const img = [
    'VHS01.jpg',
    'VHS02.jpg',
    'VHS03.jpg',
    'VHS04.jpg',
    'VHS05.jpg',
    'VHS06.jpg',
    'VHS07.jpg',
    'VHS08.jpg',
    'VHS09.jpg',
    'VHS10.jpg',
  ]

  useEffect(()=>{
    const ind:number = Math.floor(Math.random()*10)
    console.log('background:',img[ind])
    setBackground(img[ind])
  },[])*/

  return (
    <Image
      alt="radionudista"
      src={`/background/${background}`}
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