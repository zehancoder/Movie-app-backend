
import React, { useEffect, useRef, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Link } from 'react-router';
import 'react-loading-skeleton/dist/skeleton.css'
import { IoPlay } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa';
import { AiFillLike, AiFillSound } from "react-icons/ai";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";

function Section1() {
  const [movies, setMovies] = useState([]);
  const [carouselMovie, setCarouselMovie] = useState([]);
  const [loading, setLoading] = useState(false)
  // fetching data for showing i-n home page carousel 
  useEffect(() => {
    if (movies.length === 0) {
      fetch('https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_genres=27&page=1').then((res) => res.json()).then(data => setMovies(data.results)).finally(() => {
        setLoading(true)
      })
    }


  }, []);


  // carousel functionality
  const [carouselNum, setCarouselNum] = useState(0);
  const [carouselTranslate, setCarouselTranslet] = useState(0);
  const timerRef = useRef(null);

  const startAutoPlay = () => {
    // আগের interval থাকলে বন্ধ করো (নিরাপদভাবে)
    clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setCarouselNum((prevNum) => {
        if (prevNum >= 7) {
          setCarouselTranslet(0);
          return 0;
        } else {
          setCarouselTranslet((prevTrans) => prevTrans + 100);
          return prevNum + 1;
        }
      });
    }, 10000);
  };

  const stopAutoPlay = () => {
    clearInterval(timerRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const carouselUp = () => {
    stopAutoPlay();

    setCarouselNum((prevNum) => {
      if (prevNum >= 7) {
        setCarouselTranslet(0);
        return 0;
      } else {
        setCarouselTranslet((prevTrans) => prevTrans + 100);
        return prevNum + 1;
      }
    });

    startAutoPlay();
  };

  const carouselDown = () => {
    stopAutoPlay();

    setCarouselNum((prevNum) => {
      if (prevNum < 1) {
        setCarouselTranslet(600);
        return 7;
      } else {
        setCarouselTranslet((prevTrans) => prevTrans - 100);
        return prevNum - 1;
      }
    });

    startAutoPlay();
  };
  // finish carousel functionality


  return (
    <div className='px-5 py-3 mt-5 h-full'>
      <div className='h-full relative overflow-x-hidden'>

        {/* carousel arrows */}
        <div className="text-gray-400 absolute -bottom-0 md:bottom-0 flex items-center justify-between px-12 py-5 z-20 w-full md:h-[70px] h-14 lg:h-32 text-xl font-bold">
          <div
            onClick={carouselDown}
            className="px-3 lg:px-4 border border-[#1F1F1F] py-2 lg:py-4 hover:text-white bg-[#0F0F0F] rounded-lg cursor-pointer linear-bg"
          >
            <LuMoveLeft className="" />
          </div>

          <div className="flex items-center gap-1">
            {
              movies.map((_, idx) => {
                if (idx < 8) {
                  return <div
                    className={`   ${carouselNum == idx
                      ? "bg-[#3d4afe] h-1 md:h-1.5 w-4 md:w-5"
                      : "bg-[#333333] h-0.5 md:h-1 w-3 md:w-4"
                      }`}
                  ></div>
                }
              })
            }
          </div>

          <div
            onClick={carouselUp}
            className="px-3 lg:px-4 border border-[#1F1F1F] py-2 lg:py-4 hover:text-white bg-[#0F0F0F] rounded-lg cursor-pointer linear-bg"
          >
            <LuMoveRight className="" />
          </div>
        </div>
        {/* carousel arrow finish */}


        <div className='h-full  w-auto rounded-xl flex transition duration-[.6s] ease-in' style={{
          transform: `translateX(-${carouselTranslate}%)`,
        }}>
          {
            loading ? movies.map(
              ({ backdrop_path, overview, original_title, id }, idx) => {
                if (idx < 8) {
                  return <div
                    key={idx}
                    className={`w-full  shrink-0 -z-10 transform   h-full relative rounded-lg  overflow-hidden bg-contain `}
                    id="bgUrl1"
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
                      className="absolute brightness-75 top-0 left-0 h-full w-full object-cover "
                      alt=""
                    />
                    <div className="overlay"></div>
                    <div className="absolute left-[50%] transform -translate-x-[50%]  w-[90%] md:max-w-6xl  md:bottom-40 bottom-36 lg:bottom-60  ">
                      <div>
                        <h1 className={"md:text-3xl text-[20px] lg:text-[38px] font-bold text-white"}>{original_title}</h1>
                        <p className={"mt-4 md:text-[17px] text-[15px] lg:text-[19px] font-medium text-[#b6b6b6]"}>
                          {overview}
                        </p>
                        <div className="flex items-center  mt-4">
                          <button className={"bg-[#ff0000] linear-bg-noHover px-4 py-2.5 rounded-lg text-white cursor-pointer"}>
                            <Link
                              to={`video/${id}`}
                              className="flex items-center gap-2"
                            >
                              <IoPlay /> Play Now
                            </Link>
                          </button>
                          <div className="flex items-center gap-2 text-[18px] ml-2 text-gray-400">
                            <span
                              className="px-3 lg:px-4 border border-[#1F1F1F] py-2 lg:py-4 hover:text-white bg-[#0F0F0F] rounded-lg cursor-pointer linear-bg"
                            >
                              <FaPlus />
                            </span>{" "}
                            <span
                              className="px-3 lg:px-4 border border-[#1F1F1F] py-2 lg:py-4 hover:text-white bg-[#0F0F0F] rounded-lg cursor-pointer linear-bg"
                            >
                              <AiFillLike />
                            </span>
                            <span className="px-3 lg:px-4 border border-[#1F1F1F] py-2 lg:py-4 hover:text-white bg-[#0F0F0F] rounded-lg cursor-pointer linear-bg">
                              <AiFillSound />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              }
            ) : <SkeletonTheme baseColor="#202020">
              <div className="w-full h-full">
                <Skeleton width={'100%'} height={'100%'} />
              </div>
            </SkeletonTheme>}


        </div>
      </div>
      <div className='h-screen'>

      </div>
    </div>
  )
}

export default Section1