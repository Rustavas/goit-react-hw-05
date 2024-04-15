import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieReviews } from "../../servises/api"
import ErrorMessage from "../errorMessage/ErrorMessage";
import Loader from "../loader/Loader";

import css from "./MovieReviews.module.css"

const MovieReviews = () => {
  const{ movieId } = useParams();
  const[reviews, setReviews] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(()=>{
    async function fetchMovieReviews() {
      try{
       setIsLoading(true)
       const{ results } = await getMovieReviews(movieId)
       setReviews(results)
      }catch (error){
        setIsError(true)
      }finally{
        setIsLoading(false)
      }
    }
    fetchMovieReviews()
  }, [movieId])

  return (
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {reviews.length === 0 ? <p>We don't have any reviews for this movie.</p> : 
        <ul className={css.list}>
          {reviews.map((review) => (
            <li key = {review.id}>
              <p className={css.username}>・ Author: {review.author_details.username}.</p>
              <p className={css.text}>{review.content}</p>
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export default MovieReviews