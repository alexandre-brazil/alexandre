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
            text: '+351 913 162 846'
        },
        {
            icon: <HomeIcon  size={20} />, 
            text: 'Libertador, N 94A Porto/PT'
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
                    universy: 'Information Technology Management',
                    qualification: 'Bachelor',
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
                    role: 'Software Engineer',
                    years: '2023 - 2024'
                },
                {
                    company: 'Excellence Tecnologia',
                    role: 'IT technical support officer',
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
                                        <h3 className="h3 mb-4">Web Design Specialist</h3> 
                                    <p className="subtitle max-w-xl max-auto xl:mx-0">
                                    Enthusiast in Web Development, I have studied and worked intensively in the field, focusing on the JavaScript ecosystem. My journey began in 2017 during my Information Technology Management course, where I learned programming logic and was exposed to C and Java. After completing the course, I specialized in Mobile Development. I have explored technologies such as JavaScript, CSS, HTML, TypeScript, React, Next, Node, and Nest. Currently, I dedicate myself daily to creating new projects and seek challenges that allow me to grow professionally and contribute to exceptional web experiences.
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
                                    <div>English, Portuguese and Spanish</div>
                                    </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value='qualifications'>
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journed</h3>
                                        <div className="grid md:grid-cols-2 gap-y-8">
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Briefcase/>
                                                    <h4 className="capitalize font-mediumx">{getData(qualificationData, 'experience').title}</h4>
                                                </div>
                                                {/* list */}
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(qualificationData, 'experience').data.map((item, index)=>{
                                                        const {company, role, years} = item;
                                                        return(
                                                            <div className="flex gap-x-8  group relative" key={index}>
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2"></div>
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                <ul>
                                                                <li  className="font-semibold text-xl leading-none mb-2 ">{company}</li>
                                                                <li className="text-lg leading-none text-muted-foreground mb-4">{role}</li>
                                                                <li className="text-base font-medium ">{years}</li>
                                                                </ul>
                                                                
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                
                                            </div>
                                            {/* education */}
                                            <div  className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <GraduationCap size={28}/>
                                                    <h4 className="capitalize font-mediumx">{getData(qualificationData, 'education').title}</h4>
                                                </div>
                                                {/* list */}
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(qualificationData, 'education').data.map((item, index)=>{
                                                        const {universy, qualification, years} = item;
                                                        return(
                                                            <div className="flex gap-x-8  group relative" key={index}>
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2"></div>
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                <ul>
                                                                <li  className="font-semibold text-xl leading-none mb-2 ">{universy}</li>
                                                                <li className="text-lg leading-none text-muted-foreground mb-4">{qualification}</li>
                                                                <li className="text-base font-medium ">{years}</li>
                                                                </ul>
                                                                
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value='skills'>
                                <div className="text-center xl:text-left">
                                        <h3  className="h3 mb-4">What I use Everyday </h3>
                                        <div className="mb-16">
                                            <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                            <div  className="border-b border-border mb-8"></div>
                                                <div>
                                                        {getData(skillDatas, 'skills').data.map((item, index)=>{
                                                        const {pathImg} = item;
                                                        return (
                                                            <ul className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                                                <li className="font-medium">{pathImg}</li>
                                                            </ul>
                                                        )
                                                        })}
                                                </div>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                                            <div className="border-b border-border"></div>  
                                            <div className="flex gap-x-8 justify-center xl:justify-start">
                                                {getData(skillDatas, 'tools').data.map((item, index)=>{
                                                    const {pathImg} = item;
                                                    return(
                                                        <ul className="mt-3" key={index}>
                                                            <li><img src={pathImg} width={48} height={48} alt="" priority /></li>
                                                        </ul>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}