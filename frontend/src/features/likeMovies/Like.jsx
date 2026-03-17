import React from "react";
import CardSkeleton from "../../components/CardSkeleton";
import { useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard";
import { useState } from "react";
import { useEffect } from "react";

function Like() {
  // like movies track;
  const likeMovies = useSelector((state) => state.likeMovies.data);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const fetchWithId = async (movieId) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=1a05bd3a661c3ad18b28dfdde27416e8`,
    );
    const data = await response.json();
    setMovies((prev) => [...prev, data]);
  };
  useEffect(() => {
    if (likeMovies.length > 0) {
      setMovies([]);
      likeMovies.map(({ movieId }) => {
        fetchWithId(movieId);
      });
    }
  }, [likeMovies]);
  console.log(movies, likeMovies);

  return (
    <div className="px-7 py-6 min-h-screen w-full">
      <div className="h-full w-full">
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 2xl:grid-cols-6 gap-3 mt-5">
          {movies.length > 0 &&
            movies?.map((movie, idx) => {
              return (
                <div className="  transition ease duration-500  px-2 py-1">
                  <MovieCard
                    like={""}
                    videoId={movie.id}
                    genre={movie.genres.map(({id}) => id)}
                    title={movie.title}
                    posterPath={movie.poster_path}
                    rating={movie.vote_average.toFixed(1)}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Like;
