import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../../components/MovieCard';

function Search() {
  const searchMovies = useSelector(state => state.searchMovies);
  return (
    <div className=' min-h-screen px-5 py-8'>
      <h1 className='text-3xl font-medium text-white'>Search Movies</h1>
      {searchMovies.length > 0 ? <div className='grid grid-cols-6 items-center gap-3'>
        {
          searchMovies.map((movie, idx) => {
            return <div className='  transition ease duration-500  px-2 py-1'>
              <MovieCard videoId={movie.id} genre={movie.genre_ids} title={movie.title} posterPath={movie.poster_path} rating={movie.vote_average.toFixed(1)} />
            </div>
          })
        }
      </div> : <h1 className='text-3xl absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] font-medium text-white'>No search data</h1>
      }
    </div>
  )
}

export default Search