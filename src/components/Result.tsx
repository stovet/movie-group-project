import { moveEmitHelpers } from "typescript";
import { Results } from "../model/MovieModel";

interface Prop {
  movie: Results;
}

function Result({ movie }: Prop) {
  console.log(movie.title);

  return (
    <div className="Result">
      <h3>{movie.title}</h3>
      <img
        src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}
        alt="Cover art for movie"
      />
      <p>
        {movie.overview} <span>{movie.vote_average}</span>
      </p>
    </div>
  );
}
export default Result;
