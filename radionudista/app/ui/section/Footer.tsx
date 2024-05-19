'use client'
import { FaHandHoldingHeart } from "react-icons/fa6";

export default function Footer(){
    return (
        <footer className="h-[5svh] flex justify-center items-center">
            <p 
                className="text-center sm:text-[15px] text-[3svw] font-[800] flex justify-center items-baseline"
                style={{textShadow:"1px 1px 2px #dfdfdf"}}
            >
                Gracias a todos los que hacen posible @radionudista <FaHandHoldingHeart style={{display:"inline",marginLeft:5,filter:'drop-shadow(1px 1px 2px #dfdfdf)'}} />
            </p>
        </footer>
    )
}