import s from './CastList.module.scss';

const CastList = ({ cast }) => {
  return (
    <>
      {cast && cast.length === 0 && <p>We don't have any cast for movie</p>}
      <ul className={s.list}>
        {cast &&
          cast.length > 0 &&
          cast.map(el => (
            <li key={el.id} className={s.item}>
              <img
                src={
                  el.profile_path
                    ? `https://image.tmdb.org/t/p/w300${el.profile_path}`
                    : `https://cdn.pixabay.com/photo/2014/04/03/10/32/tv-310801_960_720.png`
                }
                alt={el.name}
                width="120"
              />
              <h3>{el.name}</h3>
              <p>({el.character})</p>
            </li>
          ))}
      </ul>
    </>
  );
};
export default CastList;
