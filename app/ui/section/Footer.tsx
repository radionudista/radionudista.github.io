'use client'
import { FaHandHoldingHeart } from "react-icons/fa6";
import { AiOutlineX, AiOutlineInstagram, AiOutlineDiscord } from "react-icons/ai";

export default function Footer(){
    return (
        <footer className="sm:h-[10svh] h-[15svh] flex justify-center items-center">
            <div className="flex justify-around sm:w-[40svw] w-[100svw] text-[#FFFFFF] sm:text-[2vw] text-[8vw]">
                <a target="_blank" href={'https://twitter.com/radionudista'} className="icon">
                    <AiOutlineX style={{display:"inline"}}/>
                </a>
                <a target="_blank" href={'https://www.instagram.com/radionudista'} className="icon">
                    <AiOutlineInstagram style={{display:"inline"}}/>
                </a>
                <a target="_blank" href={'https://discord.com/invite/6wmUrKMbdC'} className="icon">
                    <AiOutlineDiscord style={{display:"inline"}}/>
                </a>
            </div>
        </footer>
    )
}