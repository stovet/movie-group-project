import { useState } from "react";
import { Results } from "../model/MovieModel";
import { WatchListDB } from "../model/WatchListDB";
import Modal from "react-modal";

//STYLES FOR MODAL.
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "50%",
    transform: "translate(50%, 0%)",
  },
};

interface Prop {
  movie: Results;
}

function Result({ movie }: Prop) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [watchListMovies, setWatchListMovies] = useState([
    {
      title: "test",
      vote_average: 10,
      overview: "test",
      poster_path: "test",
      original_language: "test",
      id: 10,
    },
  ]);

  //FUNCTIONS FOR WATCHLIST.
  function onWatchSubmit(newMovie: Results) {
    console.log("Logged The Click");
    WatchListDB.push(newMovie);
    setWatchListMovies((prev) => [...prev, newMovie]);
    console.log(WatchListDB);
    return WatchListDB;
  }

  if (checked) {
    onWatchSubmit(movie);
    setChecked(false);
  }

  //FUNCTIONS FOR OPENING AND CLOSING THE MODAL.
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="Result">
      <h2>{movie.title}</h2>
      <img
        onClick={openModal}
        src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}
        alt="Cover art for movie"
      />
      <p>
        Rating: <span className="rating-box">{movie.vote_average}</span>
      </p>
      <p>
        {checked ? (
          <label htmlFor="">
            In watch list
            <input
              type="checkbox"
              name="checkbox"
              id="watchList"
              onClick={() => setChecked(false)}
            />
          </label>
        ) : (
          <label htmlFor="">
            Add to watch list
            <input
              type="checkbox"
              name="checkbox"
              id="watchList"
              onClick={() => setChecked(true)}
            />
          </label>
        )}
      </p>
      <Modal
        className="Modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h1>{movie.title}</h1>
        <img src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} />
        <p>
          Rating: <span className="rating-box">{movie.vote_average}</span>
        </p>{" "}
        <p>
          {checked ? (
            <label htmlFor="">
              In watch list
              <input
                type="checkbox"
                name="checkbox"
                id="watchList"
                onClick={() => setChecked(false)}
              />
            </label>
          ) : (
            <label htmlFor="">
              Add to watch list
              <input
                type="checkbox"
                name="checkbox"
                id="watchList"
                onClick={() => setChecked(true)}
              />
            </label>
          )}
        </p>
        <p>Overview: {movie.overview}</p>
      </Modal>
    </div>
  );
}
export default Result;
