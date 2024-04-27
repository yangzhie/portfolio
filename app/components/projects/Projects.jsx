"use client"

import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../utils/index'
import { Reveal } from '../utils/Reveal'
import StarsCanvas from '../contact/Stars'

function Projects() {
    return (
        <>
            <div className='bg-slate-800 h-[150px] flex justify-end items-center'>
                <div className='shrikhand text-[50px] mr-[75px] text-amber-600'>
                    <Reveal>
                        <div className='shrikhand'>
                            PROJECTS
                        </div>
                    </Reveal>
                </div>
            </div>

            <div className='flex flex-wrap justify-center bg-slate-800 ml-[50px]'>
                <StarsCanvas />
                {projects.map((project, idx) => (
                    <div className='flex p-5'>
                        <ProjectCard
                            key={idx}
                            projectLink={project.projectLink}
                            liveSiteLink={project.liveSiteLink}
                            projectImageLink={project.projectImageLink}
                            title={project.title}
                            description={project.description}
                            techIcons={project.techIcons}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Projects