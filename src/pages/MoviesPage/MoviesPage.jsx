import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "/src/services/api";
import MovieList from "/src/components/MovieList/MovieList";
import s from "./MoviesPage.module.css";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (query) {
      searchMovies(query)
        .then((data) => {
          setMovies(data || []);
          setIsSearchPerformed(true);
        })
        .catch((error) => console.error("Error searching movies:", error));
    }
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    const formQuery = e.target.elements.search.value.trim();
    if (!formQuery) return;
    setSearchParams({ query: formQuery });
  };

  return (
    <div>
      <form onSubmit={handleSearch} className={s.form}>
        <input
          name="search"
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
