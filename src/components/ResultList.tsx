import { useState } from "react";
import { Route } from "react-router-dom";
import { Results } from "../model/MovieModel";
import Result from "./Result";

interface Prop {
  movies: Results[];
}

function ResultList({ movies }: Prop) {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div>
      {movies.map((movie, i) => (
        <div key={i} className="Result">
          <h2>{movie.title}</h2>
          <a href={`/${i}`}>
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
      ))}
    </div>
  );
}
export default ResultList;
