import React from "react";
import Socials from "./Socials";
export default function Footer(){
    return(
        <footer className=" bg-secondary dark:bg-secondary py-4">
            <div className="container mx-auto ">
                <div className="flex flex-col items-center justify-center">
                    <Socials
                    iconsStyles='text-primary text-[20px] hover:text-black dark:hover:text-white transition-all;'
                    containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
                    />
                    <div className="text-muted-foreground text-center">
                        Copiright&copy; <strong>Alexandre Brasil.</strong> <br/> All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}