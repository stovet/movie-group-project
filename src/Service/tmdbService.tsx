import axios from "axios";
import { Results } from "../model/MovieModel";

export function fetchTMDB( genre: number): Promise<Results[]> {
  const api_key = process.env.REACT_APP_TMDB_KEY || "";
  console.log(genre);
  return axios
    .get("https://api.themoviedb.org/3/discover/movie", {
      params: {
        api_key: "b80ce08c456bca9bb040f009efb1aaf9",
        //  page: page,
         //sort_by: title,
         with_genres: genre
      },
    })
    .then((res) => res.data.results);
}

export function fetchRatingTMDB(page: number, genreId: number, title: string): Promise<Results[]> {
  const api_key = process.env.REACT_APP_TMDB_KEY || "";
  console.log(genreId);
  return axios
    .get("https://api.themoviedb.org/3/discover/movie", {
      params: {
        api_key: api_key,
        //page: page,
        with_genres: genreId,
        //sort_by: title
      },
    })
    .then((res) => res.data.results);
}

// original_title.desc