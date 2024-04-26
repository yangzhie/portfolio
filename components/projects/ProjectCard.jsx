import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiOutlineExport } from "react-icons/ai"
import { technologies } from '../utils/index'

function ProjectCard({
    projectLink,
    liveSiteLink,
    projectImageLink,
    title,
    description,
    techIcons
}) {
    return (
        <>
            <div className='flex flex-col main-container w-[400px] h-[600px] p-2 bg-slate-900 border-2 border-white rounded bg-gradient-to-t from-amber-600/15 to-transparent'>
                <div className=''>
                    <div className='flex absolute z-100 p-2'>
                        <div>
                            <Link href={projectLink}>
                                <AiFillGithub color='orange' size={"30px"} />
                            </Link>
                        </div>

                        <div className='ml-[10px]'>
                            <Link href={liveSiteLink}>
                                <AiOutlineExport color='orange' size={"30px"} />
                            </Link>
                        </div>
                    </div>

                    <div className=''>
                        <img className='rounded-sm w-[380px] h-[185px]' src={projectImageLink} />
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex p-2 items-center'>
                        <h4 className='flex w-full justify-between text-amber-600 text-3xl font-bold'>
                            {title}
                        </h4>
                        <div className='w-full h-px bg-white m-[15px]' />
                    </div>

                    <div className='p-2 text-white h-[245px]'>{description}</div>
                </div>

                <div className='flex justify-center'>
                    <div className='flex flex-wrap w-[300px] justify-center items-center'>
                        {techIcons.map((techName, idx) => {
                            const technology = technologies.find(
                                tech => tech.name === techName
                            )
                            return (
                                <div className='w-[35px] m-[7px]' key={idx}>
                                    <img src={technology.icon} alt={techName} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard