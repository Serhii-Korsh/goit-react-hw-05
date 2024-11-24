import "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./MovieList.module.css";

function MovieList({ movies, isSearchPerformed }) {
  if (isSearchPerformed && movies.length === 0) {
    return <p>Нет фильмов для отображения.</p>;
  }

  if (movies.length === 0) {
    return null; // Не отображаем ничего при начальной загрузке
  }

  return (
    <ul className={s.ul}>
      {movies.map((movie) => (
        <li key={movie.id} className={s.li}>
          <Link to={`/movies/${movie.id}`}>
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
      poster_path: PropTypes.string,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default MovieList;
