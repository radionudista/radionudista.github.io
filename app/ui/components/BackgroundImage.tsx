'use client'
import Image from 'next/image'

interface BackgroundImage{
  background:string
}
 
export default function BackgroundImage({background}:BackgroundImage) {
  console.log('background:',background)
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