function fetchJsonData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}

export function getMovies() {
  return fetchJsonData(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`,
  );
}

export function getTrendingMovies() {
  return fetchJsonData(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`,
  );
}

export function getTopRatedMovies() {
  return fetchJsonData(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`,
  );
}

export function getMovieCredits(args) {
  const id = args.queryKey[1].id;
  return fetchJsonData(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`,
  );
}

export function getMovie(args) {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetchJsonData(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`,
  );
}

export function getGenres() {
  return fetchJsonData(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
      process.env.REACT_APP_TMDB_KEY +
      "&language=en-US",
  );
}

export function getMovieImages({ queryKey }) {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetchJsonData(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`,
  );
}

export function getMovieReviews({ queryKey }) {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetchJsonData(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`,
  );
}

export function getUpcomingMovies() {
  return fetchJsonData(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`,
  );
}
