"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function SocialsMedia() {
    return (
        <div className="fixed bottom-0 left-8 flex flex-col items-center space-y-4">
            <Link href="https://github.com/RzaNrRmdhn/" target="_blank">
                <FaGithub className="text-slate-300 hover:text-cyan-400 w-8 h-8" />
            </Link>
            <Link href="https://www.linkedin.com/in/rezanurramadhan/" target="_blank">
                <FaLinkedin className="text-slate-300 hover:text-cyan-400 w-8 h-8" />
            </Link>
            <Link href="https://twitter.com/" target="_blank">
                <FaTwitter className="text-slate-300 hover:text-cyan-400 w-8 h-8" />
            </Link>
            <Link href="https://instagram.com/" target="_blank">
                <FaInstagram className="text-slate-300 hover:text-cyan-400 w-8 h-8" />
            </Link>
            <div className="w-px h-24 bg-slate-300 mt-4"></div>
        </div>
    );
}
