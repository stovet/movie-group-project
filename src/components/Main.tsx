import { useEffect, useState } from "react";
import { MovieResponse, Results } from "../model/MovieModel";
import { fetchRatingTMDB, fetchTMDB } from "../Service/tmdbService";
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";
import Header from "./Header";
import { WatchList } from "./WatchList";

const Main = () => {
  // set variable & state function for movie display
  const [movies, setMovies] = useState<Results[]>([]);
  // set variables & state function for form searches
  const [formSearch, setFormSearch] = useState("");

  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");
  const [genreId, setGenreId] = useState(0);

  function handleSubmit(page: number, title: string, genreId: number) {
    //   console.log(rating);
    setPage(page);
    setTitle(title);
    setGenreId(genreId);
  }

  useEffect(() => {
    if(page || genreId || title){
        fetchRatingTMDB(page, genreId, title).then((data) => setMovies(data));
    }
    // if (title){
    //     fetchTMDB(page, title, genre).then((data) => setMovies(data));
    // }
    // if(genre){
    //     fetchTMDB( genre).then((data) => setMovies(data));
    // }
    // fetchTMDB().then((data) => setMovies(data));

  }, [page, title, genreId]);

  return (
    <div>
      <h1>Movie API</h1>
      <SearchForm onSubmit={handleSubmit} />
      <ResultList movies={movies} />  
    </div>
  );
};
export default Main;
