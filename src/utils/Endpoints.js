const endpoints = {
  popularMovies: `
https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
  imgURL: "https://image.tmdb.org/t/p/original",
};

export default endpoints;
