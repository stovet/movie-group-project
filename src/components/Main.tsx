import { useEffect, useState } from "react";
import { MovieResponse, Results } from "../model/MovieModel";
import { fetchTMDB } from "../Service/tmdbService";
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";

const Main = () => {
  // set variable & state function for movie display
  const [movies, setMovies] = useState<Results[]>([]);
  // set variables & state function for form searches
  const [formSearch, setFormSearch] = useState("");

  useEffect(() => {
    fetchTMDB().then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <h1>Movie API</h1>
      <ResultList movies={movies} />
      {/* <SearchForm /> */}
    </div>
  );
};
export default Main;
