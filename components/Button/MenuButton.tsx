import Link from 'next/link';
import React from 'react'; 
import './MenuButton.module.css'

type ButtonProps = {
  title: string,
  href: string
}

export const MenuButton = ({ title, href }: ButtonProps) => <>
        <Link href={href} id="knapp" style={{display: 'inline-block', width: '80%', height:"5vh", textAlign:"left", backgroundColor:"#41C2CB", border:"none", fontSize:"20px", color:"#ffffff", marginTop:"3vh", marginLeft:"20%"}}>{ title }</Link>
</>
