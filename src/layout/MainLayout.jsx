import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/UI/Navbar/Navbar";
import SocialLink from "../components/UI/SocialLink/SocialLink";

const MainLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <SocialLink />
      {/* <div className="modal-backdrop fade show"></div> */}
    </Fragment>
  );
};

export default MainLayout;
