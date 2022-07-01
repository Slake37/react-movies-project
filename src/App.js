
import { Routes, Route } from "react-router-dom";
import Genre from "./pages/Genre";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";



function App() {
 

  return (
    <div className="m-auto flex flex-col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/genre/:clickedGenreId' element={<Genre/>} />
        <Route path='/moviedetails/:movieId' element={<MovieDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
