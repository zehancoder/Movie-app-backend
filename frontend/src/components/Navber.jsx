import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { IoMdVideocam } from "react-icons/io";
import { IoDiamond } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";

function Navber() {
    
    
    return (
        <div id='navber' className={`bg-black px-2 md:px-4  py-7 fixed z-40 w-[80%] `}>
            <div className='text-[#EBEBEB] flex items-center justify-between gap-5'>
                <div className='flex w-[95%] md:w-[85%] lg:w-[70%] justify-between text-[15px] md:text-[17px] font-medium bg-[#303030] items-center gap-2 px-2 md:px-4 py-0.5 md:py-1.5 rounded-full'><input className='px-2 py-1 outline-none w-[85%]' type="text" placeholder='Search Your Videos' /><IoSearch className=' cursor-pointer font-semibold text-2xl px-0.5 py-0.5' /></div>
                <div className='flex items-center gap-3 justify-between'>
                    <div className='linear-bg navber-hover-effect'><IoIosNotifications className=' cursor-pointer font-semibold text-2xl px-0.5 py-0.5' /></div>
                    <div className='navber-hover-effect linear-bg'>Upload <IoMdVideocam className=' cursor-pointer font-semibold text-2xl px-0.5 py-0.5' /></div>
                    <div className='navber-hover-effect linear-bg'>Subscribe <IoDiamond className=' cursor-pointer font-semibold text-2xl px-0.5 py-0.5' /></div>
                    <div className='navber-hover-effect linear-bg linear-bg-noHover'>Profile <IoMdContact className=' cursor-pointer font-semibold text-2xl px-0.5 py-0.5' /></div>

                </div>
            </div>
        </div>
    )
}

export default Navber