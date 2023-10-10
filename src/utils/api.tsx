import axios from "axios";

export const getMovieNowPlaying = async () => {
    const movie = await axios.get(`${import.meta.env.VITE_APP_BASEURL}/movie/now_playing`, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_APP_APIKEY}`
        }
    })
    return movie.data.results
}

export const getMovieTopRated = async () => {
    const movie = await axios.get(`${import.meta.env.VITE_APP_BASEURL}/movie/top_rated`, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_APP_APIKEY}`
        }
    })
    return movie.data.results
}

export const getMoviePopular = async () => {
    const movie = await axios.get(`${import.meta.env.VITE_APP_BASEURL}/movie/popular`, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_APP_APIKEY}`
        }
    })
    return movie.data.results
}

export const searchMovie = async (q:string) => {
    const search = await axios.get(`${import.meta.env.VITE_APP_BASEURL}/search/movie?query=${q}&api_key=03b593e4b9cc16ea2cfeaf0118f299e5`)
    return search.data.results
}

export const detailMovie = async(id) => {
    const detail = await axios.get(`${import.meta.env.VITE_APP_BASEURL}/movie/${id}`,  {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_APP_APIKEY}`
        }
    })
    return detail.data
}