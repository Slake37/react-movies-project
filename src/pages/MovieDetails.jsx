import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import endpoints from "../utils/Endpoints";
import axios from "axios";

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async (movieId) => {
      const response = await axios(
        ` https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      console.log(response.data);
      setMovieDetails(response.data);
    };
    fetchMovieDetails(movieId);
  }, [movieId]);

  useEffect(() => {
    const fetchMovieCast = async (movieId) => {
      const response = await axios(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );

      setMovieCast(response.data.cast);
    };
    fetchMovieCast(movieId);
  }, [movieId]);

  return (
    <div className="text-white w-full">
      <header className="w-full">
        <Link to="/">
          <button className=" absolute top-1 md:top-[5%] z-10 left-2 md:left-[10%] text-white mt-2 border-2 px-2 py-1 rounded-md text-sm md:text-xl hover:bg-white hover:text-black transition ">
            Back to Home
          </button>
        </Link>
        <img
          src={endpoints.imgURL + movieDetails.backdrop_path}
          className="w-full h-[200px] md:h-[350px] object-cover"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-[200px] md:h-[350px] bg-black/90"></div>
      </header>
      <section className="absolute top-[10%] m-1 md:m-10 flex align-middle justify-center">
        <img
          src={endpoints.imgURL + movieDetails.poster_path}
          className="w-[100px] md:w-[175px] mr-3"
          alt=""
        />
        <div className="self-center">
          <h1 className="font-bold text-lg self-center md:text-4xl">
            {movieDetails.original_title}
          </h1>
          <h2>Release date: {movieDetails.release_date}</h2>
        </div>
      </section>
      <section className="mt-5 md:m-10">
        <h2 className=" ml-2 md:m-10 text-xl md:text-4xl">Cast</h2>
        <div className="flex  overflow-scroll scrollbar-hide">
          {movieCast.map((actor) => (
            <div className=" p-1  flex flex-col align-top justify-start">
              <img
                key={actor.cast_id}
                src={endpoints.imgURL + actor.profile_path}
                className="min-w-[100px] md:w-[200px] self-center"
                alt=""
              />
              <p className="text-sm text-center self-center m-auto mt-1">
                {actor.name}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="m-5 md:m-10">
        {movieDetails.production_countries?.map((productionCountry) => (
          <p>{productionCountry.name}</p>
        ))}
      </section>
      <section className="m-5 md:m-10">
        <p>{movieDetails.overview}</p>
      </section>
    </div>
  );
}

export default MovieDetails;
