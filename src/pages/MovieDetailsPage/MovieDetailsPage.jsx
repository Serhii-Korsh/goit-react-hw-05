import { useState, useEffect, useRef } from "react";
import {
  useParams,
  Link,
  useNavigate,
  useLocation,
  Outlet,
} from "react-router-dom";
// import axios from "axios";
import s from "./MovieDetailsPage.module.css";
import { getMovieDetails } from "/src/services/api";

function MovieDetailsPage() {
  const { movieId } = useParams(); 
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const prevLocation = useRef(location.state?.from || "/movies"); 

  useEffect(() => {
    getMovieDetails(movieId)
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [movieId]);

  const goBack = () => navigate(prevLocation.current);

  if (!movie) return <div>Loading...</div>;

  const genres = movie.genres.map((genre) => genre.name).join(", ");

  return (
    <div>
      <button onClick={goBack}>Go back</button>
      <div className={s.box}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={s.img}
        />
        <div className={s.box2}>
          <h1>{movie.title}</h1>
          <p>User Score: {Math.round(movie.popularity)}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>{genres}</p>
        </div>
      </div>
      <nav className={s.nav}>
        <h3>Additional Information</h3>
        <ul className={s.ul}>
          <li>
            <Link
              to="cast"
              state={{ from: prevLocation.current }}
              className={s.navlink}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to="reviews"
              state={{ from: prevLocation.current }}
              className={s.navlink}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet /> 
    </div>
  );
}

export default MovieDetailsPage;

