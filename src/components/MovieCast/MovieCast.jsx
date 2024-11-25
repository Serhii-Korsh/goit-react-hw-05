import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "/src/services/api";
import s from "./MovieCast.module.css";

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId)
      .then(setCast)
      .catch((error) => console.error("Error fetching cast:", error));
  }, [movieId]);

  return (
    <ul>
      {cast.map((actor) => (
        <li key={actor.id} className={s.li}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                : "https://via.placeholder.com/300x450?text=No+Image"
            }
            alt={actor.name}
            className={s.img}
          />
          <h3>{actor.name}</h3>
          <p>Character:{actor.character}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieCast;

