import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./views/Home";
import MovieDetails from "./views/MovieDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/details/:id" element={<MovieDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
