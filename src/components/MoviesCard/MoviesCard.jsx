import s from './MoviesCard.module.scss';

const MoviesCard = ({ movie }) => {
  return (
    <div className={s.card}>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : `https://cdn.pixabay.com/photo/2014/04/03/10/32/tv-310801_960_720.png`
        }
        alt={movie.original_title}
        width="300"
      />
      <div className={s.info}>
        <h1 className={s.title}>{movie.title}</h1>
        <p className={s.userScore}>{`User Score: ${
          movie.vote_average * 10
        }%`}</p>
        <h3 className={s.overview}>Overview</h3>
        <p className={s.overviewText}>{movie.overview}</p>
        <h3 className={s.genres}>Genres</h3>
        <p>
          {movie.genres.map((genre, idx) => (
            <span key={idx} className={s.item}>
              {genre.name}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default MoviesCard;
