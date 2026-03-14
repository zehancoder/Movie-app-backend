import React from 'react'
import MovieCard from '../../components/MovieCard'

function Section2() {
  return (
    <div>
        <div>
            <div className='flex items-center flex-wrap gap-3'>
                {
                    <MovieCard/>
                }
            </div>
        </div>
    </div>
  )
}

export default Section2