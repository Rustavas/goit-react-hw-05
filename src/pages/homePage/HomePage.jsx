import { useEffect, useState } from "react";

import {getTrandingMovies}  from "../../servises/api"
import Loader from "../../components/loader/Loader";
import MovieList from "../../components/movieList/MovieList";

import css from "./HomePage.module.css"
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(()=>{
    async function fetchTrandingMovies() {  
      try{
        setIsloading(true)
        const {results} = await getTrandingMovies()
        setMovies(results)
      }catch (error){
        console.log(error)
        setIsError(true)
      }finally{
        setIsloading(false)
      }
    }
    fetchTrandingMovies()
  }, [])

  return (
    <div>
      <h1 className={css.title}>Trending today</h1>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {movies.length !== 0 && <MovieList 
        movies={movies}
      />}
    </div>
  )
}

export default HomePage