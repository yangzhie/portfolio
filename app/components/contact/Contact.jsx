"use client"

import React, { useEffect, useRef } from 'react'
import { IoLogoLinkedin, IoLogoGithub, IoIosMail } from "react-icons/io"
import { IoLocationSharp } from "react-icons/io5"

import StarsCanvas from './Stars'
import ContactForm from './ContactForm'
import { Reveal } from '../utils/Reveal'

import { motion, useAnimation, useInView } from 'framer-motion'

function Contact() {

    function Footer() {
        return (
            <footer className="absolute text-white bottom-0 w-[95%] md:w-full border-t-2 text-sm text-center pt-5">
                <p className='shrikhand mb-[5px] text-amber-600'>&#169; 2024 Arnav Malasi</p>
            </footer>
        )
    }

    const ref = useRef(null)

    const inView = useInView(ref, { once: true })
    const controls = useAnimation()

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        } else {
            controls.start('hidden')
        }
    }, [controls, inView])

    const variants = {
        hidden: {
            x: '-100%',
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
        },
    }

    return (
        <>
            <div className='bg-slate-800 h-[150px] flex justify-end items-center'>
                <div className='shrikhand text-[50px] mr-[75px] text-amber-600'>
                    <Reveal>
                        <div className='shrikhand'>
                            CONTACT
                        </div>
                    </Reveal>
                </div>
            </div>

            <div className='flex flex-col relative bg-slate-800 ml-[15px]'>

                <div className='z-0'>
                    <StarsCanvas />
                </div>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    transition={{ type: 'tween', delay: 0.2, duration: 1 }}
                    className='z-10 flex flex-col ml-[550px] w-[400px] h-[700px] content-between border-2 border-white rounded gap-2 p-8'
                >
                    <p className='text-white'>Get in touch</p>
                    <h3 className='text-[40px] font-bold custom-gradient-2'>Contact Me</h3>

                    <div className='flex space-x-5 w-fit'>
                        <IoLocationSharp color='red' className="text-xl md:text-2xl" />
                        <p className='text-white'>Melbourne</p>
                    </div>

                    <div className='flex space-x-5 w-fit'>
                        <IoIosMail color='blue' className="text-xl md:text-2xl" />
                        <a href="mailto:arnavmalasi2212@gmail.com" className='text-white'>arnavmalasi2212@gmail.com</a>
                    </div>

                    <div className='flex space-x-5 w-fit'>
                        <IoLogoGithub color='black' className="text-xl md:text-2xl" />
                        <a href="https://github.com/yangzhie" target="_blank" className='text-white'>github.com/yangzhie</a>
                    </div>

                    <div className='flex space-x-5 w-fit'>
                        <IoLogoLinkedin color='darkblue' className="text-xl md:text-2xl" />
                        <a href="https://www.linkedin.com/in/arnav-malasi-2ba054232/" target="_blank" className='text-white'>linkedin.com/in/arnavmalasi</a>
                    </div>

                    <ContactForm />
                </motion.div>

                <div className="z-20 mt-20">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Contact