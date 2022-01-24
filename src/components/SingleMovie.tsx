import { useState } from "react";
import { useParams } from "react-router-dom";
import { Results } from "../model/MovieModel";
import Result from "./Result";

export function SingleMovie() {
  const [movies, setMovies] = useState<Results[]>([]);
  const id: number = parseInt(useParams().id!);
  let foundMovie: Results | undefined = movies.find((movie) => id === movie.id);

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