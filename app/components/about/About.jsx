"use client"

import React from 'react'
import Image from 'next/image'

import { Reveal } from '../utils/Reveal'
import StarsCanvas from '../utils/Stars'

import pfp from '@/public/profile-picture.png'

function About() {
    return (
        <>
            <div className="section-wrapper" id='about'>
                <div className='bg-slate-800 h-[150px] flex justify-end items-center'>
                    <div className='rubik text-[50px] mr-[75px] mt-[5px] text-amber-600'>
                        <Reveal>
                            <div className='rubik'>
                                ABOUT
                            </div>
                        </Reveal>
                    </div>
                </div>

                <div className='relative flex items-center justify-center bg-slate-800 h-screen ml-[50px]'>
                    <div className='flex items-center content-center'>
                        <div className='flex flex-col w-[600px]'>
                            <div className='text-[25px] mb-[20px] font-medium'>
                                <div className='text-white'>
                                    I&apos;m a
                                </div>
                                <div
                                    className='leading-[0] mb-[20px]'
                                >
                                    <span className='title text-[30px] font-bold custom-gradient'>
                                        Software Developer
                                    </span>
                                </div>
                            </div>

                            <div className='text-white'>

                                <Reveal>Based in <span className='custom-gradient font-bold'>Melbourne</span>, I&apos;m a Bachelor of Science Mathematics and Chemistry</Reveal>
                                <Reveal>graduate from Monash University.</Reveal>
                                <br />
                                <br />
                                <Reveal>I place great importance on a <span className='custom-gradient font-bold'>well-rounded</span> career that offers both challenges</Reveal>
                                <Reveal>and rewards. Recognized by my colleagues as a <span className='custom-gradient font-bold'>problem-solver</span>, fast learner,</Reveal>
                                <Reveal>and approachable team player, I draw upon my foundational knowledge gained</Reveal>
                                <Reveal>from earning a BSc in Mathematics and Chemistry to create software solutions</Reveal>
                                <Reveal>that address <span className='custom-gradient font-bold'>genuine needs</span>. This interdisciplinary perspective enables me to</Reveal>
                                <Reveal>offer innovative and effective <span className='custom-gradient font-bold'>solutions</span> that bridge the gap between traditional</Reveal>
                                <Reveal>expertiseand contemporary software development.</Reveal>
                                <br />
                                <br />
                                <Reveal>When I&apos;m not immersed in code, you&apos;ll find me playing some <span className='custom-gradient font-bold'>competitive chess</span>,</Reveal>
                                <Reveal>rockclimbing (as best as I can!), exploring new hiking trails or playing some</Reveal>
                                <Reveal>video games with friends.</Reveal>
                                <br />
                                <br />
                                <Reveal>I&apos;m always eager to expand my <span className='custom-gradient font-bold'>network</span> within the industry, so please don&apos;t</Reveal>
                                <Reveal> hesitate to reach out and connect!</Reveal>
                            </div>
                        </div>

                        <div className='ml-[50px]'>
                            <Image
                                src={pfp}
                                className='h-[300px] w-[300px] relative z-[600]'
                                alt='Profile picture'
                            />

                            <span className='universal-color animate-pulse custom-rounded h-[300px] w-[300px] absolute transform translate-x-[5%] translate-y-[-95%] z-[599]'></span>
                        </div>

                        <div className='z-0'>
                            <StarsCanvas />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About