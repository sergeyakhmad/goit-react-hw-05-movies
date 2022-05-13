import CastList from 'components/CastList/CastList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieIdCredits } from 'service/api';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieIdCredits(movieId)
      .then(setCast)
      .catch(error => console.log(error));
  }, [movieId]);

  return <CastList cast={cast} />;
};

export default Cast;
