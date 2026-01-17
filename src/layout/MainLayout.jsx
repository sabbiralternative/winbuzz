import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/UI/Navbar/Navbar";
import SocialLink from "../components/UI/SocialLink/SocialLink";
import LeftSidebar from "../components/UI/LeftSidebar/LeftSidebar";
import MobileFooter from "../components/UI/MobileFooter/MobileFooter";
import { useSelector } from "react-redux";
import DepositWithdrawBTN from "../components/UI/DepositWithdrawBTN/DepositWithdrawBTN";

const MainLayout = () => {
  const { token } = useSelector((state) => state.auth);
  return (
    <Fragment>
      <Navbar />
      {token && <DepositWithdrawBTN />}
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
