import Link from "next/link";

import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import 
{  
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,

} from 'react-icons/ri';

//Components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

export default function Hero(){
    return(
        <section className="py-12 xl:py-24 h-[85vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                        {/* Text */}
                    <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Web developer</div>
                    <h1 className="h1 mb-4">Hello, my name is Alexandre</h1>
                    <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
                    I'm a professional Web Developer. My main goal is to assist and satisfy local and global clients through web development solutions.
                    </p>
                    {/* Button */}
                    <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                        <Link href={'/contact'}>
                            <Button className='gap-x-2'>Contact me <Send size={18}/> </Button>
                        </Link>
                        <Link href={'/alexandre_brasil.pdf' }>
                            <Button variant='secondary' className='gap-x-2'>Download CV <Download size={18}/> </Button>
                        </Link>
                    </div>
                    <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-foreground text-[22px] hover:text-primary transition-all' />
                    </div>
                    {/* Image */}
                    
                    <div className="hidden xl:flex relative">
                        {/* Badge 1 */}
                        <Badge
                            containerStyles='absolute top-[24%] -left-[8rem]'
                            icon={<RiBriefcase4Fill/>}
                            endCountNum={3}
                            badgeText='Years of experience'/>
                        {/* Badge 2 */}
                        <Badge
                            containerStyles='absolute top-[80%] -left-[13rem]'
                            icon={<RiTodoFill/>}
                            endCountNum={9}
                            endCountText='k'
                            badgeText='Finished projects'/>
                            {/* Badge 3 */}
                        <Badge
                            containerStyles='absolute top-[55%] -right-[-23rem]'
                            icon={<RiTeamFill/>}
                            endCountNum={5}
                            endCountText='k'
                            badgeText='Happy Clients'/>

                        <div className="bg-hero_shape_2_light dark:bg-hero_shape_2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-2 -right-0 ">
                            <DevImg containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom' imgSrc='/about/developer-shape.png'/>
                        </div>
                    </div>
                    {/* icons */}
                    <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                        <RiArrowDownSLine className="text-3xl text-primary" />
                    </div>
                </div>
            </div>
        </section>
    )
}