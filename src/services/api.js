import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmI0OTY1Y2MyY2EyODQ3ZTNiNmFiMTFlZTVlYjY2YyIsIm5iZiI6MTczMjIyMTE1OS45ODg2MjY3LCJzdWIiOiI2NzNmOTE2NGQ3YmVlNTU4NWM1NThmOGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.17W3zzallB0GxV9d7bGrFh-p1DIyHMhN_DPtKdTcevk";
const BASE_URL = "https://api.themoviedb.org/3";
const AUTH_HEADER = { Authorization: `Bearer ${API_KEY}` };

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
    headers: AUTH_HEADER,
  });
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie?query=${query}`, {
    headers: AUTH_HEADER,
  });
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    headers: AUTH_HEADER,
  });
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    headers: AUTH_HEADER,
  });
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
    headers: AUTH_HEADER,
  });
  return response.data.results;
};

export const getTrendingMovies = async () => {
  const url = `${BASE_URL}/trending/movie/day`;
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data;
};

export const getMovieDetails = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}`;
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data;
};
