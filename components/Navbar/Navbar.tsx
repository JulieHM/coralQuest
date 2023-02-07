import Link from 'next/link';
import React from 'react'; 
import { MenuButton } from '../Button/MenuButton';
import Image from 'next/image';



export const Navbar = ({}) => <>
    <div style={{backgroundColor:"#41C2CB", display:"flex", flexDirection:"column", width:"20vw", height: '100vh' ,alignItems: "center"}}>
        {/* TODO: endre til ekte avatar med props/state */}
        <Image
         src="/../public/Avatar.png"
         alt="Avatar"
         width={200}
         height={200}
        />
        <h2>Navn</h2>
      
        <svg width="148" height="11" viewBox="0 0 148 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="148" height="11" rx="5.5" fill="#DFF9FB" />
        <rect width="89" height="11" rx="5.5" fill="#FBD039"/>  {/* TODO: legge til at lengden er lik antall koraller oppnådd/total */}
        </svg>
        <p>x / x koraller</p>

        <div style={{display: "flex", flexDirection:"column", width:"100%", alignItems: "flex-start"}}>
        <MenuButton title={'Kjøp koraller'} href={'/quest/3'}></MenuButton>
        <MenuButton title={'Quiz'} href={'/quest/1'}></MenuButton>
        <MenuButton title={'Dykketur'} href={'/quest/2'}></MenuButton>
        </div>
    </div>
</>