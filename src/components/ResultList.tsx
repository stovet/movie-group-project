import { Results } from "../model/MovieModel";
import Result from "./Result";
import { WatchList } from "./WatchList";

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
