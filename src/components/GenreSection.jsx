import endpoints from "../utils/Endpoints";
import { MovieIdContext } from "../utils/MovieIdContext";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

function GenreSection({ moreMovies }) {
  const [singleMovieId, setSingleMovieId] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    setSingleMovieId(e.target.id);
    if (singleMovieId) {
      navigate(`/moviedetails/${singleMovieId}`);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-2 p-2 md:grid-cols-4 m-auto align-middle justify-center">
        {moreMovies.map((moreMovie) => (
          <img
            key={moreMovie.id}
            onClick={handleClick}
            id={moreMovie.id}
            src={endpoints.imgURL + moreMovie.poster_path}
            className="w-[100px] md:w-[200px] cursor-pointer  m-auto"
            alt=""
          />
        ))}
      </div>
    </>
  );
}

export default GenreSection;
