"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function Sidebar() {
    const [selected, setSelected] = useState("")

    useEffect(() => {
        const sections = document.querySelectorAll(".section-wrapper")

        const options = {
            threshold: 0.3,
        }

        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setSelected(entry.target.id)
                }
            })
        }

        const observer = new IntersectionObserver(callback, options)

        sections.forEach((section) => observer.observe(section))
    }, [])

    return (
        <div className="fixed bg-[#e7eef9] h-full z-[1000]">
            <motion.nav
                initial={{ x: -70 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className='writing-mode-vertical h-[600px] flex flex-row items-center content-center justify-between mt-[7px]'
            >
                <span className='text-white text-lg font-bold cursor-pointer' onClick={() => {
                    document.location.hash === "" ?
                        document.getElementById("main")?.scrollIntoView() :
                        document.location.hash = ''
                }}>
                    <img className="w-[50px]" src="/logo-final-edited.png" alt="" />
                </span>

                <motion.a
                    initial={{ x: -70 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    href="#about"
                    onClick={() => {
                        setSelected("about")
                    }}
                    className={`text-[#FFAC1C] w-[50px] h-[80px] flex justify-center items-center hover:bg-[#F08000] hover:opacity-70 hover:text-white transition ease-in-out delay-80 ${selected === "about" ? "font-bold" : ""}`}
                >
                    About
                </motion.a>

                <motion.a
                    initial={{ x: -70 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    href="#projects"
                    onClick={() => setSelected("projects")}
                    className={`text-[#FFAC1C] w-[50px] h-[80px] flex justify-center items-center hover:bg-[#F08000] hover:opacity-70 hover:text-white transition ease-in-out delay-80 ${selected === "projects" ? "font-bold" : ""}`}
                >
                    Projects
                </motion.a>

                <motion.a
                    initial={{ x: -70 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    href="#experience"
                    onClick={() => setSelected("experience")}
                    className={`text-[#FFAC1C] w-[50px] h-[80px] flex justify-center items-center hover:bg-[#F08000] hover:opacity-70 hover:text-white transition ease-in-out delay-80 ${selected === "experience" ? "font-bold" : ""}`}
                >
                    Exp.
                </motion.a>

                <motion.a
                    initial={{ x: -70 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    href="#contact"
                    onClick={() => setSelected("contact")}
                    className={`text-[#FFAC1C] w-[50px] h-[80px] flex justify-center items-center hover:bg-[#F08000] hover:opacity-70 hover:text-white transition ease-in-out delay-80 ${selected === "contact" ? "font-bold" : ""}`}
                >
                    Contact
                </motion.a>
            </motion.nav>
        </div>
    )
}

export default Sidebar
