import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { IoMdVideocam } from "react-icons/io";
import { IoDiamond } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { RiUserSharedLine } from "react-icons/ri";
import { Link, } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { MdMenu } from "react-icons/md";
import { FaPlus } from 'react-icons/fa';
import { leftMenuHandleState, searchDataState } from '../toolkit/slice';
import { searchData } from '../pages/search/search';

function Navber() {
    const currentUser = useSelector(state => state.loginUser);
    const [userExist, setUserExist] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        if (currentUser.message === "Success") {
            setUserExist(true);
            return;
        }
    }, [currentUser]);

    // toggle left menu for responsive desing
    const leftMenuToggleFunc = () => {
        dispatch(leftMenuHandleState())
    }
    /// searching queries handle
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const searchMovies = useSelector(state => state.searchMovies)
    const fetching = async (query, page) => {
        const response = await searchData(query, page);
        if(!response.success){
            return;
        }
        dispatch(searchDataState(response.data.results));
        setSearch('')
    }
    const searchDataFunc = (e) => {
        fetching(search, page);
    }
    console.log(searchMovies);

    return (
        <div id='navber' className={`bg-black px-2 md:px-4 py-5 md:py-7 fixed z-30 w-full left-0 `}>
            <div className='text-[#EBEBEB] lg:float-end lg:w-[70%] xl:w-[70%] flex items-center justify-between gap-5'>

                <div className='lg:hidden block'>
                    <img className='w-[150px]' src="/Logo.png" alt="" />
                </div>

                <div className='md:flex hidden w-[95%] md:w-[45%] lg:w-[60%] justify-between text-[14px] sm:text-[15px] md:text-[17px] font-medium bg-[#303030] items-center gap-2 px-2 md:px-4 py-0.5 md:py-1.5 rounded-full'>
                    <input value={search} onInput={(e) => setSearch(e.target.value)} className='px-2 py-1 outline-none w-[85%]' type="text" placeholder='Search Your Videos' />
                    <Link to={'/search'} onClick={searchDataFunc}><IoSearch className=' cursor-pointer font-semibold text-2xl px-0.5 py-0.5' /></Link>
                </div>
                <div className='flex items-center gap-3 justify-between'>
                    {/* <div className='linear-bg navber-hover-effect'><IoIosNotifications className=' cursor-pointer font-semibold text-2xl px-0.5 py-0.5' /></div> */}
                    {userExist && <div className='linear-bg lg:flex  items-center gap-2 px-3 text-[14px] font-medium md:text-[15px] rounded-full border border-[#b5b5b54b] hover:border-none cursor-pointer py-1.5  hidden'><IoIosNotifications className=' cursor-pointer font-semibold text-2xl px-0.5 py-0.5' /></div>}
                    {currentUser.data.role === 'admin' ? <Link to={'/create/new/movie'} className='lg:flex items-center gap-2 px-3 text-[14px] font-medium md:text-[15px] rounded-full border border-[#b5b5b54b] hover:border-none cursor-pointer py-[8px] linear-bg  hidden w-[140px]'>New Movie<FaPlus className=' cursor-pointer font-semibold text-lg px-0.5 py-0.5' /></Link> : <div className='lg:flex items-center gap-2 px-3 text-[14px] font-medium md:text-[15px] rounded-full border border-[#b5b5b54b] hover:border-none cursor-pointer py-1.5 linear-bg  hidden'>Subscribe <IoDiamond className=' cursor-pointer font-semibold text-2xl px-0.5 py-0.5' /></div>}
                    {
                        userExist ? <Link to={currentUser.data.role === 'admin' ? '/admin/profile' : '/profile'} className='flex items-center gap-2 px-3 text-[14px] sm:text-[14px] font-medium md:text-[15px] rounded-full border border-[#b5b5b54b] hover:border-none cursor-pointer py-1.5 linear-bg linear-bg-noHover'>{currentUser.data?.role === 'admin' ? "Admin" : "Profile"}<IoMdContact className=' cursor-pointer font-semibold text-xl md:text-2xl px-0.5 py-0.5' /></Link> : <Link to={'/login'} className='navber-hover-effect linear-bg linear-bg-noHover'>Login <IoMdContact className=' cursor-pointer font-semibold text-2xl px-0.5 py-0.5' /></Link>
                    }
                    <div onClick={() => leftMenuToggleFunc()} className='text-3xl text-gray-300 cursor-pointer font-medium lg:hidden block pr-2'>
                        <MdMenu />
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Navber