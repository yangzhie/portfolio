import React from 'react'
import ProjectCard from './ProjectCard'

import { projects } from '../utils/index'

function Projects() {
    return (
        <div className='flex flex-wrap justify-center bg-slate-800 ml-[50px]'>
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
    )
}

export default Projects