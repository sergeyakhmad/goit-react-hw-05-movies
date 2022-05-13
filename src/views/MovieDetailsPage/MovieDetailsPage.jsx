import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieId } from 'service/api';
import ButtonGoBack from 'components/ButtonGoBack/ButtonGoBack';
import MoviesCard from 'components/MoviesCard/MoviesCard';
import s from './MovieDetailsPage.module.scss';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieId(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ButtonGoBack title="Go back" />
      {movie && <MoviesCard movie={movie} />}
      <NavLink
        to={`/movies/${movieId}/cast`}
        state={location.state}
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Cast
      </NavLink>
      <NavLink
        to={`/movies/${movieId}/reviews`}
        state={location.state}
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Reviews
      </NavLink>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
