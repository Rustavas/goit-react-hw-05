import { lazy , Suspense} from 'react';
import { NavLink, Route, Routes } from 'react-router-dom'
import clsx from "clsx";

import Loader from './components/loader/Loader';
import Header from './components/header/Header';
const HomePage = lazy(() => import("./pages/homePage/HomePage"))
const MoviesPage = lazy(() => import("./pages/moviesPage/MoviesPage"))
const MovieDetailsPage = lazy(() => import("./pages/movieDetailsPage/MovieDetailsPage"))
const NotFoundPage = lazy(() => import("./pages/notFoundPage/NotFoundPage"))
import MovieCast from './components/movieCast/MovieCast';
import MovieReviews from './components/movieReviews/MovieReviews';

import css from "./App.module.css"
  
function App() {
  return (
    <Suspense fallback={<Loader />}>
       <Routes>
         <Route path="/" element={<Header />}>
           <Route index element={<HomePage />} />
           <Route path="/movies" element={<MoviesPage />} />
           <Route path="/movies/:movieId/" element={<MovieDetailsPage />} >
             <Route path="cast" element={<MovieCast />} />
             <Route path="reviews" element={<MovieReviews />} />
           </Route>
           <Route path="*" element={<NotFoundPage />} />
         </Route>
      </Routes>
    </Suspense>
  )
  }
export default App