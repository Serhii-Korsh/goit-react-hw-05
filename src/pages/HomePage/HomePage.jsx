import { useState, useEffect } from "react";
import { getTrendingMovies } from "/src/services/api"; 
import MovieList from "/src/components/MovieList/MovieList";
import s from "./HomePage.module.css";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    getTrendingMovies()
      .then((data) => setMovies(data.results))
      .catch((err) => {
        console.error("Error fetching trending movies:", err);
        setError("Failed to fetch trending movies.");
      });
  }, []);

  return (
    <div>
      <h1 className={s.h1}>Trending Movies</h1>
      {error ? (
        <p className={s.error}>{error}</p>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
}

export default HomePage;


