import { useState, useEffect } from "react";
import { useParams, Link, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import MovieCast from "/src/components/MovieCast/MovieCast";
import MovieReviews from "/src/components/MovieReviews/MovieReviews";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmI0OTY1Y2MyY2EyODQ3ZTNiNmFiMTFlZTVlYjY2YyIsIm5iZiI6MTczMjIyMTE1OS45ODg2MjY3LCJzdWIiOiI2NzNmOTE2NGQ3YmVlNTU4NWM1NThmOGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.17W3zzallB0GxV9d7bGrFh-p1DIyHMhN_DPtKdTcevk";
const MOVIE_URL = "https://api.themoviedb.org/3/movie";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${MOVIE_URL}/${movieId}`, {
        headers: { Authorization: `Bearer ${API_KEY}` },
      })
      .then((response) => setMovie(response.data))
      .catch((error) =>
        console.error("Ошибка при получении информации о фильме:", error)
      );
  }, [movieId]);

  const goBack = () => navigate(-1);

  if (!movie) return <div>Загрузка...</div>;

  return (
    <div>
      <button onClick={goBack}>Назад</button>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <nav>
        <Link to="cast">Актеры</Link>
        <Link to="reviews">Отзывы</Link>
      </nav>
      <Routes>
        <Route path="cast" element={<MovieCast movieId={movieId} />} />
        <Route path="reviews" element={<MovieReviews movieId={movieId} />} />
      </Routes>
    </div>
  );
}

export default MovieDetailsPage;
