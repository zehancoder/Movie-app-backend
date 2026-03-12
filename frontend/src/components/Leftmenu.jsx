import React from 'react'
import { IoIosArrowForward, IoMdContact } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { Link, NavLink } from 'react-router';
import { FaPlay } from "react-icons/fa";
import { IoFlag } from "react-icons/io5";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { LiaBloggerB } from "react-icons/lia";
import { MdPermContactCalendar } from "react-icons/md";

function Leftmenu() {
    return (
        <div className='w-full '>
            <div>
                <img className='w-[140px]' src="https://ticstube-html.temptics.com/assets/img/logo-white.svg" alt="" />
            </div>
            <div className='mt-12'>
                <NavLink to={'/'} className={({ isActive }) =>
                    `${isActive ? "linear-bg-noHover" : "nav-links"} px-4 mt-3 cursor-pointer border border-[#36415388] bg-black text-[17px] rounded-lg flex items-center justify-between py-[9px] w-full`
                }>
                    <div className='flex items-center gap-3'>
                        <GoHomeFill className='text-[18px] text-[#808080] link-icons' />
                        <span className='text-[17px] font-medium text-[#DEF7FF]'>Home</span>
                    </div>
                    <IoIosArrowForward className='text-[#DEF7FF] text-[17px]' />
                </NavLink>
                <NavLink to={'/about'} className={({ isActive }) =>
                    `${isActive ? "linear-bg-noHover" : "nav-links"} px-4 mt-3 cursor-pointer border border-[#36415388] bg-black text-[17px] rounded-lg flex items-center justify-between py-[9px] w-full`
                }>
                    <div className='flex items-center gap-3'>
                        <IoMdContact className='text-[18px] text-[#808080] link-icons' />
                        <span className='text-[17px] font-medium text-[#DEF7FF]'>About</span>
                    </div>
                    <IoIosArrowForward className='text-[#DEF7FF] text-[17px]' />
                </NavLink>
                <NavLink to={'/movies'} className={({ isActive }) =>
                    `${isActive ? "linear-bg-noHover" : "nav-links"} px-4 mt-3 cursor-pointer border border-[#36415388] bg-black text-[17px] rounded-lg flex items-center justify-between py-[9px] w-full`
                }>
                    <div className='flex items-center gap-3'>
                        <FaPlay className='text-[16px] text-[#808080] link-icons' />
                        <span className='text-[17px] font-medium text-[#DEF7FF]'>Movies</span>
                    </div>
                    <IoIosArrowForward className='text-[#DEF7FF] text-[17px]' />
                </NavLink>
                <div className='px-4 mt-3 cursor-pointer nav-links border border-[#36415388] bg-black text-[17px] rounded-lg flex items-center justify-between py-[9px]  w-full '>
                    <div className='flex items-center gap-3'>
                        <IoFlag className='text-[18px] text-[#808080] link-icons' />
                        <span className='text-[17px] font-medium text-[#DEF7FF]'>Pages</span>
                    </div>
                    <IoIosArrowForward className='text-[#DEF7FF] text-[17px]' />
                </div>
                <div className='px-4 mt-3 cursor-pointer nav-links border border-[#36415388] bg-black text-[17px] rounded-lg flex items-center justify-between py-[9px]  w-full '>
                    <div className='flex items-center gap-3'>
                        <BiSolidCategoryAlt className='text-[18px] text-[#808080] link-icons' />
                        <span className='text-[17px] font-medium text-[#DEF7FF]'>Categories</span>
                    </div>
                    <IoIosArrowForward className='text-[#DEF7FF] text-[17px]' />
                </div>
                <NavLink to={'/blog'} className={({ isActive }) =>
                    `${isActive ? "linear-bg-noHover" : "nav-links"} px-4 mt-3 cursor-pointer border border-[#36415388] bg-black text-[17px] rounded-lg flex items-center justify-between py-[9px] w-full`
                }>
                    <div className='flex items-center gap-3'>
                        <LiaBloggerB className='text-[18px] text-[#808080] link-icons' />
                        <span className='text-[17px] font-medium text-[#DEF7FF]'>Blog</span>
                    </div>
                    <IoIosArrowForward className='text-[#DEF7FF] text-[17px]' />
                </NavLink>
                <NavLink to={'/contact'} className={({ isActive }) =>
                    `${isActive ? "linear-bg-noHover" : "nav-links"} px-4 mt-3 cursor-pointer border border-[#36415388] bg-black text-[17px] rounded-lg flex items-center justify-between py-[9px] w-full`
                }>
                    <div className='flex items-center gap-3'>
                        <MdPermContactCalendar className='text-[18px] text-[#808080] link-icons' />
                        <span className='text-[17px] font-medium text-[#DEF7FF]'>Contact</span>
                    </div>
                    <IoIosArrowForward className='text-[#DEF7FF] text-[17px]' />
                </NavLink>
            </div>
        </div>
    )
}

export default Leftmenu