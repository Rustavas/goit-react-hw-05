import { lazy, Suspense, useEffect, useRef } from "react";
import { useState } from "react";
import { Link, Route, Routes,useLocation,useParams } from "react-router-dom";

import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import { getMoviesById } from "../../servises/api"
const MovieCast = lazy (() => import("../../components/movieCast/MovieCast"))
const MovieReviews  = lazy (() => import("../../components/movieReviews/MovieReviews"))

import css from "./MovieDetailPage.module.css"

const MovieDetailPage = () => {
  const {movieId} = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/")

  useEffect(() => {
    async function fetchMoviesById () {
      try{
        setIsloading(true)
        const data = await getMoviesById(movieId)
        setMovieDetails(data)
      }catch (error){
        setIsError(true)
      }finally{
        setIsloading(false)
      }
    }
    fetchMoviesById () 
  }, [movieId])

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <Link to={backLinkRef.current} className={css.link}>⬅︎ Go back</Link>
      {movieDetails !== null && (
        <div className={css.wrapper}>
          <div className={css.wrap}>
            <img className={css.poster} src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
            <div className={css.box}>
              <h1 className={css.title}>{movieDetails.title}</h1>
              <p className={css.subject}>User Score: {Math.round((movieDetails.vote_average) * 10)}%</p>
              <h2 className={css.overview}>Overview</h2>
              <span className={css.text}>{movieDetails.overview}</span>
              <h3 className={css.genres}>Genres</h3> 
              <ul className={css.list}>
                {movieDetails.genres &&
                  movieDetails.genres.map((genre) => (
                    <li key={genre.id} className={css.item}><p className={css.genreName}> {genre.name}</p></li>
                  ))}
              </ul>
            </div>
          </div>
          <div className={css.underline}>
            <p className={css.additional}>Additional information</p>
            <span className={css.point}>・</span><Link to="cast" className={css.links}>Cast</Link><br/>
            <span className={css.point}>・</span><Link to="reviews" className={css.links} >Reviews</Link>
          </div>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="cast" element={<MovieCast />}></Route>
              <Route path="reviews" element={<MovieReviews />}></Route>
            </Routes>
          </Suspense>
        </div>
      )
      }
    </div>
  )
}

export default MovieDetailPage

