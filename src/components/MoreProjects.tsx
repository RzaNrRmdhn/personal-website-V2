"use client";

import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";
import { useState } from "react";
import Reveal from "./Reveal";

const projects = [
    {
        title: "Nevas Bot Discord",
        description:
        "A custom Discord bot for sending announcements, auto-muting toxic users, tracking voice channel activity, and Report & Suggest System, smooth server onboarding.",
        technologies: ["Javascript", "Discord.js", "Node.js", "Express.js", "Railways"],
        github: "https://github.com/RzaNrRmdhn/bot_discord"
    },
    {
        title: "Evoting System",
        description:
        "An e-voting dashboard for monitoring local elections, managing TPS data, and exporting results to Excel.",
        technologies: ["Laravel", "MySQL", "PHP", "Scrum", "Git", "Tailwind CSS"],
        link: "https://formc1.surveiciptailmu.org/",
    },
    {
        title: "Dashboard Tunas Dwipa Matra",
        description:
        "An internal dashboard for PT Tunas Dwipa Matra to monitor sales data and manage reports efficiently.",
        technologies: ["Python", "Odoo", "Django", "PostgreSQL", "Scrum", "Git"],
    },
    {
        title: "Landing Page Borobudur University",
        description:
        "A modern landing page for Borobudur University to showcase programs, admission info, and campus highlights.",
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    },
    {
        title: "Personal Website V1",
        description:
        "A personal website to showcase my projects, skills, and articles about web development and design.",
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        link: "https://rzanrrmdhn.github.io/Personal-Website/index.html",
        github: "https://github.com/RzaNrRmdhn/Personal-Website"
    },
    
];

export default function MoreProjects() {
    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? projects : projects.slice(0, 6);

    return (
        <section id="about" className="scroll-mt-20 w-full px-8 py-24 text-white flex flex-col items-center justify-center gap-16 bg-[#0a192f] font-sans">
            <div className="w-full max-w-6xl flex flex-col items-center">
                <Reveal>
                    <h2 className="text-3xl font-bold text-slate-200 text-center">
                        More Projects
                    </h2>
                    <div className="h-px w-24 bg-slate-400 mx-auto my-4"></div>
                    <a href="#" className="text-cyan-400 font-mono hover:underline mb-8">
                        Archives
                    </a>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        {visibleProjects.map((project, index) => (
                            <div key={index} className="bg-slate-800 rounded-md p-6 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 group">
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <FiFolder className="w-10 h-10 text-cyan-400" />
                                        <div className="flex items-center space-x-4">
                                            {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate-400 hover:text-cyan-400"
                                            >
                                                <FiGithub className="w-5 h-5" />
                                            </a>
                                            )}
                                            {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate-400 hover:text-cyan-400">
                                                <FiExternalLink className="w-5 h-5" />
                                            </a>
                                            )}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-200 mb-4 group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm">{project.description}</p>
                                </div>

                                <ul className="flex flex-wrap items-center mt-6 text-sm text-slate-400 font-mono">
                                    {project.technologies.map((tech, i) => (
                                    <li key={i} className="mr-4 mb-1">
                                        {tech}
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {projects.length > 6 && (
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="mt-8 px-6 py-2 bg-slate-800 text-cyan-400 border border-cyan-400 rounded hover:bg-slate-700 transition">
                        {showAll ? "Show Less" : "Show More"}
                    </button>
                    )}
                </Reveal>
            </div>
        </section>
    );
}
