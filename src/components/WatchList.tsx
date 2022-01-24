import React, {useState} from "react";
import { Results } from "../model/MovieModel";
import { fetchTMDB, fetchGenreTMDB } from "../Service/tmdbService";
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";
import Header from "./Header";
import { on } from "events";

interface Props {
  onWatchSubmit: (movie: Results) => void
}

let newMovie:any;

function WatchList() {
  const [watchListMovies, setWatchListMovies] = useState([{}]);
  const [title, setTitle] = useState("");
  const [vote_average, setVote_Average] = useState(0);
  const [overview, setOverview] = useState("");
  const [poster_path, setPoster_path] = useState("");
  const [original_language, setOriginal_Language] = useState("");   
  const [id, setId] = useState(0);   
  
  function watchListHandler ({onWatchSubmit}: Props) {
    
    setTitle(title);
    setVote_Average(vote_average);
    setOverview(overview);
    setPoster_path(poster_path);
    setOriginal_Language(original_language);
    setId(id);

    console.log("Logged Click");
    let newMovie = {
      title:title,
      vote_average: vote_average,
      overview: overview,
      poster_path: poster_path,
      original_language: original_language,
      id: id
    }

    onWatchSubmit(newMovie)

  }
  return (
    <div>
      <h1>Hello</h1>
      <h1>{newMovie.title}</h1>
      <p>{newMovie.vote_average}</p>
      <p>{newMovie.overview}</p>
      <p>{newMovie.poster_path}</p>
      {/* <button >
        <a href="/" id="watch-listbtn">
          Back
        </a>
      </button> */}
    </div>
  );
}

export default WatchList