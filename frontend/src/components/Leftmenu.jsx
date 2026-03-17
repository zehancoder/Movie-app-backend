import React, { useState } from 'react'
import { IoIosArrowForward, IoMdContact } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { Link, NavLink, useLocation } from 'react-router';
import { FaPlay, FaUser } from "react-icons/fa";
import { IoFlag } from "react-icons/io5";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { LiaBloggerB } from "react-icons/lia";
import { MdPermContactCalendar } from "react-icons/md";
import { useSelector } from 'react-redux';
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { BiSolidMoviePlay } from "react-icons/bi";
import { SiGoogleanalytics } from "react-icons/si";
import { AiFillLike } from 'react-icons/ai';

function Leftmenu() {
    const user = useSelector(state => state.loginUser.data);
    const [openAdmin, setOpenAdmin] = useState(false);

    const currentLocation = useLocation();
    const location = currentLocation.pathname.split('/')[currentLocation.pathname.split('/').length - 1];
    const adminNavLinks = [
        {
            pathname: '/admin/dashboard',
            text: 'Dashboard',
            icon: <SiGoogleanalytics className='cursor-pointer font-semibold link-icons text-2xl px-0.5 py-0.5' />
        },
        {
            pathname: '/admin/profile',
            text: 'Profile',
            icon: <IoMdContact className='cursor-pointer font-semibold link-icons text-2xl px-0.5 py-0.5' />
        },
        {
            pathname: '/admin/users',
            text: 'Users',
            icon: <FaUsers className='cursor-pointer font-semibold link-icons text-2xl px-0.5 py-0.5' />
        },
        {
            pathname: '/admin/movies',
            text: 'Movies',
            icon: <BiSolidMoviePlay className='cursor-pointer font-semibold link-icons text-2xl px-0.5 py-0.5' />
        }
    ];
    return (
        <div className='w-full'>
            <div className='w-[180px] md:block hidden'>
                <img className='w-full h-full' src="/Logo.png" alt="" />
            </div>
            <div className='mt-12'>
                <div>
                    <div onClick={() => setOpenAdmin(!openAdmin)} className={`${user.role === 'admin' ? "block" : "hidden"} nav-links px-4 mt-3 cursor-pointer border border-[#36415388] bg-black text-[17px] rounded-lg  py-[9px] w-full`
                    }>
                        <div className='flex items-center justify-between w-full'>
                            <div className='flex items-center gap-3 '>
                                <MdAdminPanelSettings className=' cursor-pointer font-semibold text-[#808080] link-icons  text-2xl px-0.5 py-0.5' />
                                <span className='text-[17px] font-medium text-[#DEF7FF]'>Admin</span>
                            </div>
                            <IoIosArrowForward className={`text-[#DEF7FF] transition duration-300 text-[17px] ${openAdmin ? ' rotate-90' : 'rotate-0'}`} />

                        </div>

                    </div>
                    <div className={`transition-all duration-300 ${openAdmin ? "h-[200px]" : "h-0"} overflow-hidden w-full rounded-md bg-black`}>
                        <div className='px-3 py-5'>
                            {
                                adminNavLinks.map((link) => {
                                    return <Link to={link.pathname} className={`${location === link.text.toLocaleLowerCase() && 'linear-bg-noHover'} flex items-center linear-bg px-2 py-1.5 hover:text-white text-[#808080] rounded-md cursor-pointer justify-between w-full`}>
                                        <div className='flex items-center gap-3 '>
                                            {link.icon}
                                            <span className='text-[17px] font-medium text-[#DEF7FF]'>{link.text}</span>
                                        </div>
                                    </Link>
                                })
                            }
                        </div>

                    </div>

                </div>
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
                <NavLink to={'/movie'} className={({ isActive }) =>
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
                <NavLink to={'/profile/like'} className={({ isActive }) =>
                    `${isActive ? "linear-bg-noHover" : "nav-links"} px-4 mt-3 cursor-pointer border border-[#36415388] bg-black text-[17px] rounded-lg flex items-center justify-between py-[9px] w-full`
                }>
                    <div className='flex items-center gap-3'>
                        <AiFillLike className='text-[18px] text-[#808080] link-icons' />
                        <span className='text-[17px] font-medium text-[#DEF7FF]'>You Liked</span>
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