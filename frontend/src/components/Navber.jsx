import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { IoMdVideocam } from "react-icons/io";
import { IoDiamond } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { RiUserSharedLine } from "react-icons/ri";
import { Link } from 'react-router';
import { useSelector } from 'react-redux';
import { MdMenu } from "react-icons/md";

function Navber() {
    const currentUser = useSelector(state => state.loginUser);
    const [userExist, setUserExist] = useState(false)

    useEffect(() => {
        if (currentUser.message === "Success") {
            setUserExist(true);
            return;
        }
    }, [currentUser]);

    return (
        <div id='navber' className={`bg-black px-2 md:px-4 py-5 md:py-7 fixed z-40 w-full lg:w-[80%] `}>
            <div className='text-[#EBEBEB] flex items-center justify-between gap-5'>

                <div className='lg:hidden block'>
                    <img className='w-[150px]' src="/Logo.png" alt="" />
                </div>

                <div className='md:flex hidden w-[95%] md:w-[45%] lg:w-[60%] justify-between text-[14px] sm:text-[15px] md:text-[17px] font-medium bg-[#303030] items-center gap-2 px-2 md:px-4 py-0.5 md:py-1.5 rounded-full'><input className='px-2 py-1 outline-none w-[85%]' type="text" placeholder='Search Your Videos' /><IoSearch className=' cursor-pointer font-semibold text-2xl px-0.5 py-0.5' /></div>
                <div className='flex items-center gap-3 justify-between'>
                    {/* <div className='linear-bg navber-hover-effect'><IoIosNotifications className=' cursor-pointer font-semibold text-2xl px-0.5 py-0.5' /></div> */}
                    {userExist && <div className='linear-bg lg:flex  items-center gap-2 px-3 text-[14px] font-medium md:text-[15px] rounded-full border border-[#b5b5b54b] hover:border-none cursor-pointer py-1.5  hidden'><IoIosNotifications className=' cursor-pointer font-semibold text-2xl px-0.5 py-0.5' /></div>}
                    <div className='lg:flex items-center gap-2 px-3 text-[14px] font-medium md:text-[15px] rounded-full border border-[#b5b5b54b] hover:border-none cursor-pointer py-1.5 linear-bg  hidden'>Subscribe <IoDiamond className=' cursor-pointer font-semibold text-2xl px-0.5 py-0.5' /></div>
                    {
                        userExist ? <Link to={currentUser.data.role === 'admin' ? '/admin/profile' : '/profile'} className='flex items-center gap-2 px-3 text-[14px] sm:text-[14px] font-medium md:text-[15px] rounded-full border border-[#b5b5b54b] hover:border-none cursor-pointer py-1.5 linear-bg linear-bg-noHover'>{currentUser.data?.role === 'admin' ? "Admin" : "Profile"}<IoMdContact className=' cursor-pointer font-semibold text-xl md:text-2xl px-0.5 py-0.5' /></Link> : <Link to={'/login'} className='navber-hover-effect linear-bg linear-bg-noHover'>Login <IoMdContact className=' cursor-pointer font-semibold text-2xl px-0.5 py-0.5' /></Link>
                    }
                    <div className='text-3xl text-gray-300 cursor-pointer font-medium lg:hidden block pr-2'>
                        <MdMenu/>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Navber