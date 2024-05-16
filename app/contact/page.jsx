import { MailIcon, HomeIcon, PhoneCall } from "lucide-react"
import Form from "@/components/Form"

export default function Contact(){
    return(
        <section>
            <div className="container mx-auto">
                
                <div className="flex flex-col xl:grid grid-cols-2">
                    
                    <div className="flex flex-col justify-center py-2">
                    <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
                        <span className="w-[30px] h-[2px] bg-primary"></span>
                        Say Hello
                    </div>
                    <h1 className="h1 max-w-md mb-8">Let's Work together </h1>
                    <p className="subtitle max-w-[400px]">
                    Having a digital presence is crucial for a company as it serves as the first point of contact for potential customers. It provides concise and compelling information about products/services, captures leads, and helps direct traffic towards conversions. It's an effective tool for increasing brand visibility and generating initial interest from visitors.
                    </p>
                    </div>
                    <Form>
                    </Form>
                </div>
                <div>
                    <div>
                        <div className="flex items-center gap-x-3">
                            <MailIcon size={18} className="text-primary"/>
                            <h4>alexandre.brazil.official@gmail.com</h4>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <HomeIcon size={18} className="text-primary"/>
                            <h4>PC Exercito Libertador, N 94A, Porto/Portugal</h4>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <PhoneCall size={18} className="text-primary"/>
                            <h4>+351 913 162 846</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}