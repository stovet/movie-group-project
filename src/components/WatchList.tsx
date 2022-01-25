import React, {useState} from "react";
import { Results } from "../model/MovieModel";
import { fetchTMDB, fetchGenreTMDB } from "../Service/tmdbService";
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";
import Header from "./Header";
import {addToWatchList, WatchListDB} from "../model/WatchListDB"


interface Props {
  onWatchSubmit: (movie: Results) => void
}

let newMovie:any;

function WatchList() {
  const [watchList, setWatchList] = useState<Results[]>(WatchListDB);

  const [title, setTitle] = useState("");
  const [vote_average, setVote_Average] = useState(0);
  const [overview, setOverview] = useState("");
  const [poster_path, setPoster_path] = useState("");
  const [original_language, setOriginal_Language] = useState("");   
  const [id, setId] = useState(0);   
  
  function watchListHandler ({onWatchSubmit}: Props) {

    setWatchList(prevWatchList => {
      const newWatchList = prevWatchList.slice(0);
      newWatchList.push(newMovie);
      return newWatchList
    });


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

    addToWatchList(newMovie);
    onWatchSubmit(newMovie)

  }
  return (
    <div>

      {WatchListDB.map((movie, i) => 
        <div className="Result" key={i}>
          <h1>{movie.title}</h1>
          <a href={`/${movie.id}`}>
            <img src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} alt="Cover art for movie"/>
          </a>
          <p> Rating: <span className="rating-box">{movie.vote_average}</span> </p>
        </div> 
      )}

    </div>
  );
}

export default WatchList