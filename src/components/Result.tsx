import { moveEmitHelpers } from "typescript";
import { Results } from "../model/MovieModel";

interface Prop {
  movie: Results;
}

function Result({ movie }: Prop) {
  console.log(movie.title);

  return (
    <div className="Result">
      <h2>{movie.title}</h2>
      <a href="">
        <img
          src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}
          alt="Cover art for movie"
        />
      </a>
      <p>Rating:{movie.vote_average}</p>
      <span>
        Add to watch list
        <input type="checkbox" id="watchList" />
      </span>
    </div>
  );
}
export default Result;
