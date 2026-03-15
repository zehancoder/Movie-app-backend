import React, { useEffect, useState } from 'react'
import MovieCard from '../../components/MovieCard'
import { FaPlay } from "react-icons/fa";
import { fetches } from '../fetch';
import Skeleton from 'react-loading-skeleton';
import CardSkeleton from '../../components/CardSkeleton';
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from 'react-icons/md';
function Section5() {
    const [pageNumber, setPageNumber] = useState(2);
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([])
    // fetching top rated movies
    const fetchData = async (category, page) => {
        const response = await fetches(category, page);
        setMovies(response.results);
        setLoading(false)
    }
    useEffect(() => {
        setLoading(true)
        fetchData('upcoming', pageNumber)
    }, []);

    // handling carousel functionality
    const [translate, setTranslate] = useState(0);
    const [totalTranslate, setTotalTranslate] = useState(400);
        window.addEventListener('resize', (e) => {
            if(window.innerWidth < 1536 && window.innerWidth > 1280){
                setTotalTranslate(500);
            }
            else if(window.innerWidth > 1536){
                setTotalTranslate(400)
            }
            else if(window.innerWidth < 1280 && window.innerWidth > 1024){
                setTotalTranslate(600)
            }
            else if(window.innerWidth < 1024 && window.innerWidth > 768){
                setTotalTranslate(700)
            }
            else if(window.innerWidth < 768 && window.innerWidth > 640){
                setTotalTranslate(800)
            }
            else if(window.innerWidth < 640){
                setTotalTranslate(900)
            }            
        })
    const translateToLeft = () => {
        if (translate > 0) {
            setTranslate(translate - 100);
        } else {
            setTranslate(totalTranslate)
        }
    }
    const translateToRight = () => {
        if (translate < totalTranslate) {
            setTranslate(translate + 100)
        } else {
            setTranslate(0)
        }
    }
    return (
        <div className='md:pb-12 pb-6 lg:pb-16 overflow-x-hidden'>
            <div>
                <div className='flex items-center justify-between w-full'>
                    <h1 className='text-3xl font-bold text-white flex items-center gap-2'><FaPlay className='text-[18px] text-[#3d4afe]' />Upcoming</h1>
                    <div className='flex items-center text-white text-2xl gap-2'>
                        <div onClick={() => translateToLeft()} className="px-1.5 lg:px-2 border border-[#1F1F1F] py-1.5 lg:py-2 hover:text-white bg-[#0F0F0F] rounded-lg cursor-pointer linear-bg"
                        >
                            <MdOutlineNavigateBefore />
                        </div>
                        <div onClick={translateToRight} className="px-1.5 lg:px-2 border border-[#1F1F1F] py-1.5 lg:py-2 hover:text-white bg-[#0F0F0F] rounded-lg cursor-pointer linear-bg"
                        >
                            <MdOutlineNavigateNext />
                        </div>
                    </div>
                </div>
                <div className='flex items-center flex-nowrap gap-2 mt-5' >
                    {
                        !loading ? movies.map((movie, idx) => {
                            return idx < 10 && <div style={{ transform: `translateX(-${translate}%)` }} className='  transition ease duration-500 lg:w-[24.5%] w-[48%] sm:w-[33.33%] md:w-[25%] xl:w-[19.23%] 2xl:w-[16.2%] shrink-0 px-2 py-1'>
                                <MovieCard genre={movie.genre_ids} title={movie.title} posterPath={movie.poster_path} rating={movie.vote_average.toFixed(1)} />
                            </div>
                        }) : Array(6).fill(null).map(() => {
                            return <div className='h-full w-full mt-8'>
                                <CardSkeleton />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Section5;