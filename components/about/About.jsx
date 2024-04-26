"use client"

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import SplitText from "gsap-trial/SplitText"
import { Reveal } from '../utils/Reveal'
gsap.registerPlugin(SplitText)

import Slideshow from '../slideshow/Slideshow'

function About() {
    const titlesRef = useRef(null);

    useEffect(() => {
        const titles = titlesRef.current.querySelectorAll('.title');
        const timeline = gsap.timeline({ repeat: -1 });

        titles.forEach(title => {
            const splitTitle = new SplitText(title);

            timeline
                .from(splitTitle.chars, {
                    opacity: 0,
                    y: 30,
                    rotateX: -90,
                    stagger: 0.02
                }, "<")
                .to(splitTitle.chars, {
                    opacity: 0,
                    y: -30,
                    rotateX: 90,
                    stagger: 0.02
                }, "<1");
        });
    }, [titlesRef.current]);

    return (
        <>
            <div className='relative flex items-center justify-center bg-slate-800 h-screen ml-[50px]'>
                <div className='flex items-center content-center'>
                    <div className='flex flex-col w-[600px]'>
                        <div className='text-[25px] mb-[20px] font-medium'>
                            <div className='text-white'>
                                I'm a
                            </div>
                            <div
                                ref={titlesRef}
                                className='leading-[0] mb-[20px]'
                            >
                                {/* bg-gradient-to-r from-[#FBAB7E] to-[#F7CE68] text-transparent bg-clip-text */}
                                <span className='title text-[30px] font-extrabold text-orange-300'>
                                    Frontend Developer
                                </span>
                                <span className='title text-[30px] font-extrabold text-orange-400'>
                                    Backend Developer
                                </span>
                                <span className='title text-[30px] font-extrabold text-orange-500'>
                                    Software Engineer
                                </span>
                            </div>
                        </div>

                        <div className='text-white'>

                            <Reveal>Based in <span className='custom-gradient'>Melbourne</span>, I'm a Bachelor of Science Mathematics and Chemistry</Reveal>
                            <Reveal>graduate from Monash University.</Reveal>
                            <br />
                            <br />
                            <Reveal>I place great importance on a <span className='custom-gradient'>well-rounded</span> career that offers both challenges</Reveal>
                            <Reveal>and rewards. Recognized by my colleagues as a <span className='custom-gradient'>problem-solver</span>, fast learner,</Reveal>
                            <Reveal>and approachable team player, I draw upon my foundational knowledge gained</Reveal>
                            <Reveal>from earning a BSc in Mathematics and Chemistry to create software solutions</Reveal>
                            <Reveal>that address <span className='custom-gradient'>genuine needs</span>. This interdisciplinary perspective enables me to</Reveal>
                            <Reveal>offer innovative and effective <span className='custom-gradient'>solutions</span> that bridge the gap between traditional</Reveal>
                            <Reveal>expertiseand contemporary software development.</Reveal>
                            <br />
                            <br />
                            <Reveal>When I'm not immersed in code, you'll find me playing some <span className='custom-gradient'>competitive chess</span>,</Reveal>
                            <Reveal>rockclimbing (as best as I can!), exploring new hiking trails or playing some</Reveal>
                            <Reveal>video games with friends.</Reveal>
                            <br />
                            <br />
                            <Reveal>I'm always eager to expand my <span className='custom-gradient' >network</span> within the industry, so please don't</Reveal>
                            <Reveal> hesitate to reach out and connect!</Reveal>
                        </div>
                    </div>

                    <div className='ml-[50px]'>
                        <img src="/pfp-2.png" className='h-[300px] w-[300px] relative z-[600]' />

                        <span className='universal-color animate-pulse custom-rounded h-[300px] w-[300px] absolute transform translate-x-[5%] translate-y-[-95%] z-[599]'></span>
                    </div>
                </div>
            </div >
        </>
    )
}

export default About