import React, { FormEvent } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Main from "./components/Main";
import {
  BrowserRouter as Router,
  Link,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import { WatchList } from "./components/WatchList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Routes>
          <Route path="/watch-list" element={<WatchList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
