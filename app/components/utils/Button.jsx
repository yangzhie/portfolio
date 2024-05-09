import React from 'react'

import { IoCloudDownloadSharp } from "react-icons/io5"

function Button() {
    return (
        <>
            <button className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-sm bg-slate-800 px-6 font-medium text-[#e5e3dc]"
                onClick={() => window.open("/MyResume.pdf")}
            >
                <div className="mr-0 w-0 -translate-x-[100%] opacity-0 transition-all duration-200 group-hover:mr-1 group-hover:w-6 group-hover:translate-x-0 group-hover:opacity-100">
                    <IoCloudDownloadSharp color='orange' size={"20px"} />
                </div>
                <span className='rubik'>Resume</span>
            </button>
        </>
    )
}

export default Button