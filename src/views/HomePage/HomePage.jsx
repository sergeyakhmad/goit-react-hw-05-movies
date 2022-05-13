import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import { getTrendingMovies } from 'service/api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(setMovies)
      .catch(error => console.log(error));
  }, []);

  return <>{movies.length > 0 && <MoviesList movies={movies} />}</>;
};

export default HomePage;
