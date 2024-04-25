import React from 'react'
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoGithub, IoIosMail } from "react-icons/io"
import { IoLocationSharp } from "react-icons/io5"

import { slideIn } from '../utils/Motion';


import StarsCanvas from './Stars';
import ContactForm from './ContactForm';



function Contact() {

    function Footer() {
        return (
            <footer className="absolute text-white bottom-0 w-[95%] md:w-full border-t-2 text-sm text-center pt-5">
                <p className='custom-font'>&#169; 2024 Arnav Malasi</p>
            </footer>
        )
    }

    return (
        <>
            <div className='flex flex-col relative bg-slate-800'>

                <div className='z-0'>
                    <StarsCanvas />
                </div>

                <div className='z-10 flex flex-col ml-[550px] w-[400px] h-[700px] content-between border-2 border-white rounded gap-2 p-8'>
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
                </div>

                <div className="z-20 mt-20">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Contact