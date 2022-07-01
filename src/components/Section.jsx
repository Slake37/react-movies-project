import SectionItem from "./SectionItem";
import { GenreIdContextProvider } from "../utils/GenreIdContext";
import { MovieIdContextProvider } from "../utils/MovieIdContext";

function Section() {
  return (
    <div>
      <GenreIdContextProvider>
        <MovieIdContextProvider>
          <SectionItem genreId={"28"} genre={"Action"} />
        <SectionItem genreId={"12"} genre={"Adventure"} />
        <SectionItem genreId={"16"} genre={"Animation"} />
        <SectionItem genreId={"35"} genre={"Comedy"} />
        <SectionItem genreId={"80"} genre={"Crime"} />
        <SectionItem genreId={"99"} genre={"Documentary"} />
        <SectionItem genreId={"18"} genre={"Drama"} />
        <SectionItem genreId={"10751"} genre={"Family"} />
        <SectionItem genreId={"14"} genre={"Fantasy"} />
        <SectionItem genreId={"36"} genre={"History"} />
        <SectionItem genreId={"27"} genre={"Horror"} />
        <SectionItem genreId={"10402"} genre={"Music"} />
        <SectionItem genreId={"9648"} genre={"Mystery"} />
        <SectionItem genreId={"10749"} genre={"Romance"} />
        <SectionItem genreId={"878"} genre={"Science Fiction"} />
        <SectionItem genreId={"10770"} genre={"TV Movie"} />
        <SectionItem genreId={"53"} genre={"Thriller"} />
        <SectionItem genreId={"10752"} genre={"War"} />
        <SectionItem genreId={"37"} genre={"Western"} />
        </MovieIdContextProvider>
        
      </GenreIdContextProvider>
    </div>
  );
}

export default Section;
