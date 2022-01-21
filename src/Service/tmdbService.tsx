import axios from "axios";
import { Results } from "../model/MovieModel";

export function fetchTMDB(rating: number): Promise<Results[]> {
  const api_key = process.env.REACT_APP_TMDB_KEY;
  return axios
    .get("https://api.themoviedb.org/3/discover/movie", {
      params: {
        api_key: "b80ce08c456bca9bb040f009efb1aaf9",
      },
    })
    .then((res) => res.data.results);
}
