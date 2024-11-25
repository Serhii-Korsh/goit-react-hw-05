import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./MovieList.module.css";

function MovieList({ movies, isSearchPerformed }) {
  const location = useLocation();

  if (isSearchPerformed && movies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <ul className={s.ul}>
      {movies.map((movie) => (
        <li key={movie.id} className={s.li}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <p className={s.p}>{movie.title || movie.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default MovieList;

