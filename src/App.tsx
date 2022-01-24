import React, { FormEvent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import {
  BrowserRouter as Router,
  Link,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import { WatchList } from "./components/WatchList";
import Result from "./components/Result";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/watch-list" element={<WatchList />} />
          <Route path="/:id" element={<Result />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
