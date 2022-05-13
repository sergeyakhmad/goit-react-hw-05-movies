import { useLocation, useNavigate } from 'react-router-dom';
import s from './ButtonGoBack.module.scss';

const ButtonGoBack = ({ title }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(location.state || '/');
  };

  return (
    <button type="button" className={s.btn} onClick={handleGoBack}>
      {title}
    </button>
  );
};

export default ButtonGoBack;
