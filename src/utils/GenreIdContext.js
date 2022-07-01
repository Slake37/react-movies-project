import { createContext, useState } from "react";

const GenreIdContext = createContext();

const GenreIdContextProvider = ({ children }) => {
  const [clickedGenreId, setClickedGenreId] = useState();
  const [clickedGenre, setClickedGenre] = useState('')

  return (
    <GenreIdContext.Provider value={{ clickedGenreId, setClickedGenreId,clickedGenre, setClickedGenre }}>
      {children}
    </GenreIdContext.Provider>
  );
};

export { GenreIdContext, GenreIdContextProvider };
