import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import { getMovieCast } from "../../servises/api"
import ErrorMessage from "../errorMessage/ErrorMessage";
import Loader from "../loader/Loader";

import css from "./MovieCast.module.css"

const MovieCast = () => {
  const{ movieId } = useParams();
  const[roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchMovieCast(){
      try{
        setIsLoading(true)
        const {cast} = await getMovieCast(movieId)
        setRoles(cast)
      }catch (error){
        setIsError(true)
      }finally{
        setIsLoading(false)
      }
    }
    fetchMovieCast()
  }, [roles]) 
  return (
    <div>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ul className={css.list}>
        {roles.map((actor) => (
          <li key={actor.id}>
            <img
              className={css.image}
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
            />
            <p className={css.actorName}><span className={css.point}>・</span>{actor.name}</p>
            <p className={css.character}>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MovieCast