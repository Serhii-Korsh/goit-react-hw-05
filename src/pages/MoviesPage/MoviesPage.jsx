import { useState } from "react";
import axios from "axios";
import MovieList from "/src/components/MovieList/MovieList";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmI0OTY1Y2MyY2EyODQ3ZTNiNmFiMTFlZTVlYjY2YyIsIm5iZiI6MTczMjIyMTE1OS45ODg2MjY3LCJzdWIiOiI2NzNmOTE2NGQ3YmVlNTU4NWM1NThmOGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.17W3zzallB0GxV9d7bGrFh-p1DIyHMhN_DPtKdTcevk";

function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?query=${query}&language=ru-RU&page=1&include_adult=false`;

    try {
      const response = await axios.get(SEARCH_URL, {
        headers: { Authorization: `Bearer ${API_KEY}` },
      });
      setMovies(response.data.results);
    } catch (error) {
      console.error("Ошибка при поиске фильмов:", error);
    }
  };

  return (
    <div>
      <h1>Поиск фильмов</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Введите название фильма"
        />
        <button type="submit">Поиск</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;
