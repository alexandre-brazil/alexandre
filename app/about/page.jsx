import DevImg from "@/components/DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from 'lucide-react';

export default function About(){
    const infoData = [
        {
            icon: <User2 size={20} />, 
            text: 'Alexandre Brasil'
        },
        {
            icon: <PhoneCall size={20} />, 
            text: '+55 65 992792383'
        },
        {
            icon: <HomeIcon  size={20} />, 
            text: '3882-S, Salgueiro Street, Araras Park -  MT, BRA'
        },
        {
            icon: <MailIcon size={20} />, 
            text: 'alexandre.brazil.official@gmail.com'
        },
        {
            icon: <Calendar size={20} />, 
            text: 'Born on 29 April, 2000'
        },
        {
            icon: <GraduationCap size={20} />, 
            text: 'Information Technology Management and Postgraduate in Mobile Development'
        },
    ];
    const skillDatas = [
        {
            title: 'skills',
            data:[
                {
                    pathImg:'HTML, CSS'
                },
                {
                    pathImg:'Front-end Development'
                },
                {
                    pathImg:'JavaScript'
                },
                {
                    pathImg:'Back-end Development'
                },
                {
                    pathImg:'Designer Motion and VFX'
                },
            ]
        },
        {
            title: 'tools',
            data:[
                {
                    pathImg:'/about/vscode.svg'
                },
                {
                    pathImg:'/about/figma.svg'
                },
                {
                    pathImg:'/about/notion.svg'
                },
                {
                    pathImg:'/about/wordpress.svg'
                },
            ]
        }
    ];
    const qualificationData = [
        {
            title: 'education',
            data:[
                {
                    curso: 'Information Technology Management',
                    qualification: 'Developer Full Stack',
                    years: '2018 - 2022'
                },
                {
                    universy: 'Mobile Development',
                    qualification: 'Postgraduate',
                    years: '2022 - 2023'
                },
                
            ]
        },
        {
            title: 'experience',
            data:[
                {
                    company: 'Lekko Group',
                    qualification: 'Software Engineer',
                    years: '2023 - 2024'
                },
                {
                    universy: 'Excellence Tecnologia',
                    qualification: 'IT technical support officer',
                    years: '2021 - 2022'
                },
                
            ]
        },
    ];

    const getData = (arr, title)=>{
        return arr.find((item)=> item.title===title);
    };
  

    return(
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
            </div>
        </section>
    )
}