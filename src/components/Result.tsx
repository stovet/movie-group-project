import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Results } from "../model/MovieModel";
import { fetchGenreTMDB, fetchTMDB } from "../Service/tmdbService";
function Result() {
  const [movies, setMovies] = useState<Results[]>([]);
  const [genreId, setGenreId] = useState(28);
  const [page, setPage] = useState(1);
  const id: number = parseInt(useParams().id!);
  let foundMovie: Results | undefined = movies.find(
    (movie, index) => id === index
  );

  if (!foundMovie) {
    foundMovie = {
      title: "",
      vote_average: 0,
      overview: "",
      poster_path: "",
      original_language: "",
    };
  }

  useEffect(() => {
    if (page) {
      fetchTMDB(page).then((data) => setMovies(data));
      if (genreId) {
        fetchGenreTMDB(page, genreId).then((data) => setMovies(data));
      }
    }
  }, [page, genreId]);

  return (
    <div className="Result">
      <h1>{foundMovie.title}</h1>
      <img
        src={"https://image.tmdb.org/t/p/w300/" + foundMovie.poster_path}
        alt="Cover art for movie"
      />
      <p>
        {foundMovie.overview} - Rating: {foundMovie.vote_average}
      </p>
    </div>
  );
}
export default Result;
