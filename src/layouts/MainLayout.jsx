import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <p>Navbar</p>
      <Outlet />
      <p>footer</p>
    </div>
  );
};

export default MainLayout;
