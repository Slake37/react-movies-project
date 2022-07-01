import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import GenreSection from "../components/GenreSection";
import Pagination from "../components/Pagination";

function Genre() {
  let { clickedGenreId } = useParams();

  const [moreMovies, setMoreMovies] = useState([]);
  let [page, setPage] = useState(1);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${clickedGenreId}&with_watch_monetization_types=flatrate`
      );
      console.log(response.data.results);
      setMoreMovies(response.data.results);
    };
    fetchMovies();
  }, [clickedGenreId, page]);

  const prevPage = () => {
    setPage(--page);
  };

  const nextPage = () => {
    setPage(++page);
  };

  return (
    <div className="text-white">
      <header>
        <img
          className="w-full max-h-[150px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c732cb00-be61-4d64-b8c3-99f022e7a123/a069e6bf-fc49-487a-933a-a6f89d4d13b2/GB-en-20220620-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-[150px] bg-black/50"></div>
        <Link to="/">
          <button className=" absolute top-[10%] left-5 md:left-[10%] text-white mt-2 border-2 px-2 py-1 rounded-md text-sm md:text-xl hover:bg-white hover:text-black transition ">
            Back to Home
          </button>
        </Link>
      </header>

      <Pagination page={page} prevPage={prevPage} nextPage={nextPage} />
      <GenreSection moreMovies={moreMovies} />
      <Pagination page={page} prevPage={prevPage} nextPage={nextPage} />
    </div>
  );
}

export default Genre;
