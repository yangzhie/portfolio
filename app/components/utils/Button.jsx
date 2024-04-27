import './Button.css'

import React from 'react'
import { IoCloudDownloadSharp } from "react-icons/io5"

function Button() {
    return (
        <>
            <button className="main-button relative overflow-hidden text-[#18181a] inline-block text-[15px] leading-[15px] pt-[7px] pb-[6px] px-[7px] text-decoration-none cursor-pointer bg-[#1d263b] select-none rounded-[5%] touch-manipulation after:content-none after:absolute after:bottom-[-50%] after:left-0 after:w-full after:h-full after:bg-[orange] after:z-50"
                onClick={() => window.open("/")}
            >
                <span className="text shrikhand text-white relative z-10">
                    Resume
                </span>

                <span className='text-white block absolute bottom-0 z-100 opacity-0 top-[50%] left-[50%] h-[14px] leading-[13px]'>
                    <IoCloudDownloadSharp color='#1d263b' size={"20px"} />
                </span>
            </button>
        </>
    )
}

export default Button