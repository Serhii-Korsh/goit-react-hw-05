import { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "/src/components/MovieList/MovieList";
import s from "./HomePage.module.css";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmI0OTY1Y2MyY2EyODQ3ZTNiNmFiMTFlZTVlYjY2YyIsIm5iZiI6MTczMjIyMTE1OS45ODg2MjY3LCJzdWIiOiI2NzNmOTE2NGQ3YmVlNTU4NWM1NThmOGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.17W3zzallB0GxV9d7bGrFh-p1DIyHMhN_DPtKdTcevk";
const TRENDING_URL = "https://api.themoviedb.org/3/trending/movie/day";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(TRENDING_URL, {
        headers: { Authorization: `Bearer ${API_KEY}` },
      })
      .then((response) => setMovies(response.data.results))
      .catch((error) =>
        console.error("Error fetching trending movies:", error)
      );
  }, []);

  return (
    <div>
      <h1 className={s.h1}>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
