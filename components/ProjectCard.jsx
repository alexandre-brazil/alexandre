import { Link } from "lucide-react";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import {Badge} from "./ui/badge";
import {Github, Link2Icon} from 'lucide-react';

export default function ProjectCard({project}){
    
    return(
       <Card>
        <CardHeader className='p-0'>
            <div className="card_project relative w-full h-[300px] flex justify-center items-center bg-orange-100 dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%]">
                <Image
                className="absolute bottom-9 shadow-2xl"
                width={247}
                height={250}
                alt=""
                priority
                src={project.image}/>
            </div>
            <div>
                <Link
                    href={project.link}
                    className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                    ><Link2Icon className="text-white"/></Link>
            </div>
        </CardHeader>
        <div className="h-full px-8 py-6">        
            <Badge className='uppercase text-sm font-medium mb-2 absolute top-4 left-5'>{project.category}</Badge>    
            <h4 className="h4 mb-1">{project.name}</h4>
            <p className="text-muted-foreground text-lg">{project.description}</p>
        </div>
       </Card>
    )
}