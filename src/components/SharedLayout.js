import Navbar from "./Navbar.js";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
