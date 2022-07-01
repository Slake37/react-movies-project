import { createContext, useState } from "react";

const MovieIdContext = createContext();

const MovieIdContextProvider = ({ children }) => {
  const [movieId, setMovieId] = useState("");

  return (
    <MovieIdContext.Provider value={{ movieId, setMovieId }}>
      {children}
    </MovieIdContext.Provider>
  );
};

export { MovieIdContext, MovieIdContextProvider };
