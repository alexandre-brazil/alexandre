'use client';

import { RiYoutubeFill, RiLinkedinFill, RiGithubFill, RiFacebookFill, RiInstagramFill } from 'react-icons/ri';
import Link from 'next/link';

export default function Socials({containerStyles, iconsStyles}){
    const icons = [
        {
            path:'https://www.youtube.com/channel/UCM6JiU-SwOc4GEpVxHFctWw',
            name: <RiYoutubeFill/>
        },
        {
            path:'https://www.linkedin.com/in/alexandre-brasil-dos-santos/',
            name: <RiLinkedinFill/>
        },
        {
            path:'https://github.com/alexandre-cooper',
            name: <RiGithubFill/>
        },
        {
            path:'https://www.facebook.com/alexandresalvatore27?mibextid=LQQJ4d',
            name: <RiFacebookFill/>
        },
        {
            path:'https://www.instagram.com/_alexandre.brasil?igsh=NHRvNWppY2NhOTh2',
            name: <RiInstagramFill/>
        },
    ]
    return(
        <div className={`${containerStyles}`}>
            {icons.map((icon, index)=>{
                return(
                    <Link rel="noopener noreferrer" target="_blank" href={icon.path} key={index}>
                        <div className={`${iconsStyles}`}>
                            {icon.name}
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}