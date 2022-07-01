import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import endpoints from "../utils/Endpoints";
import { GenreIdContext } from "../utils/GenreIdContext";
import { MovieIdContext } from "../utils/MovieIdContext";
import { useNavigate } from "react-router-dom";

function SectionItem({ genreId, genre }) {
  const { clickedGenreId, setClickedGenreId, clickedGenre, setClickedGenre } =
    useContext(GenreIdContext);
  const [movieId, setMovieId] = useState("");
  const [moviesByGenre, setMoviesByGenre] = useState([]);
  const navigate = useNavigate();

  const getGenreId = (e) => {
    setClickedGenreId(e.target.value);
    setClickedGenre(e.target.id);
    console.log(clickedGenreId);
    console.log(clickedGenre);
    if (clickedGenreId) {
      navigate(`/genre/${clickedGenreId}`);
    }
  };

  const handleClick = (e) => {
    setMovieId(e.target.id);
    if (movieId) {
      navigate(`/moviedetails/${movieId}`);
    }
  };

  useEffect(() => {
    const fetchMoviesByGenre = async (genreId) => {
      const response = await axios(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genreId}`
      );

      setMoviesByGenre(response.data.results);
    };
    fetchMoviesByGenre(genreId);
  }, [genreId]);

  return (
    <div className="px-2 mb-3">
      <h3 className="text-white md:text-2xl mb-2">{genre}</h3>
      <div className="flex overflow-scroll scrollbar-hide h-auto">
        {moviesByGenre.map((movieByGenre) => (
          <img
            onClick={handleClick}
            src={endpoints.imgURL + movieByGenre.poster_path}
            className="w-[75px] md:w-[125px] mr-2 cursor-pointer hover:scale-110 object-cover transition"
            alt="movieByGenre.title"
            key={movieByGenre.id}
            id={movieByGenre.id}
          />
        ))}
      </div>
      <button
        onClick={getGenreId}
        value={genreId}
        id={genre}
        className="text-white mt-2 border-2 px-2 py-1 rounded-md text-sm md:text-xl hover:bg-white hover:text-black transition "
      >
        More {genre} movies
      </button>
    </div>
  );
}

export default SectionItem;
