import Link from "next/link";
import Reveal from "./Reveal";

export default function HeroSection() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-8 md:px-8 bg-[#0a192f] text-white">
            <Reveal>
                <div className="text-center">
                    <p className="text-cyan-400 text-lg">Hello, my name is</p>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        Reza Nur <span className="text-cyan-400">Ramadhan</span>
                    </h1>
                    <p className="text-xl mb-4">
                        Every pixel matters. Every line of code tells a story. Let’s build yours.
                    </p>
                    <Link href="#about" className="inline-block relative bg-gradient-to-r from-cyan-400 to-purple-500 p-[2px] rounded-full group">
                        <span className="block bg-[#0a192f] rounded-full px-4 py-2">
                            <span className="text-xl text-white block group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition">
                            Get it Touch
                            </span>
                        </span>
                    </Link>
                </div>
            </Reveal>
        </section>
    );
}
