import { useState } from "react";
import { moveEmitHelpers } from "typescript";
import { Results } from "../model/MovieModel";
import { WatchList } from "./WatchList";

interface Prop {
  movie: Results;
}

function Result({ movie }: Prop) {
  const [checked, setChecked] = useState<boolean>(false);
  let watchList: any = [];

  if (checked === true) {
    watchList.unshift(movie);
    console.log(watchList);
  }

  return (
    <div className="Result">
      <h2>{movie.title}</h2>
      <a href="/watch-list">
        <img
          src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}
          alt="Cover art for movie"
        />
      </a>
      <p>
        Rating:<span className="rating-box">{movie.vote_average}</span>
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
