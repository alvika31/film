import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import {getMovieNowPlaying, getMovieTopRated, getMoviePopular, searchMovie, detailMovie} from './utils/api'
import MovieList from './components/MovieList'
import DetailMovie from './components/DetailMovie'

function App() {
  const [nowPlaying, setNowPlaying] = useState([])
  const [topRated, setTopRated] = useState([])
  const [popular, setPopular] = useState([])
  const [dataSearch, setDataSearch] = useState([])
  const [dataDetail, setDataDetail] = useState({})

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const movieList = await getMovieNowPlaying()
      
      setNowPlaying(movieList)
    }

    const fetchTopRated = async () => {
      const movieList = await getMovieTopRated()
      setTopRated(movieList)
    }

    const fetchPopular = async () => {
      const movieList = await getMoviePopular()
      setPopular(movieList)
    }
    fetchNowPlaying()
    fetchTopRated()
    fetchPopular()
  }, [])

    const search = async (q:string) => {
      const query = await searchMovie(q)
      setDataSearch(query);
    }

    const detail = async (id) => {
      const movie = await detailMovie(id)
      console.log(movie)
      setDataDetail(movie)
    }
   
  return (
    <>
    <Navbar onSearch={search}/>
    <div className='container mt-10'>
      { Object.values(dataDetail).length === 0 ? (
     null
      ) : (
        <DetailMovie genres={dataDetail.genres} title={dataDetail.title} poster_path={`${import.meta.env.VITE_APP_BASEIMGURL}/${dataDetail.poster_path}`} overview={dataDetail.overview} popularity={dataDetail.popularity} release_date={dataDetail.release_date} vote_average={dataDetail.vote_average} vote_count={dataDetail.vote_count} original_language={dataDetail.original_language} production_companies={dataDetail.production_companies}/>
      )}

      {dataSearch.length != 0 && (
        <>
        <h1 className='text-2xl mb-4 font-bold text-slate-500'>Hasil Pencarian</h1>
        <MovieList onDetail={detail} movies={dataSearch}/>
        </>
      )}
      {dataSearch.length == 0 && (
        <>
       <h1 className='text-2xl mb-4 font-bold text-slate-500'>Sedang Tayang</h1>
     <MovieList onDetail={detail} movies={nowPlaying}/>

     <h1 className='text-2xl mt-10 mb-4 font-bold text-slate-500'>Top Rated</h1>
     <MovieList onDetail={detail} movies={topRated}/>

     <h1 className='text-2xl mt-10 mb-4 font-bold text-slate-500'>Popular</h1>
     <MovieList onDetail={detail} movies={popular}/>
        </>
      )}
    
     </div>
     </>
  )
}

export default App
