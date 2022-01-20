import axios from "axios";
import { Results } from "../model/MovieModel";

export function fetchTMDB(): Promise<Results[]> {
  const api_key = process.env.REACT_APP_TMDB_KEY;
  return axios
    .get("https://api.themoviedb.org/3/discover/movie", {
      params: {
        api_key: api_key,
      },
    })
    .then((res) => res.data.results);
}
