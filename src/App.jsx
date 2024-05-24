import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./views/Home";
import MovieDetails from "./views/MovieDetails";
import Signup from "./views/Signup";
import Signin from "./views/Signin";

import Favorites from "./views/Favorites";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/details/:id" element={<MovieDetails />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        <Route path="/favorites" element={<Favorites />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
