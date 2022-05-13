import MainBackground from 'components/MainBackground/MainBackground';

const { default: Navigation } = require('components/Navigation/Navigation');
const { Outlet } = require('react-router-dom');

const MainWrapper = () => {
  return (
    <MainBackground>
      <Navigation />
      <Outlet />
    </MainBackground>
  );
};

export default MainWrapper;
