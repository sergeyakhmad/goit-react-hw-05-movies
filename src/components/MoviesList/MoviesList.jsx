import { Link, useLocation } from 'react-router-dom';
import s from '../MoviesList/MoviesList.module.scss';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {movies.map(({ id, title, name, poster_path, overview }) => (
        <li key={id} className={s.item}>
          <Link to={`/movies/${id}`} state={location}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300${poster_path}`
                  : `https://cdn.pixabay.com/photo/2014/04/03/10/32/tv-310801_960_720.png`
              }
              alt={title}
              width="100px"
            />
            <h3 className={s.title}>{title ? title : name}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
