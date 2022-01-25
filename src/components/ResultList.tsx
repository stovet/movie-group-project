import { useState } from "react";
import { Route } from "react-router-dom";
import { Results } from "../model/MovieModel";
import Result from "./Result";

interface Prop {
  movies: Results[];
}

function ResultList({ movies }: Prop) {
  const [checked, setChecked] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(true);

  return (
    <div className="ResultList">
      {movies.map((movie, i) => (
        <Result key={i} movie={movie} />
      ))}
    </div>
  );
}
export default ResultList;
