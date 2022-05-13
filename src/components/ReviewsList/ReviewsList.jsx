import s from './ReviewsList.module.scss';

const ReviewsList = ({ reviews }) => {
  return (
    <>
      {reviews && reviews.length === 0 && (
        <p>We dot'n haveany reviews for this movie</p>
      )}
      <ul className={s.list}>
        {reviews &&
          reviews.length > 0 &&
          reviews.map(el => (
            <li key={el.id} className={s.item}>
              <h3>{el.author}</h3>
              <p>{el.content}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ReviewsList;
