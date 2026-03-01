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
        <div className='sticky top-0 text-[#E5E5E5] flex justify-between items-center py-3 px-8 bg-[#0f0f0f] border-b border-[#333]'>

            <div className='text-3xl font-extrabold'>
                <a href="http://localhost:5173/" className='text-white hover:text-[#E50914] transition duration-300'>Tiny Link</a>
            </div>

            <div className='flex items-center gap-x-6'>

                <div className='flex gap-x-4 items-center'>
                    <div className='px-3 py-2 rounded hover:cursor-pointer text-[#E5E5E5] transition duration-300 text-lg font-semibold relative group'>
                        Home
                        <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-[#E50914] transition-all duration-300 group-hover:w-full'></span>
                    </div>
                    <div className='px-3 py-2 rounded hover:cursor-pointer text-[#E5E5E5] transition duration-300 text-lg font-semibold relative group'>
                        About
                        <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-[#E50914] transition-all duration-300 group-hover:w-full'></span>
                    </div>
                    <div className='px-3 py-2 rounded hover:cursor-pointer text-[#E5E5E5] transition duration-300 text-lg font-semibold relative group'>
                        Contact
                        <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-[#E50914] transition-all duration-300 group-hover:w-full'></span>
                    </div>
               
                <div className='px-3 py-2 rounded hover:cursor-pointer text-[#E5E5E5] transition duration-300 text-lg font-semibold relative group'>
                    Sign In
                    <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-[#E50914] transition-all duration-300 group-hover:w-full'></span>
                </div>
                <div className='px-3 py-2 rounded hover:cursor-pointer text-[#E5E5E5] transition duration-300 text-lg font-semibold relative group'>
                    Sing Up
                    <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-[#E50914] transition-all duration-300 group-hover:w-full'></span>
                </div>
            </div>
        </div>
        </div >
    )
}

export default Header
