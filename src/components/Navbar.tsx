import "../app/globals.css";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="fixed top-0 w-full flex justify-between items-center p-4 bg-[#0a192f]/80 backdrop-blur z-50">
            <Link href="/" className="text-white text-2xl font-bold p-4">My Portfolio</Link>
            <nav className="flex items-center space-x-8">
                <Link href="#about" className="group text-xl text-white flex items-center">
                    <span className="mr-1 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        01. 
                    </span>
                    <span className="transition group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent">
                        About
                    </span>
                </Link>
                
                <Link href="#Experiences" className="group text-xl text-white flex items-center">
                    <span className="mr-1 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        02. 
                    </span>
                    <span className="transition group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent">
                        Experiences
                    </span>
                </Link>
                
                <Link href="#Project" className="group text-xl text-white flex items-center">
                    <span className="mr-1 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        03. 
                    </span>
                    <span className="transition group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent">
                        Projects
                    </span>
                </Link>
                
                <Link href="#about" className="group text-xl text-white flex items-center">
                    <span className="mr-1 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        04. 
                    </span>
                    <span className="transition group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent">
                        Contact
                    </span>
                </Link>

                <Link
                    href="/resume.pdf"
                    className="inline-block relative bg-gradient-to-r from-cyan-400 to-purple-500 p-[2px] rounded group"
                    >
                    <span className="block bg-[#0a192f] rounded px-4 py-2">
                        <span className="text-xl text-white block group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition">
                        Resume
                        </span>
                    </span>
                </Link>
            </nav>
        </header>
    );
}
