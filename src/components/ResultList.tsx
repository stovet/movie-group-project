import { Results } from "../model/MovieModel";
import Result from "./Result";

//ACCEPTED A PROP FROM MAIN.TSX
interface Prop {
  movies: Results[];
}

function ResultList({ movies }: Prop) {
  return (
    //MOVIES VARIABLE IS A LIST OF RESULTS SO WE CAN MAP THROUGH IT.
    <div className="ResultList">
      {movies.map((movie, i) => (
        <Result key={i} movie={movie} />
      ))}
    </div>
  );
}
export default ResultList;
