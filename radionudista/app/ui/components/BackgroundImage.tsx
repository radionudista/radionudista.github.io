import Image from 'next/image'
import tvbg from '@/public/images/VHS01.jpg'
 
export default function BackgroundImage() {
  return (
    <Image
      alt="radionudista"
      src={tvbg}
      placeholder="blur"
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