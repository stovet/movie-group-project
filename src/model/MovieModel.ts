export interface MovieResponse {
  results: Results[];
}

export interface Results {
  title: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  original_language: string;
}
