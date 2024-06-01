import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";
import "@/app/principal.css";
import BackgroundImage from '@/app/ui/components/BackgroundImage'
import Footer from '@/app/ui/containers/Footer'
import Header from '@/app/ui/containers/Header'


const inter = Inter({ subsets: ["latin"] });
const archivo =  Archivo({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "radionudista",
  description: "Club social experimental para personas honestas, inclusivas, curiosas y apasionadas.",
  metadataBase: new URL('https://radionudista.com'),
  openGraph: {
    images: '/images/cover.jpg',
  }
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.className} relative min-h-svh`} style={{backgroundColor:'#4e4e4e'}}>
        <Header/>
        <BackgroundImage background={img[Math.floor(Math.random()*10)]}/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
