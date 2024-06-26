"use client"

import React from 'react'
import Link from "next/link"
import { motion } from "framer-motion"
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Button from '../utils/Button'

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { FaDiscord } from "react-icons/fa"

function Navbar() {

    const textToCopy = "underrrrr."

    const handleCopy = () => {
        console.log('Text copied to clipboard:', textToCopy)
    }

    return (
        <>
            <nav className="flex justify-between items-center py-2 px-3 bg-slate-800 bg-opacity-60 backdrop-blur-sm fixed top-0 left-0 right-0 z-[999] pl-[60px]">
                <div className='flex items-center justify-center space-x-4'>
                    <motion.span
                        className='text-zinc-50 block transition ease-in-out delay-100 hover:text-sky-600'
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.0 }}
                    >
                        <Link href="https://www.linkedin.com/in/arnav-malasi-2ba054232/" target="_blank" rel="nofollow">
                            <AiFillLinkedin size="1.9rem" />
                        </Link>
                    </motion.span>


                    <motion.span
                        className='text-zinc-50 block transition ease-in-out delay-100 hover:text-indigo-600 mt-[5px]'
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
                            <button>
                                <FaDiscord size="1.9rem" />
                            </button>
                        </CopyToClipboard>
                    </motion.span>


                    <motion.span
                        className='text-zinc-50 block transition ease-in-out delay-100 hover:text-black'
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Link href="https://github.com/yangzhie" target="_blank" rel="nofollow">
                            <AiFillGithub size="1.9rem" />
                        </Link>
                    </motion.span>
                </div>

                <motion.span
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Button />
                </motion.span>
            </nav>
        </>
    )
}

export default Navbar