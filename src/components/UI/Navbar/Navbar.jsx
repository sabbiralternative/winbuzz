// import LatestEvent from "./LatestEvent";
import NavMiddleMenuDesktop from "./NavMiddleMenuDesktop";
import TopNav from "./TopNav";
import Notification from "./Notification";
import { Settings } from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import {
  setShowAPKModal,
  setShowAppPopUp,
} from "../../../redux/features/global/globalSlice";
import AppPopup from "./AppPopUp";
import DownloadAPK from "../../modals/DownloadAPK/DownloadAPK";
import NavbarMiddleMenuMobile from "./NavbarMiddleMenuMobile";

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { showAppPopUp, windowWidth, showAPKModal } = useSelector(
    (state) => state?.global,
  );

  useEffect(() => {
    const closePopupForForever = localStorage.getItem("closePopupForForever");
    const apk_modal_shown = sessionStorage.getItem("apk_modal_shown");
    if (location?.state?.pathname === "/apk" || location.pathname === "/apk") {
      sessionStorage.setItem("apk_modal_shown", true);
      localStorage.setItem("closePopupForForever", true);
      localStorage.removeItem("installPromptExpiryTime");
    } else {
      if (!apk_modal_shown) {
        dispatch(setShowAPKModal(true));
      }
      if (!closePopupForForever) {
        const expiryTime = localStorage.getItem("installPromptExpiryTime");
        const currentTime = new Date().getTime();

        if ((!expiryTime || currentTime > expiryTime) && Settings?.apkLink) {
          localStorage.removeItem("installPromptExpiryTime");

          dispatch(setShowAppPopUp(true));
        }
      }
    }
  }, [
    dispatch,
    windowWidth,
    showAppPopUp,
    location?.state?.pathname,
    location.pathname,
  ]);
  return (
    <header>
      {Settings?.apkLink && showAPKModal && <DownloadAPK />}
      <Notification />
      {Settings?.apkLink && showAppPopUp && windowWidth < 1040 && <AppPopup />}
      <TopNav />
      {/* <LatestEvent /> */}
      <NavMiddleMenuDesktop />
      <NavbarMiddleMenuMobile />
    </header>
  );
};

export default Navbar;
