import { FormEvent, useState } from "react";

interface Props {
  onSubmit: (rating: number, runTime: number, genre: string) => void;
}

function SearchForm({ onSubmit }: Props) {
  const [rating, setRating] = useState(0);
  const [runTime, setRunTime] = useState(0);
  const [genre, setGenre] = useState("");

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();

    onSubmit(rating, runTime, genre);
  }

  return (
    <div className="SearchForm">
      <form onSubmit={handleFormSubmit}>
        <div className="inputContainer">
          <label htmlFor="rating">Rating: </label>
          <input
            type="number"
            name="rating"
            id="rating"
            min={0}
            max={10}
            step={0.1}
            placeholder="0.0"
            onChange={(e) => setRating(parseFloat(e.target.value))}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="runTime">Run time:</label>
          <input
            type="number"
            name="runTime"
            id="runTime"
            onChange={(e) => setRunTime(parseInt(e.target.value))}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
export default SearchForm;
