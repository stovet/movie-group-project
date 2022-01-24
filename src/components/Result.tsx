import { useState } from "react";
import { Results } from "../model/MovieModel";
import { SingleMovie } from "./SingleMovie";

interface Prop {
  movie: Results;
}

function Result({ movie }: Prop) {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className="Result">
      <h2>{movie.title}</h2>
      <a href={`/${movie.id}`}>
        <img
          src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}
          alt="Cover art for movie"
        />
      </a>
      <p>
        Rating: <span className="rating-box">{movie.vote_average}</span>
      </p>
      <p>
        {checked ? (
          <label htmlFor="">
            In watch list
            <input
              type="checkbox"
              name="checkbox"
              id="watchList"
              onClick={(e) => setChecked(false)}
            />
          </label>
        ) : (
          <label htmlFor="">
            Add to watch list
            <input
              type="checkbox"
              name="checkbox"
              id="watchList"
              onClick={(e) => setChecked(true)}
            />
          </label>
        )}
      </p>
    </div>
  );
}
export default Result;
