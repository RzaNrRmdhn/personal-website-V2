import Link from "next/link";
import Reveal from "./Reveal";
import { GrSend } from "react-icons/gr";

export default function GetInTouch() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-8 bg-slate-900 text-white">
            <Reveal>
                <div className="text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        Get in <span className="text-cyan-400">Touch</span>
                    </h1>
                    <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>

                    <p className="text-xl mb-8 text-slate-400">
                        I’m currently open for new projects, collaborations, or just a friendly hello.
                        Let’s build something great together — drop me a message!
                    </p>

                    <Link href="mailto:rezanurramadhan292@gmail.com" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
                        <GrSend className="text-xl" />
                        Say Hello
                    </Link>
                </div>
            </Reveal>
        </section>
    );
}
