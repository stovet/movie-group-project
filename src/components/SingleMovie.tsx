import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Results } from "../model/MovieModel";
import { OneMovie } from "../model/SingleMovie";
import { fetchIdTMDB } from "../Service/tmdbService";

export function SingleMovie() {
  const [movies, setMovies] = useState<Results[]>([]);
  const id: number = parseInt(useParams().id!);
  const [searchParams] = useSearchParams();

  let foundMovie: OneMovie | undefined = movies.find(
    (movie) => id === movie.id
  );

  useEffect(() => {
    fetchIdTMDB().then((data) => setMovies(data));
  }, []);

  if (!foundMovie) {
    foundMovie = {
      title: "",
      vote_average: 0,
      overview: "",
      poster_path: "",
      original_language: "",
      id: 0,
    };
  }
  return (
    <div className="SingleMovie">
      <div className="SingleMovie-container">
        <h1>{foundMovie.title}</h1>
        <img
          src={"https://image.tmdb.org/t/p/w300/" + foundMovie.poster_path}
          alt="Cover art for movie"
        />
        <p>
          {foundMovie.overview} - Rating: {foundMovie.vote_average}
        </p>
      </div>
    </div>
  );
}
