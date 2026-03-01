import React, { useState } from 'react'
import { FaQuestion } from "react-icons/fa6";

const Header = () => {

    const [isHelpAbbrOpen, setIsHelpAbbrOpen] = useState(false)

    const handleHelpAbbrClose = () => {
        setIsHelpAbbrOpen(false)
    }
    const handleHelpAbbrOpen = () => {
        setIsHelpAbbrOpen(true)
    }
    return (
        <div className='sticky top-0 text-[#E5E5E5] flex justify-between items-center py-3 px-8 bg-[#0f0f0f] border-b border-[#222]'>

            <div className='text-3xl font-extrabold'>
                <a href="http://localhost:5173/" className='text-white hover:text-[#E50914] transition duration-300'>TINYURL</a>
            </div>

            <div className='flex items-center gap-x-4'>

                <div className='flex gap-x-4 items-center'>
                    <div className='relative group px-3 py-2 cursor-pointer text-[#E5E5E5] transition duration-300'>
                        Home
                        <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-[#E50914] transition-all duration-300 group-hover:w-full'></span>
                    </div>
                    <div className='relative group px-3 py-2 cursor-pointer text-[#E5E5E5] transition duration-300'>
                        About
                        <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-[#E50914] transition-all duration-300 group-hover:w-full'></span>
                    </div>
                    <div className='relative group px-3 py-2 cursor-pointer text-[#E5E5E5] transition duration-300'>
                        Contact
                        <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-[#E50914] transition-all duration-300 group-hover:w-full'></span>
                    </div>
                    <div className='relative group px-3 py-2 cursor-pointer text-[#E5E5E5] transition duration-300'>
                        Login
                        <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-[#E50914] transition-all duration-300 group-hover:w-full'></span>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Header
