import { moveEmitHelpers } from "typescript";
import { Results } from "../model/MovieModel";

interface Prop {
  movie: Results;
}

function Result({ movie }: Prop) {
  return (
    <div className="Result">
      <h3>{movie.result.title}</h3>
      <img src={movie.result.poster_path} alt="Cover art for movie" />
      <p>
        {movie.result.overview} <span>{movie.result.vote_average}</span>
      </p>
    </div>
  );
}
export default Result;
