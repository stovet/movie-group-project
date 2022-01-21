import { Results } from "../model/MovieModel";
import Result from "./Result";

interface Prop {
  movies: Results[];
}

function ResultList({ movies }: Prop) {
  return (
    <div>
      {movies.map((movie, i) => (
        <Result key={i} movie={movie} />
      ))}
    </div>
  );
}
export default ResultList;
