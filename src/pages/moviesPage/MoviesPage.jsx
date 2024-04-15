import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import MovieList from "../../components/movieList/MovieList";
import SearchBar from "../../components/searchBar/SearchBar";
import { getMoviesByQuery } from "../../servises/api"

import css from "./MoviesPage.module.css"

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get("query")
  
const handleSubmit = (evt) => {
  evt.preventDefault();
  setSearchParams({query: evt.currentTarget.elements.search.value.trim()})
}
  useEffect(()=>{
    if (!query) return;
async function fetchMoviesByQuery () {
  try{
    setIsloading(true)
    const { results } = await getMoviesByQuery(query)
    setMovies(results)
  }catch (error){
    setIsError(true)
  }finally{
    setIsloading(false)
  }
}
fetchMoviesByQuery ()
  }, [query]);

  return (
    <div>
      <SearchBar onSubmit={handleSubmit}/>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {movies.length !== 0 && <MovieList 
        movies={movies}
      />}
    </div>    
  )
}

export default MoviesPage