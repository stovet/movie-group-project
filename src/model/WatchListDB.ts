import {Results} from "./MovieModel"

export const WatchListDB: Results[] = [
    {  title: "Test",
        vote_average: 10,
        overview: "Test",
        poster_path: "Test",
        original_language: "Test",
        id: 10
    }
]

export function addToWatchList(newMovie: Results) {
    WatchListDB.push(newMovie)
}