import React from 'react'
import MovieItem from './MovieItem'

function MovieList({movies, onDetail}) {
    function ShortenText(text:string) {
        if (text.length <= 20) {
          return <span>{text}</span>;
        }
      
        const shortText = text.slice(0, 20) + '...';
        return <span>{shortText}</span>;
      }
  return (
    <div className='grid grid-cols-4 sm:grid-cols-10 gap-3'>
        {movies.map((movie) => (
        <MovieItem key={movie.id} onDetail={onDetail} id={movie.id} title={movie.title} poster_path={`${import.meta.env.VITE_APP_BASEIMGURL}${movie.poster_path}`} overview={ShortenText(movie.overview)} vote_average={movie.vote_average}/> 
        ))}
    </div>
  )
}

export default MovieList