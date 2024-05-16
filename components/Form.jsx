'use client';
import React from "react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {User, MailIcon, ArrowRightIcon, MessageSquare} from 'lucide-react';

export default function Form(){
    return(
        <form className="container flex flex-col py-8 gap-y-4">
            <div className="relative flex items-center">
            <Input type='name' id='name' placeholder='Last name'/>
            <User size={20} className="absolute right-6"/>
            </div>
            <div className="relative flex items-center">
            <Input type='email' id='email' placeholder='Email'/>
            <MailIcon size={20} className="absolute right-6"/>
            </div>
            <div className="relative flex items-center">
            <Textarea type='message' id='message' placeholder='Type Your Message Here...'/>
            <MessageSquare size={20} className="absolute right-6 top-4"/>
            </div>
            <div className="flex items-center justify-center xl:justify-start">
            <Button className='flex items-center max-w-[166px] gap-x-1'>Let's Talk <ArrowRightIcon/></Button>
            
            </div>
        </form>
    )
}