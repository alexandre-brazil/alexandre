import React from "react";
import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

export default function Services(){

    const servicesData = [
        {
            icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
            title: 'Web Design',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sit totam delectus possimus vitae eum debitis, fugiat nihil corporis ipsa sapiente voluptatum. Dicta distinctio ullam culpa vitae reiciendis dolorem voluptas.'
        },
        {
            icon: <Blocks size={72} strokeWidth={0.8} />,
            title: 'Web Development',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sit totam delectus '
        },
        {
            icon: <Gem size={72} strokeWidth={0.8} />,
            title: 'App Development',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sit totam delectus possimus vitae '
        },
    ]

    return(
        <section className="mb-12 xl:mb-36 mx-auto">
            <div className="container mx-auto">
                <h2 className="section-title mb-12 xl:mb-24 text-center ">My Services</h2>
                <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24">
                {servicesData.map((item, index)=>{
                    const {icon, title, description} = item;
                    return(
                        <Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative gap-x-3' key={index}>
                            <CardHeader className='text-primary absolute -top-[60px]'>
                            <div className="w-[140px] h-[80px] flex justify-center items-center bg-white dark:bg-background ">{icon}</div>
                            </CardHeader>
                            <CardContent className='text-center'>
                                <CardTitle className='mb-4'>{title}</CardTitle>
                                <CardDescription className='text-lg'>{description}</CardDescription>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
            </div>
        </section>
    )
}