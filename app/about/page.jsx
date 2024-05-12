import DevImg from "@/components/DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from 'lucide-react';
import { Outfit } from "next/font/google";

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
            text: '78464034, LRV-MT/🇧🇷'
        },
        {
            icon: <MailIcon size={20} />, 
            text: 'alexandre@lekko.com.br'
        },
        {
            icon: <Calendar size={20} />, 
            text: 'Born on 29 April, 2000'
        },
        {
            icon: <GraduationCap size={20} />, 
            text: 'Technology Management'
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
                <div className="flex flex-col xl:flex-row">
                    {/* Image */}
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/about/person.webp'/>
                    </div>
                    {/* Tabs */}
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border-none dark:bg-border-none'>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualifications</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                            </TabsList>
                            {/* Tabs content */}
                            <div className="text-lg mt-12 xl:mt-8">
                                <TabsContent value='personal'>
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">Especializado em webdsgner</h3> 
                                    <p className="subtitle max-w-xl max-auto xl:mx-0">
                                    Um designer especializado é altamente habilidoso em conceber e implementar soluções visuais inovadoras, combinando criatividade com competência técnica. Seu trabalho visa criar experiências visuais memoráveis e funcionais, utilizando sua expertise para transmitir mensagens efetivamente através do design.
                                    </p>
                                    {/* Icons */}
                                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                        {infoData.map((item, index)=>{
                                            return(
                                                <ul className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                    <li className="text-primary">{item.icon}</li>
                                                    <li>{item.text}</li>
                                                </ul>
                                            )
                                        })}
                                    </div>
                                    <div className="flex flex-col gap-y-2 ">
                                    {/* Languagens */}
                                    <div className="text-primary">Language Skill</div>
                                    <div className="border-b border-border"></div>
                                    <div>English, Português and Spanish</div>
                                    </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value='qualifications'>Qualifications</TabsContent>
                                <TabsContent value='skills'>Skills</TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}