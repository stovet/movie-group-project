import { useEffect, useState } from "react";
import { MovieResponse, Results } from "../model/MovieModel";
import { fetchTMDB } from "../Service/tmdbService";
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";
import Header from "./Header";
import { WatchList } from "./WatchList";

const Main = () => {
  // set variable & state function for movie display
  const [movies, setMovies] = useState<Results[]>([]);
  // set variables & state function for form searches
  const [formSearch, setFormSearch] = useState("");

  const [rating, setRating] = useState(0);
  const [runTime, setRunTime] = useState(0);
  const [genre, setGenre] = useState("");

  function handleSubmit(rating: number, runTime: number, genre: string) {
    setRating(rating);
    setRunTime(runTime);
    setGenre(genre);
  }

  useEffect(() => {
    fetchTMDB(rating).then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <Header />
      <SearchForm onSubmit={handleSubmit} />
      <ResultList movies={movies} />
    </div>
  );
};
export default Main;
