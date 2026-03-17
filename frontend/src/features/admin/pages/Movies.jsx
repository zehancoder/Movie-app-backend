import React, { useEffect, useState } from "react";
import { deleteMovie, movieApi } from "../moviesApis/movie.api";
import { useDispatch, useSelector } from "react-redux";
import {
  adminMoviesState,
  adminMoviesStateMessage,
  errorMsgState,
} from "../../../toolkit/slice";
import MovieCard from "../../../components/MovieCard";
import { data, Link } from "react-router";
import { FaPlay } from "react-icons/fa";
import { TbDots } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

function Movies() {
  const dispatch = useDispatch();
  const adminMovies = useSelector((state) => state.adminMovies);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const errMsg = useSelector((state) => state.errMessage);

  // geeting admin created movies
  const getMoviesFunc = async () => {
    const response = await movieApi();
    if (!response.success) {
      dispatch(adminMoviesStateMessage("Cannot get moves"));
      return;
    }
    console.log(response);
    dispatch(adminMoviesState(response.data.movies));
    setLoading(false);
    return response.data.movies
  };
  useEffect(() => {
    setLoading(true);
    getMoviesFunc();
  }, []);
  console.log(adminMovies.data[1]?.trailer_youtube_link.split("=")[1]);
  // movie delete functinaltiy

  const deleteMovieFunc = async (moveId) => {
    const response = await deleteMovie(moveId);
    if (!response.success) {
      dispatch(errorMsgState(response.message));
      return;
    }
   
    
    dispatch(errorMsgState("Successfuly Delete"));
  };
  useEffect(() => {
    setMovies(adminMovies.data);
  }, [adminMovies]);

  return (
    <div className=" min-h-screen px-5 py-8">
      <h1 className="text-3xl font-medium text-white">New Movies</h1>
      {movies.length > 0 ? (
        <div className="grid grid-cols-6 items-center gap-3">
          {movies.map((movie, idx) => {
            return (
              <div className=" transition ease border border-gray-800 duration-500  px-2 py-1">
                <div
                  onClick={() => deleteMovieFunc(movie._id)}
                  className="text-xl relative flex items-center justify-end cursor-pointer font-bold text-white px-3 py-2 text-end w-full"
                >
                  <MdDelete className="" />
                </div>
                <div className="">
                  <div className=" relative overflow-hidden movieDetail">
                    <div className="z-20 px-4 py-3 absolute top-0 left-0   ">
                      <p className="text-[13px] font-medium px-1.5 py-1 text-gray-300 bg-[#fe52fba1]  rounded-full">
                        {(Math.random() * 6).toFixed(1)}
                      </p>
                    </div>
                    <div className=" overflow-hidden transition  duration-300 relative">
                      <img
                        loading="lazy"
                        className="w-full  h-full object-cover rounded-lg"
                        src={movie.poster_path}
                        alt=""
                      />
                      <div className="h-full w-full detailDiv z-10  absolute top-0 left-0 transition duration-300">
                        <div
                          to={""}
                          className=" transition duration-300  z-20 absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] rounded-full"
                        >
                          <Link
                            to={`/movies/vedio/${adminMovies.data[1]?.trailer_youtube_link.split("=")[1]}`}
                            className="flex w-[120px] cursor-pointer items-center gap-2 px-2 py-2.5  transition-all duration-300 border  rounded-full bg-[#fff]"
                          >
                            <FaPlay className="text-[#3d4afe] text-[13px] " />
                            <p className="font-medium text-[12px] md:text-[13px] lg:text-[14px] text-gray-900">
                              Play Now
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-white font-medium text-[17px] leading-5">
                      {movie.title}
                    </p>
                    <div className="flex items-center justify-between flex-wrap text-[15px] mt-1  font-normal text-[#525cdbcc]">
                      {[movie.genre].map((gen, id) => {
                        return (
                          <div className="flex mr-0.5" key={id}>
                            {" "}
                            <p className="">{gen} | </p>{" "}
                          </div>
                        );
                      })}
                      <div className=" text-gray-400 font-normal text-[13px]">
                        <p>{movie.release_date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h1 className="text-3xl absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] font-medium text-white">
          No Movies Created Yet
        </h1>
      )}
    </div>
  );
}

export default Movies;
