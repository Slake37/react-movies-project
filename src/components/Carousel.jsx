import { useState, useEffect, useContext } from "react";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import endpoints from "../utils/Endpoints";
import CarouselItem from "./CarouselItem";

function Carousel() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const response = await axios.get(endpoints.popularMovies);

      setPopularMovies(response.data.results);
    };

    fetchPopularMovies();
  }, []);

  return (
    <div className="flex flex-row w-full text-white scrollbar-hide overflow-scroll">
      {popularMovies?.map((popularMovie) => (
        <CarouselItem
          value={popularMovie.id}
          key={popularMovie.id}
          popularMovie={popularMovie}
        />
      ))}
    </div>
  );
}

export default Carousel;
