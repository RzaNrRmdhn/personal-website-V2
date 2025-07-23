"use client";

import { VscTriangleRight } from "react-icons/vsc";
import { useState } from "react";
import Reveal from "./Reveal";

const experienceData = [
    {
        company: 'Lampung University',
        title: 'Fullstack Web Developer',
        date: 'Sept 2024 - Present',
        description: [
            'Designed and implemented workflows for student service submissions (e.g., active status letters, recommendation letters)...',
            'Developed a multi-channel notification system including in-app alerts, email notifications, and Telegram bot integration...',
            'Established role-based access control for students, faculty administrators, and Staff Academic...',
            'Integrated a digital approval flow between multiple administrative levels...',
            'Implemented a time-based service tracking system with status updates and feedback logging...',
        ],
    },
    {
        company: 'Lembaga Riset Cipta Ilmu Indonesia',
        title: 'Fullstack Web Developer',
        date: 'May 2024 - Nov 2024',
        description: [
            'Developed an interactive dashboard and implemented Excel file import features to streamline data management...',
            'Built a web application to display and manage TPS (polling station) information, including administrative and operator management, as well as vote counting, using the Laravel PHP framework...',
            'Performed regular website maintenance to ensure code consistency and prevent potential errors...',
            'Actively contributed to project delivery by collaborating with the team to find effective solutions and improvements...',
        ],
    },
    {
        company: 'PT Tunas Dwipa Matra',
        title: 'System Engineer (Intern)',
        date: 'Feb 2024 - Jul 2024',
        description: [
            'Worked as a System Engineer Intern, learning and implementing solutions using Odoo and Django frameworks...',
            'Developed a monitoring dashboard for warehouse and spare parts management to improve operational visibility and decision-making...',
            'Designed and integrated interactive charts and advanced filters for the monitoring dashboard, enabling real-time data analysis...',
            'Implemented Django for custom backend functionalities and integrated it with Odoo modules to streamline workflows...',
            'Collaborated closely with cross-functional teams, including warehouse and spare parts departments, to gather requirements and deliver effective solutions...',
        ],
    },
    {
        company: 'Borobudur University',
        title: 'Freelance Frontend Developer',
        date: 'Jan 2024 - Jan 2024',
        description: [
            'Designed and developed the official company profile website for Borobudur University as a Freelance Frontend Developer...',
            'Focused on clean, modern design and mobile-friendly layouts to ensure a seamless user experience across devices...',
            'Collaborated with stakeholders to gather requirements and implement revisions based on feedback to align with the university’s branding...',
            'Delivered well-structured, maintainable code with clear documentation for future updates...',
        ],
    },
    {
        company: 'University of Lampung',
        title: 'Assistant Lecturer',
        date: 'Aug 2022 - Dec 2023',
        description: [
            'Worked as an Assistant Lecturer, supporting the delivery of programming courses such as Java, C++, Laravel, CSS, and HTML...',
            'Prepared and developed learning materials for 16 class meetings per semester to ensure structured and comprehensive lessons...',
            'Taught and guided students through practical coding exercises and problem-solving sessions...',
            'Designed test cases and practical exams, and assessed student performance to ensure fair and accurate grading...',
            'Collaborated closely with the lead lecturer to align teaching methods and course objective...',
        ],
    },
];

export default function Experiences() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="Experiences" className="scroll-mt-20 w-full px-8 py-24 text-white flex flex-col md:flex-row items-center justify-center gap-16 bg-[#0a192f] font-sans">
            <div className="max-w-4xl w-full">
                <Reveal>
                    <div className="flex items-center space-x-4 mb-6">
                        <VscTriangleRight className="w-8 h-8 text-cyan-400" />
                        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
                            My Experiences
                        </h1>
                        <div className="h-px flex-grow bg-slate-400"></div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10 md:gap-16">
                        <div className="flex flex-col relative gap-2 md:gap-4">
                            {experienceData.map((job, index) => (
                            <div key={job.company} className="relative">
                                {activeTab === index && (
                                <span className="absolute left-0 top-0 h-full w-1 bg-cyan-400 rounded"></span>
                                )}

                                <button
                                onClick={() => setActiveTab(index)}
                                className={`pl-4 pr-6 py-2 text-left text-base md:text-lg font-medium whitespace-nowrap w-full transition-colors duration-300 ${
                                    activeTab === index
                                    ? 'text-cyan-400'
                                    : 'text-slate-400 hover:text-cyan-400'
                                }`}
                                >
                                    {job.company}
                                </button>
                            </div>
                            ))}
                        </div>

                        <div className="w-full">
                            {experienceData.map((job, index) => (
                            <div key={job.company} className={`${activeTab === index ? 'block' : 'hidden'}`}>
                                <h3 className="text-xl md:text-2xl font-semibold text-slate-100">
                                    {job.title}{' '}
                                    <span className="text-cyan-400">@{job.company}</span>
                                </h3>
                                <p className="text-sm text-slate-400 mt-1 mb-6">{job.date}</p>
                                <ul className="text-base space-y-4">
                                {job.description.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                    <VscTriangleRight className="w-3 h-3 mt-1.5 text-cyan-400 flex-shrink-0" />
                                    <span className="text-slate-300">{item}</span>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
