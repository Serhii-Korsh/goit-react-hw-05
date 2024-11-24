import { useState, useEffect } from "react";
import axios from "axios";
import s from "./MovieCast.module.css";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmI0OTY1Y2MyY2EyODQ3ZTNiNmFiMTFlZTVlYjY2YyIsIm5iZiI6MTczMjIyMTE1OS45ODg2MjY3LCJzdWIiOiI2NzNmOTE2NGQ3YmVlNTU4NWM1NThmOGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.17W3zzallB0GxV9d7bGrFh-p1DIyHMhN_DPtKdTcevk";

function MovieCast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
        headers: { Authorization: `Bearer ${API_KEY}` },
      })
      .then((response) => setCast(response.data.cast))
      .catch((error) => console.error("Error fetching cast:", error));
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
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
    </div>
  );
}

export default MovieCast;
