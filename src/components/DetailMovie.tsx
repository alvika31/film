import React from 'react'

function DetailMovie({poster_path, title, overview, popularity, release_date, vote_average, vote_count, original_language, genres, production_companies}) {
  return (
    <div className='flex gap-10 items-center mb-10'>
        <img src={poster_path} className='rounded-xl' alt='' />
        <div className='flex flex-col gap-2'>
            <h1 className='text-3xl font-bold text-slate-600'>{title}</h1>
            <p className='text-slate-500'>Overview: {overview}</p>
            <p className='text-slate-500'>Popularity: {popularity}</p>
            <p className='text-slate-500'>Release Date: {release_date}</p>
            <p className='text-slate-500'>Vote Avarage: {vote_average}</p>
            <p className='text-slate-500'>Vote Count: {vote_count}</p>
            <p className='text-slate-500'>Original Language: {original_language}</p>
            <p className='text-slate-500'>Genres: </p>
            <div className='flex gap-2'>
            {genres.map((genre) => (
                <div className='text-slate-500'>{genre.name},</div>
            ))}
            </div>
            <p className='text-slate-500'>Production: </p>
            <div className='flex items-start gap-2'>
            {production_companies.map((production) => (
                <img className='w-14' src={`${import.meta.env.VITE_APP_BASEIMGURL}/${production.logo_path}`} />
            ))}
            </div>
        </div>
    </div>
  )
}

export default DetailMovie