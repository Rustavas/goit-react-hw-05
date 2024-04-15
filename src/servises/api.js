import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3/";

const params = {
  "language": "en-US",
  "include_adult": false,
  "page": 1,
};

const options = {
  headers: {
    Authorization:
      " Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGNmOGU4MGRkZTJkMjcxNTcyNzRlZWFhMDM4YmNhYiIsInN1YiI6IjY0NTM3MzlhMzNhZDhmMDExYjNmODAyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Twl5LaPJBi7qNUtAmo6w8OQP0VaXxzifsZAlJxgT9TY",
  },
};

const getTrandingMovies = async () => {
  const urlMovie = `${BASE_URL}trending/movie/day?${params}`;
  const { data } = await axios.get(urlMovie, options);
  return data;
};

const getMoviesByQuery = async (query) => {
  const urlQuery = `${BASE_URL}search/movie?query=${query}&${params}`;
  const { data } = await axios.get(urlQuery, options);
  return data;
};

const getMoviesById = async (movieId) => {
  const urlId = `${BASE_URL}movie/${movieId}${params}`;
  const { data } = await axios.get(urlId, options);
  return data;
};

const getMovieCast = async (movieId) => {
  const urlCast = `${BASE_URL}movie/${movieId}/credits?${params}`;
  const { data } = await axios.get(urlCast, options);
  return data;
};

const getMovieReviews = async (movieId) => {
  const urlReviews = `${BASE_URL}movie/${movieId}/reviews?${params}`;
  const { data } = await axios.get(urlReviews, options);
  return data;
};
export { getTrandingMovies, getMoviesByQuery, getMoviesById, getMovieCast, getMovieReviews };