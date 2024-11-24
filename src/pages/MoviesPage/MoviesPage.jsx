import { useState } from "react";
import axios from "axios";
import MovieList from "/src/components/MovieList/MovieList";
import s from "./MoviesPage.module.css";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmI0OTY1Y2MyY2EyODQ3ZTNiNmFiMTFlZTVlYjY2YyIsIm5iZiI6MTczMjIyMTE1OS45ODg2MjY3LCJzdWIiOiI2NzNmOTE2NGQ3YmVlNTU4NWM1NThmOGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.17W3zzallB0GxV9d7bGrFh-p1DIyHMhN_DPtKdTcevk";

const SEARCH_URL = "https://api.themoviedb.org/3/search/movie";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      return;
    }

    axios
      .get(`${SEARCH_URL}?query=${query}`, {
        headers: { Authorization: `Bearer ${API_KEY}` },
      })
      .then((response) => {
        setMovies(response.data.results || []);
        setIsSearchPerformed(true);
      })
      .catch((error) => console.error("Error searching movies:", error));
  };

  return (
    <div>
      <form onSubmit={handleSearch} className={s.form}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies"
          className={s.input}
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} isSearchPerformed={isSearchPerformed} />
    </div>
  );
}

export default MoviesPage;
