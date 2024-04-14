import { lazy , Suspense} from 'react';
import { NavLink, Route, Routes } from 'react-router-dom'
import clsx from "clsx";

import Loader from './components/loader/Loader';
const HomePage = lazy(() => import("./pages/homePage/HomePage"))
const MoviesPage = lazy(() => import("./pages/moviesPage/MoviesPage"))
const MovieDetailsPage = lazy(() => import("./pages/movieDetailsPage/MovieDetailPage"))
const NotFoundPage = lazy(() => import("./pages/notFoundPage/NotFoundPage"))

import css from "./App.module.css"

const getClassNameNavLink = ({ isActive }) => clsx(css.navLink, {
  [css.active]: isActive,})
  
function App() {
  return (
    <div>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink className={getClassNameNavLink} to="/">Home</NavLink>
          <NavLink className={getClassNameNavLink} to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )}

export default App
     