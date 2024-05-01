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

    const smoothScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId)
        section.scrollIntoView({
            behavior: "smooth",
        })
        setSelected(sectionId)
    }

    return (
        <div className="fixed bg-[#e7eef9] h-full z-[1000]">
            <motion.nav
                initial={{ x: -70 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className='writing-mode-vertical h-[600px] flex flex-row items-center content-center justify-between mt-[20px]'
            >
                <span className='text-amber-400 text-lg font-bold cursor-pointer -rotate-90'>
                    AM
                </span>

                <motion.a
                    initial={{ x: -70 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    onClick={() => smoothScrollToSection("home")}
                    className={`text-[#FFAC1C] w-[50px] h-[80px] font-bold flex justify-center items-center hover:bg-[#F08000] hover:opacity-70 hover:text-white transition ease-in-out dela cursor-pointer -80 ${selected === "home" ? "text-slate-800" : ""}`}
                >
                    Home
                </motion.a>

                <motion.a
                    initial={{ x: -70 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    onClick={() => smoothScrollToSection("about")}
                    className={`text-[#FFAC1C] w-[50px] h-[80px] font-bold flex justify-center items-center hover:bg-[#F08000] hover:opacity-70 hover:text-white transition ease-in-out delay cursor-pointer 80 ${selected === "about" ? "text-slate-800" : ""}`}
                >
                    About
                </motion.a>

                <motion.a
                    initial={{ x: -70 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    onClick={() => smoothScrollToSection("projects")}
                    className={`text-[#FFAC1C] w-[50px] h-[80px] font-bold flex justify-center items-center hover:bg-[#F08000] hover:opacity-70 hover:text-white transition ease-in-out delay-80 cursor-pointer ${selected === "projects" ? "text-slate-800" : ""}`}
                >
                    Projects
                </motion.a>

                <motion.a
                    initial={{ x: -70 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    onClick={() => smoothScrollToSection("contact")}
                    className={`text-[#FFAC1C] w-[50px] h-[80px] font-bold flex justify-center items-center hover:bg-[#F08000] hover:opacity-70 hover:text-white transition ease-in-out delay-8 cursor-pointer ${selected === "contact" ? "text-slate-800" : ""}`}
                >
                    Contact
                </motion.a>
            </motion.nav>
        </div>
    )
}

export default Sidebar
