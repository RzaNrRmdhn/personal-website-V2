"use client";

import { useState, useEffect, useRef, FC } from "react";
import { VscTriangleRight } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Saidata_Dashboard from "@/img/Saidata_Dashboard.png";
import Dashboard from "@/img/dashboard.png";
import layanan from "@/img/layanan.png";
import history from "@/img/history.png";
import projects from "@/img/project.png";
import HeroSection from "@/img/herosection.png";
import Experiences from "@/img/experiences.png";
import type { StaticImageData } from "next/image";
import Reveal from "./Reveal";

interface Project {
    isFeatured: boolean;
    title: string;
    description: string;
    tags: string[];
    images: (string | StaticImageData)[];
    links: {
        github: string;
        external: string;
    };
    }

interface ImageCarouselProps {
    images: (string | StaticImageData)[];
}

const projectData: Project[] = [
    {
        isFeatured: false,
        title: "Saidata",
        description:
        "Saidata is my thesis project for Internal Campus — a Laravel web app for managing and tracking student service requests with real-time multi-channel notifications.",
        tags: ["Laravel", "MySQL", "Redis", "JavaScript", "Telegram Bot", "Tailwind CSS", "Ajax", "Scrum", "Git"],
        images: [
            Saidata_Dashboard,
            Dashboard,
            layanan,
            history
        ],
        links: {
            github: "#",
            external: "https://saidata.fmipa.unila.ac.id/",
        },
    },
    {
        isFeatured: false,
        title: "Personal Website V2",
        description:
        "A personal website to showcase my projects, skills, and articles about web development and design.",
        tags: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
        images: [
            HeroSection,
            projects,
            Experiences
        ],
        links: {
            github: "https://github.com/RzaNrRmdhn/bot_discord",
            external: "#",
        },
    },
];

const ImageCarousel: FC<ImageCarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startCarousel = () => {
        if (intervalRef.current) return;
            intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 800);
    };

    const stopCarousel = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setCurrentIndex(0);
        }
    };

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <div className="relative group w-full h-full rounded-lg overflow-hidden" onMouseEnter={startCarousel} onMouseLeave={stopCarousel}       >
            {images.map((src, index) => { const imgSrc = typeof src === "string" ? src : src.src;
                return (
                <img
                    key={imgSrc}
                    src={imgSrc}
                    alt={`Project image ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                />
                );
            })}
            <div className="absolute inset-0 bg-cyan-600/70 mix-blend-color transition-all duration-300 group-hover:bg-transparent"></div>
        </div>
    );
};

export default function Project() {
    return (
        <section id="Project" className="scroll-mt-20 w-full px-8 py-24 text-white flex flex-col md:flex-row items-center justify-center gap-16 bg-slate-900 font-sans">
            <div className="w-full max-w-7xl">
                <Reveal>
                    <div className="flex items-center space-x-4 mb-6">
                        <VscTriangleRight className="w-8 h-8 text-cyan-400" />
                        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
                            My Projects
                        </h1>
                        <div className="h-px flex-grow bg-slate-400"></div>
                    </div>

                    <div className="flex flex-col space-y-16">
                        {projectData.map((project, index) => {
                            const isEven = index % 2 === 1;
                            return (
                            <div key={project.title} className={`flex flex-col lg:flex-row ${ isEven ? "lg:flex-row-reverse" : "" } gap-8 lg:gap-12 items-center`}>
                                <div className="w-full lg:w-1/2 h-80 rounded-lg bg-slate-800 shadow-xl">
                                    <ImageCarousel images={project.images} />
                                </div>

                                <div className={`flex flex-col w-full lg:w-1/2 max-w-xl ${isEven ? "items-start text-left" : "items-end text-right"}`}>
                                    <p className="text-sm text-cyan-400 mb-2">
                                        {project.isFeatured ? "Featured Project" : "Project"}
                                    </p>
                                    <h3 className="text-2xl font-bold text-slate-100 mb-6">
                                        {project.title}
                                    </h3>

                                    <div className="bg-slate-800 p-6 rounded-lg shadow-lg mb-6">
                                        <p className="text-slate-300" dangerouslySetInnerHTML={{
                                            __html: project.description,
                                        }}
                                        />
                                    </div>

                                    <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
                                        {project.tags.map((tag) => (
                                        <span key={tag} className="text-slate-400 text-sm">
                                            {tag}
                                        </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 text-slate-300">
                                        <a href={project.links.github} aria-label="GitHub" className="hover:text-cyan-400 transition-colors">
                                            <FaGithub className="w-6 h-6" />
                                        </a>
                                        <a href={project.links.external} aria-label="External Link" className="hover:text-cyan-400 transition-colors">
                                            <FiExternalLink className="w-6 h-6" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
