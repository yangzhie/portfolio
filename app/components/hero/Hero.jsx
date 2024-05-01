"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"

function Hero() {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

    return (
        <>
            <div
                ref={ref}
                id='home'
                className='section-wrapper w-full h-screen overflow-hidden relative grid place-items-center'
            >
                <div className='grid'>
                    <motion.h1
                        style={{ y: textY }}
                        className='rubik text-[#FFAC1C] md:text-9xl relative z-[60]'
                    >
                        Arnav
                    </motion.h1>

                    <motion.h2
                        style={{ y: textY }}
                        className='rubik text-white text-6xl relative z-[70] mb-[200px] text-center'>
                        Malasi
                    </motion.h2>
                </div>

                <motion.div
                    className='absolute inset-0 z-0'
                    style={{
                        backgroundImage: `url(/hero-images/background.jpg)`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: backgroundY,
                    }}
                />

                <div
                    className='absolute inset-0 z-[900]'
                    style={{
                        backgroundImage: `url(/hero-images/bottom-img.png)`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: backgroundY,
                    }}
                />
            </div >
        </>
    )
}

export default Hero