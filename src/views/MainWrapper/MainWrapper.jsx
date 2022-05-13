const { default: Navigation } = require('components/Navigation/Navigation');
const { Outlet } = require('react-router-dom');

const MainWrapper = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default MainWrapper;
