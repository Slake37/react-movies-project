import { useContext } from "react";
import endpoints from "../utils/Endpoints";
import { MovieIdContext } from "../utils/MovieIdContext";
import { useNavigate } from "react-router-dom";

function CarouselItem({ popularMovie, value }) {
  const { movieId, setMovieId } = useContext(MovieIdContext);

  const navigate = useNavigate();

  const handleClick = (e) => {
    setMovieId(e.target.value);
    if (movieId) {
      navigate(`/moviedetails/${movieId}`);
    }
  };

  return (
    <div className="relative ">
      <div className="md:w-[768px] lg:w-[1024px] xl:w-[1440px] w-[425px] ">
        <img
          src={endpoints.imgURL + popularMovie.backdrop_path}
          alt="popularMovie.title"
          className="w-full h-[250px] md:h-[550px] object-cover "
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-[250px] md:h-[550px] bg-black/50"></div>
      <div className="absolute top-[30%] p-2 md:p-4">
        <p className="md:text-3xl md:text-bold text-xl">{popularMovie.title}</p>

        <button
          onClick={handleClick}
          value={value}
          className="bg-transparent border-2 px-4 py-1 rounded-md mt-3 md:mt-6 hover:bg-white hover:text-black transition"
        >
          About movie
        </button>
      </div>
    </div>
  );
}

export default CarouselItem;
