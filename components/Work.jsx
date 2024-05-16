'use client';
import Link from "next/link";
import { Button } from "./ui/button";
import 'swiper/css';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';





import ProjectCard from "./ProjectCard";


export default function Work(){
    const projectData = [
        {
            image: '/work/2.png',
            category: 'next js',
            name: 'Inversol - Energia Solar',
            description: 'Empresa de energia solar',
            link: 'https://www.inversolenergiasolar.com.br/',
            github: '/'
        },
        {
            image: '/work/1.png',
            category: 'react js',
            name: 'Fischer Planejados',
            description: 'Montador de móveis',
            link: 'https://fischerplanejados.art/',
            github: '/'
        },
    ]
    return(
            <section className="relative mb-12 xl:mb-48">
            <div className="container mx-auto">
                <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                    <h2 className="section-title mb-4">Lastest Projects</h2>
                    <p className="subtitle mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatum incidunt </p>
                    <Link href="/projects"> <Button>All Projects</Button> </Link>
                </div>
                {/* lider */}
                <div className="max-w-[1050px] xl:max-w[1000px] xl:absolute right-1 top-0">
                    <Swiper
                    className="h-[480px] "
                    slidesPerView={1} breakpoints={{640:{slidesPerView:2}}}
                    spaceBetween={30}
                    modules={[Navigation, Pagination]}
                    pagination={{clickable:true}}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    >
                        {/* Show only the first 4 projects */}
                        {projectData.slice(0.4).map((project, index)=>{
                            return <SwiperSlide key={index}>
                                <ProjectCard project={project}/>
                            </SwiperSlide>
                        })}
                    </Swiper>                  
                </div>
            </div>
        </section>
    )
}