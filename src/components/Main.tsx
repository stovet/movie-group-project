import { useEffect, useState } from "react";
import { Results } from "../model/MovieModel";
import { fetchTMDB, fetchGenreTMDB, fetchTitleTMDB } from "../Service/tmdbService";
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";
import Header from "./Header";

const Main = () => {
  // set variable & state function for movie display
  const [movies, setMovies] = useState<Results[]>([]);
  // set variables & state function for form searches
  const [formSearch, setFormSearch] = useState("");

  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");
  const [genreId, setGenreId] = useState(28);

  function handleSubmit(page: number, title: string, genreId: number) {
    //   console.log(rating);
    setPage(page);
    setTitle(title);
    setGenreId(genreId);
  }

  useEffect(() => {
    if(title.length > 1) {
        fetchTitleTMDB(title).then((data) => setMovies(data))
        //fetchTMDB(page).then((data) => setMovies(data));
      }
     else if (page) {
      fetchTMDB(page).then((data) => setMovies(data));
      fetchGenreTMDB(page, genreId).then((data) => setMovies(data));
    }
  }, [page, genreId, title]);

  return (
    <div>
      <Header />
      <SearchForm onSubmit={handleSubmit} />
      <ResultList movies={movies} />
    </div>
  );
};
export default Main;
