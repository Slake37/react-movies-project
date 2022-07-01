import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AiOutlineCloseCircle } from "react-icons/ai";
import endpoints from "../utils/Endpoints";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { MovieIdContext } from "../utils/MovieIdContext";

function Search({ toggle, handleClick, text }) {
  const [searchedMovie, setSearchedMovie] = useState([]);
  const { movieId, setMovieId } = useContext(MovieIdContext);
  const navigate = useNavigate();

  const handleSearchedMovie = (e) => {
    setMovieId(e.target.id);
    if (movieId) {
      navigate(`/moviedetails/${movieId}`);
    }
  };

  useEffect(() => {
    const fetchSearchedMovie = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${text}`
      );

      setSearchedMovie(response.data.results);
    };

    fetchSearchedMovie();
  }, [text]);

  return toggle ? (
    <div className="h-[200px] md:h-[300px] relative ">
      <AiOutlineCloseCircle
        className="text-white text-2xl cursor-pointer absolute top-1 right-4"
        onClick={handleClick}
      />
      <div className="flex overflow-scroll  m-auto  scrollbar-hide">
        {searchedMovie?.map((searchedFilm) => (
          <img
            key={searchedFilm.id}
            src={endpoints.imgURL + searchedFilm.poster_path}
            id={searchedFilm.id}
            className="w-[100px] mr-2 mt-10 cursor-pointer md:w-[150px]"
            onClick={handleSearchedMovie}
            alt=""
          />
        ))}
      </div>
    </div>
  ) : (
    <p></p>
  );
}

export default Search;
