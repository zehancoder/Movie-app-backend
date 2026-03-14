import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from 'react-router';
import { LiaBookmarkSolid } from "react-icons/lia";
import { IoBookmarkSharp } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";

function MovieCard({ desc, title, posterPath, rating, vote, mediaType, genre, save, like }) {
    const allGenris = {
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Adventure" },
            { "id": 16, "name": "Animation" },
            { "id": 35, "name": "Comedy" },
            { "id": 80, "name": "Crime" },
            { "id": 18, "name": "Drama" },
            { "id": 10751, "name": "Family" },
            { "id": 14, "name": "Fantasy" },
            { "id": 36, "name": "History" },
            { "id": 27, "name": "Horror" },
            { "id": 10402, "name": "Music" },
            { "id": 9648, "name": "Mystery" },
            { "id": 10749, "name": "Romance" },
            { "id": 878, "name": "Science Fiction" },
            { "id": 53, "name": "Thriller" },
            { "id": 10752, "name": "War" },
            { "id": 37, "name": "Western" }
        ]
    }
    const [mainGenre, setMainGenre] = useState([])
    useEffect(() => {
        const finds = allGenris.genres.filter((data) => {
            if (genre.includes(data.id)) {
                return data.name
            }
        });
        setMainGenre(finds);

    }, [])

    return (
        <div className="">
            <div className=" relative movieDetail">

                <div className="z-40 px-4 py-3 absolute top-0 left-0   ">
                    <p className="text-[13px] font-medium px-1.5 py-1 text-gray-300 bg-[#202020ce] border border-[#111986b9] rounded-full">{rating}</p>

                </div>
                <div className=" overflow-hidden transition  duration-300 relative">
                    <img className="w-full  h-full object-cover rounded-lg" src={'https://image.tmdb.org/t/p/w500' + posterPath} alt="" />
                    <div className="h-full w-full detailDiv z-30  absolute top-0 left-0 transition duration-300">
                        <div to={''} className=" transition duration-300  z-20 absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] rounded-full">
                            <div className="flex cursor-pointer items-center gap-2 px-2 py-2  transition-all duration-300 border  rounded-full bg-[#fff]">
                                <FaPlay className="text-[#3d4afe] text-[13px] " />
                                <p className="font-medium text-[14px] text-gray-900">Play Now</p>
                            </div>
                            <div className="flex items-center gap-2 text-white text-xl mt-3 justify-evenly">
                                <div className={`${like ? 'bg-[#3d4afe]' : 'bg-transparent'} cursor-pointer px-1.5 border border-gray-700 rounded-md py-1`}>
                                    <AiOutlineLike />
                                </div>
                                <div className={`${save ? 'bg-[#3d4afe]' : 'bg-transparent'} cursor-pointer px-1.5 border border-gray-700 rounded-md py-1`}>
                                    {save ? <IoBookmarkSharp /> : <LiaBookmarkSolid />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <p className="text-white font-medium text-[17px] leading-5">{title}</p>
                <div className="flex items-center flex-wrap text-[15px] mt-1 gap-2 font-normal text-[#525cdbcc]">
                    {
                        mainGenre.map((gen, id) => {
                            return <div className="flex " key={id}><p className="">{gen.name} |</p></div>
                        })
                    }
                </div>
            </div>

        </div>
    );
}

export default MovieCard;
