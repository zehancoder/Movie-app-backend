import React, { useEffect, useState } from "react";
import { fetchWithGenre } from "./fetchWithGenre";
import CardSkeleton from "../../components/CardSkeleton";
import MovieCard from "../../components/MovieCard";
import { useSelector } from "react-redux";

function Section1() {
  const genres = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ];
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(28);
  const [page, setPage] = useState(1);
  // fetch movies with genre id
  const fetchMovies = async (genre, pageNum, append = false) => {
    const response = await fetchWithGenre(genre, pageNum);

    setMovies((prev) =>
      append ? [...prev, ...response.results] : response.results,
    );

    setLoading(false);
  };
  useEffect(() => {
    setMovies([]);
    setLoading(true);
    setPage(1);
    fetchMovies(selectedGenre, 1);
  }, [selectedGenre]);
  // page updation
  const updatePageFunc = () => {
    setLoading(true);
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMovies(selectedGenre, nextPage, true);
  };
  // // like movies track;
  const likeMovies = useSelector(state => state.likeMovies);
  // useEffect(() => {
  //   movies.map((movie, idx) => {
  //     if(movie.id.toString() === likeMovies.data[idx].movieId){
  //       movie.like = true;
  //     }

  //   });
  //   console.log(likeMovies);

  // }, [likeMovies])
  // useEffect(() => {
  //   movies.map((data, idx) => {
  //     console.log(data.id, likeMovies.data[idx]?.movieId);
  //   });
  // }, [movies]);
  return (
    <div className="py-12 px-5">
      <div>
        {/* adding tags */}
        <div className="flex items-center gap-2 flex-wrap">
          {genres.map((item) => {
            return (
              <div
                onClick={() => setSelectedGenre(item.id)}
                key={item.id}
                className={`px-3  cursor-pointer font-medium text-white py-1.5 rounded-md border border-[#1F1F1F] bg-[#0F0F0F] ${item.id === selectedGenre ? "linear-bg-noHover" : "linear-bg"}`}
              >
                {item.name}
              </div>
            );
          })}
        </div>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 2xl:grid-cols-6 gap-3 mt-5">
          {movies.map((movie, idx) => {
            return (
              <div className="  transition ease duration-500  px-2 py-1">
                <MovieCard
                  like={""}
                  videoId={movie.id}
                  genre={movie.genre_ids}
                  title={movie.title}
                  posterPath={movie.poster_path}
                  rating={movie.vote_average.toFixed(1)}
                />
              </div>
            );
          })}
          {loading &&
            Array(19)
              .fill(null)
              .map(() => {
                return (
                  <div className="h-full w-full">
                    <CardSkeleton />
                  </div>
                );
              })}
        </div>
        <div className="w-full text-center">
          <button
            onClick={() => updatePageFunc()}
            className="font-medium linear-bg cursor-pointer text-[15px] md:text-[16px] lg:text-[17px] bg-[#0F0F0F] border border-[#1F1F1F] text-gray-300 mt-5 mx-auto px-3 py-2 rounded-md"
          >
            Load more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section1;
