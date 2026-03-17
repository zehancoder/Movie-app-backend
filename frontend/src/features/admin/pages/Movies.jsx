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
import { FaEdit, FaPlay } from "react-icons/fa";
import { TbDots } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import UpdateForm from "./UpdateForm";

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
      dispatch(adminMoviesStateMessage("Cannot get movies"));
      return;
    }
    dispatch(adminMoviesState(response.data.movies));
    setLoading(false);
    return response.data.movies;
  };
  useEffect(() => {
    setLoading(true);
    getMoviesFunc();
  }, []);
  // movie delete functinaltiy

  const deleteMovieFunc = async (moveId) => {
    const response = await deleteMovie(moveId);

    if (!response.success) {
      dispatch(errorMsgState(response.message));
      return;
    }

    const updatedMovies = adminMovies.data.filter(
      (movie) => movie._id !== moveId,
    );

    dispatch(adminMoviesState(updatedMovies));
    dispatch(errorMsgState("Successfully Deleted"));
  };
  useEffect(() => {
    setMovies(adminMovies.data);
  }, [adminMovies]);

  // update movies..
  const [updateMovieId, setUpdateMovieId] = useState({
    movieId : '',
    title : '',
    poster_path : '',
    trailer_youtube_link : '',
    description: '',
    release_date: '',
    genre: '',
    category: '',
    vote_average: '',
  });
  const updateMovies = (
    movieId,
    title,
    poster_path,
    trailer_youtube_link,
    description,
    release_date,
    genre,
    category,
    vote_average,
  ) => {
    setUpdateMovieId({
      movieId,
      title,
      poster_path,
      trailer_youtube_link,
      description,
      release_date,
      genre,
      category,
      vote_average,
    });
  };

  return (
    <div className=" min-h-screen px-5 py-8 relative">
      <h1 className="text-3xl font-medium text-white">New Movies</h1>
      {movies.length > 0 ? (
        <div className="grid grid-cols-6 items-center gap-3">
          {movies.map((movie, idx) => {
            return (
              <div className=" transition ease border border-gray-800 duration-500  px-2 py-1">
                <div className="text-[18px] relative flex items-center gap-3 justify-end cursor-pointer font-bold text-gray-400 px-3 py-2 text-end w-full">
                  <div
                    className="hover:text-[#fe52fba1] transition duration-300"
                    onClick={() => deleteMovieFunc(movie._id)}
                  >
                    <MdDelete className="" />
                  </div>
                  <div
                    className="hover:text-[#fe52fba1] transition duration-300"
                    onClick={() =>
                      updateMovies(
                        movie._id,
                        movie.title,
                        movie.poster_path,
                        movie.trailer_youtube_link,
                        movie.description,
                        movie.release_date,
                        movie.genre,
                        movie.category,
                        movie.vote_average,
                      )
                    }
                  >
                    <FaEdit className="" />
                  </div>
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
                            to={`/movies/vedio/${adminMovies?.data[1]?.trailer_youtube_link.split("=")[1]}`}
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
      {updateMovieId.movieId && (
        <div className=" fixed z-30 bg-gray-300 rounded-lg md:px-6 px-4 lg:px-8 md:py-8 py-4 lg:py-12 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <UpdateForm data = {updateMovieId} setUpdateMovieId={setUpdateMovieId} />
        </div>
      )}
    </div>
  );
}

export default Movies;
