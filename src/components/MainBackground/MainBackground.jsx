import s from './MainBackground.module.scss';

const MainBackground = ({ children }) => {
  return (
    <>
      <div className={s.mainBackground}></div>
      {children}
    </>
  );
};

export default MainBackground;
