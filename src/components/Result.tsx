import { useState } from "react";
import { Link } from "react-router-dom";
import { Results } from "../model/MovieModel";
import { SingleMovie } from "./SingleMovie";
import WatchList from "./WatchList";
import { WatchListDB } from "../model/WatchListDB";

interface Prop {
  movie: Results;
}

function Result({ movie }: Prop) {
  const [checked, setChecked] = useState<boolean>(false);
  const [watchListMovies, setWatchListMovies] = useState([
    {
      title: "test",
      vote_average: 10,
      overview: "test",
      poster_path: "test",
      original_language: "test",
      id: 10,
    },
  ]);

  function onWatchSubmit(newMovie: Results) {
    console.log("Logged The Click");
    WatchListDB.push(newMovie);
    setWatchListMovies((prev) => [...prev, newMovie]);
    // console.log(newMovie);
    // console.log(movie);
    // console.log(watchArray);
    console.log(WatchListDB);
    return WatchListDB;
  }

  if (checked) {
    onWatchSubmit(movie);
    setChecked(false);
  }

  return (
    <div className="Result">
      <h2>{movie.title}</h2>
      <Link to={`/${movie.id}`}>
        <img
          src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}
          alt="Cover art for movie"
        />
      </Link>
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
              onClick={() => setChecked(false)}
            />
          </label>
        ) : (
          <label htmlFor="">
            Add to watch list
            <input
              type="checkbox"
              name="checkbox"
              id="watchList"
              onClick={() => setChecked(true)}
            />
          </label>
        )}
      </p>
    </div>
  );
}
export default Result;
