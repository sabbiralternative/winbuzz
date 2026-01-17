import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/UI/Navbar/Navbar";
import SocialLink from "../components/UI/SocialLink/SocialLink";
import LeftSidebar from "../components/UI/LeftSidebar/LeftSidebar";
import MobileFooter from "../components/UI/MobileFooter/MobileFooter";

const MainLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <section className="padding-top-105 main-body-container-sec">
        <div className="row cric-login-grid-sec">
          <LeftSidebar />
          <Outlet />
        </div>
      </section>
      <SocialLink />
      <MobileFooter />
    </Fragment>
  );
};

export default MainLayout;
