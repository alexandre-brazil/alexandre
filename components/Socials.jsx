'use client';

import { RiYoutubeFill, RiLinkedinFill, RiGithubFill, RiFacebookFill, RiInstagramFill } from 'react-icons/ri';
import Link from 'next/link';

export default function Socials({containerStyles, iconsStyles}){
    const icons = [
        {
            path:'/',
            name: <RiYoutubeFill/>
        },
        {
            path:'/',
            name: <RiLinkedinFill/>
        },
        {
            path:'/',
            name: <RiGithubFill/>
        },
        {
            path:'/',
            name: <RiFacebookFill/>
        },
        {
            path:'/',
            name: <RiInstagramFill/>
        },
    ]
    return(
        <div className={`${containerStyles}`}>
            {icons.map((icon, index)=>{
                return(
                    <Link href={icon.path} key={index}>
                        <div className={`${iconsStyles}`}>
                            {icon.name}
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}