import { FormEvent, useState } from "react";
import { MovieCategory } from "../model/MovieCategory";

interface Props {
  onSubmit: (rating: number, title: string, genreId: number) => void;
}

function SearchForm({ onSubmit }: Props) {
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [genreId, setGenreId] = useState(0);

  const movieTypes: MovieCategory[] = [
    { id: 28, category: "action" },
    { id: 12, category: "adventure" },
    { id: 16, category: "animation" },
    { id: 35, category: "comedy" },
    { id: 80, category: "crime" },
    { id: 99, category: "documentary" },
    { id: 18, category: "drama" },
    { id: 10751, category: "family" },
    { id: 14, category: "fantasy" },
    { id: 27, category: "horror" },
    { id: 36, category: "history" },
    { id: 10402, category: "music" },
    { id: 9648, category: "mystery" },
    { id: 10749, category: "romance" },
    { id: 878, category: "science fiction" },
    { id: 10770, category: "tv movie" },
    { id: 53, category: "thriller" },
    { id: 10752, category: "war" },
    { id: 37, category: "western" },
  ];

  function setId(movieTypes: MovieCategory[]) {
    movieTypes.forEach((movie) => {
      if (movie.category === genre) {
        setGenreId(movie.id);
      }
    });
  }

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();

    setId(movieTypes);

    onSubmit(rating, title, genreId);

    if (genre === "") {
      setGenreId(28);
    }
  }

  return (
    <div className="SearchForm">
      <form onSubmit={handleFormSubmit} className="form">
        <div className="inputContainer">
          <label htmlFor="rating">Page: </label>
          <input
            type="number"
            name="rating"
            id="rating"
            min={1}
            onChange={(e) => setRating(parseFloat(e.target.value))}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => setTitle(e.target.value.toLowerCase())}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="genre">Genre:</label>
          <input className="genreInput"
            type="text"
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value.toLowerCase())}
          />
        </div>
        <button type="submit">Search</button>
      </form>
      {/* <button className="watchListBtn">
        <a id="watch-listbtn" href="/watch-list">
          Watch List
        </a>
      </button> */}
    </div>
  );
}
export default SearchForm;