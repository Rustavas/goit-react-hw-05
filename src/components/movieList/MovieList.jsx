import { Link, useParams, useLocation} from "react-router-dom"

import css from "./MovieList.module.css"

const MovieList = ({ movies }) => {
  const {movieId} = useParams();
  const location = useLocation();
  return (
    <div className={css.box}>
      <ul className={css.list} >
        {Array.isArray(movies) && movies.map(({ id, title }) => {
          return (
            <li  className={css.item} key={id}>
              <span>・ </span><Link className={css.Link} state={location} to={`/movies/${id}`}>{title}</Link>
            </li>
          )      
        })
        }
      </ul>
    </div>
  )
}

export default MovieList