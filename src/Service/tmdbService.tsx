import axios from "axios";
import { Results } from "../model/MovieModel";

export function fetchGenreTMDB(
  page: number,
  genre: number
): Promise<Results[]> {
  const api_key = process.env.REACT_API_TMDB_KEY || "";
  console.log(genre);
  return axios
    .get("https://api.themoviedb.org/3/discover/movie", {
      params: {
        api_key: "b80ce08c456bca9bb040f009efb1aaf9",
        page: page,
        with_genres: genre,
      },
    })
    .then((res) => res.data.results);
}

export function fetchTMDB(page: number): Promise<Results[]> {
  const api_key = process.env.REACT_API_TMDB_KEY || "";
  return axios
    .get("https://api.themoviedb.org/3/discover/movie", {
      params: {
        api_key: "b80ce08c456bca9bb040f009efb1aaf9",
        page: page,
      },
    })
    .then((res) => res.data.results);
}

// original_title.desc
