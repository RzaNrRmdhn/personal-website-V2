import { VscTriangleRight } from "react-icons/vsc";
import Image from "next/image";
import MyPhoto from "@/img/RZz.jpg";
import Reveal from "./Reveal";

export default function AboutMe() {
    return (
        <section id="about" className="scroll-mt-20 w-full px-8 py-24 text-white flex flex-col md:flex-row items-center justify-center gap-16 bg-slate-900 font-sans">
            <div className="max-w-2xl md:w-2/3">
                <Reveal>
                    <div className="flex items-center space-x-4 mb-6">
                        <VscTriangleRight className="w-8 h-8 text-cyan-400" />
                        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
                            About Me
                        </h1>
                        <div className="h-px flex-grow bg-slate-400"></div>
                    </div>

                    <div className="space-y-4 text-lg text-slate-300">
                        <p>
                            Hello! My name is Rezz and I love bringing ideas to life through code and design. My journey in web development started back when I taught myself to build simple frontend websites using just HTML and Bootstrap — ever since then, I’ve been hooked on solving problems and crafting digital experiences that are both functional and thoughtful.
                        </p>
                        <p>
                            Fast-forward to today, I’ve gained hands-on experience through freelance work, an internship, and working closely with a senior programmer and project manager on real-world applications. My current focus is expanding my skills in React and Next.js with a robust Go backend, while also diving deeper into cybersecurity to understand both how to build and protect modern applications.
                        </p>
                        <p>
                            Lately, I’ve been exploring the intersection of design, development, and security — from building LMS platforms to experimenting with push notifications and microservices. I’m always curious to learn how small details make big impacts on usability and security.
                        </p>
                        <p>
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <ul className="list-disc ml-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-8">
                            <li>Laravel</li>
                            <li>Next.js</li>
                            <li>Tailwind CSS</li>
                            <li>Golang</li>
                            <li>PostgreSQL</li>
                            <li>MySQL</li>
                            <li>Docker</li>
                            <li>Flutter</li>
                        </ul>
                    </div>
                </Reveal>
            </div>

            <div className="md:w-1/3 w-full flex justify-center items-start pt-8 md:pt-0">
                <Reveal>
                    <div className="relative inline-block group">
                        <div className="absolute top-4 left-4 w-full h-full rounded-lg border-2 border-cyan-400"></div>
                        <div className="relative rounded-lg overflow-hidden z-10 inline-block">
                            <Image
                            src={MyPhoto}
                            alt="Reza Nur Ramadhan"
                            width={400}
                            height={400}
                            className="object-cover"
                            />
                            <div className="absolute inset-0 bg-cyan-500/70 mix-blend-multiply transition-all duration-300 group-hover:bg-transparent"></div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
