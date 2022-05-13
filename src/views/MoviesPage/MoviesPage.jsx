import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getSearchMovies } from 'service/api';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const search = new URLSearchParams(location.search);
  const query = search.get('query');

  useEffect(() => {
    query &&
      getSearchMovies(query)
        .then(setMovies)
        .catch(error => console.log(error));
  }, [query]);

  return (
    <>
      <SearchForm />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default MoviesPage;
