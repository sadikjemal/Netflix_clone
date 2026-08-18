import "./App.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import MovieCard from "./Components/MovieCard/MovieCard";
import { movies } from "./Data/Data.js";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <MovieCard />
    </>
  );
}

export default App;
