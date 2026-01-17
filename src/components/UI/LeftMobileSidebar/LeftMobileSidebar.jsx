import { useDispatch, useSelector } from "react-redux";
import { useLogo } from "../../../context/ApiProvider";
import { setShowMobileSidebar } from "../../../redux/features/global/globalSlice";
import ModalWrapper from "../../modals/ModalWrapper/ModalWrapper";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";

const LeftMobileSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showMobileSidebar } = useSelector((state) => state.global);
  const { logo } = useLogo();

  const closeSidebar = () => {
    dispatch(setShowMobileSidebar(false));
  };

  const handleNavigate = (link) => {
    navigate(link);
    closeSidebar();
  };

  return (
    <div className={`${showMobileSidebar ? "mobile-sidebar-container" : ""}`}>
      <div
        className="sbar_collapsed"
        style={{
          transform: showMobileSidebar ? "translateX(0)" : "translateX(-100%)",
          transition: "0.5s",
          zIndex: 9999999,
        }}
      >
        <ModalWrapper setModal={setShowMobileSidebar} redux={true}>
          <div className="sidebar-menu desktop-none">
            <div className="sidebar-logo">
              <a href="/m/%5B'/m/dashboard'%5D">
                <img alt="logo" src={logo} />
              </a>
              <div onClick={closeSidebar} className="nav-btn closebtn">
                X
              </div>
            </div>
            <div className="main-menu">
              <div className="menu-inner">
                <nav>
                  <ul id="menu" className="metismenu">
                    <li>
                      <a href="/m/multi-market">
                        <img
                          src="/src/assets/img/free-chart-icon.png"
                          alt=""
                          className="menu-icon"
                        />
                        <span>Multi Market</span>
                      </a>
                    </li>

                    <li>
                      <a
                        className="active"
                        onClick={() => handleNavigate("/sports/cricket/4")}
                      >
                        <img
                          alt=""
                          className="menu-icon"
                          src="/src/assets/img/4.svg"
                        />
                        <span>Cricket</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="active"
                        onClick={() => handleNavigate("/sports/cricket/1")}
                      >
                        <img
                          alt=""
                          className="menu-icon"
                          src="/src/assets/img/1.svg"
                        />
                        <span>Football</span>
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => handleNavigate("/sports/cricket/2")}
                        className="active"
                      >
                        <img
                          alt=""
                          className="menu-icon"
                          src="/src/assets/img/2.svg"
                        />
                        <span>Tennis</span>
                      </a>
                    </li>
                    <li>
                      <a href="/m/game-list/2378961">
                        <img
                          alt=""
                          className="menu-icon"
                          src="/src/assets/img/2378961.svg"
                        />
                        <span>Politics</span>
                      </a>
                    </li>
                    <li>
                      <a href="/m/game-list/99998" className="active">
                        <img
                          alt=""
                          className="menu-icon"
                          src="/src/assets/img/99998.svg"
                        />
                        <span>Int Casino</span>
                      </a>
                    </li>
                    <li>
                      <a href="/m/sports-book">
                        <img
                          alt=""
                          className="menu-icon"
                          src="/src/assets/img/99991.svg"
                        />
                        <span>Sports book</span>
                      </a>
                    </li>
                    <li>
                      <a href="/m/game-list/7">
                        <img
                          alt=""
                          className="menu-icon"
                          src="/src/assets/img/7.svg"
                        />
                        <span>Horse Racing</span>
                      </a>
                    </li>
                    <li>
                      <a href="/m/game-list/4339">
                        <img
                          alt=""
                          className="menu-icon"
                          src="/src/assets/img/4339.svg"
                        />
                        <span>Greyhound Racing</span>
                      </a>
                    </li>
                    <li>
                      <a href="/m/game-list/99990">
                        <img
                          alt=""
                          className="menu-icon"
                          src="/src/assets/img/99990.svg"
                        />
                        <span>Binary</span>
                      </a>
                    </li>
                    <li>
                      <a href="/m/game-list/99994">
                        <img
                          alt=""
                          className="menu-icon"
                          src="/src/assets/img/99994.svg"
                        />
                        <span>Kabaddi</span>
                      </a>
                    </li>
                    <li>
                      <a href="/m/game-list/7522">
                        <img
                          alt=""
                          className="menu-icon"
                          src="/src/assets/img/7522.svg"
                        />
                        <span>Basketball</span>
                      </a>
                    </li>
                    <li>
                      <a href="/m/game-list/7511">
                        <img
                          alt=""
                          className="menu-icon"
                          src="/src/assets/img/7511.svg"
                        />
                        <span>Baseball</span>
                      </a>
                    </li>
                    <li>
                      <a href="/m/game-list/20">
                        <img
                          alt=""
                          className="menu-icon"
                          src="/src/assets/img/20.svg"
                        />
                        <span>Table Tennis</span>
                      </a>
                    </li>
                    <li>
                      <a href="/m/game-list/998917">
                        <img
                          alt=""
                          className="menu-icon"
                          src="/src/assets/img/998917.svg"
                        />
                        <span>Volleyball</span>
                      </a>
                    </li>
                    <li>
                      <a href="/m/game-list/7524">
                        <img
                          alt=""
                          className="menu-icon"
                          src="/src/assets/img/7524.svg"
                        />
                        <span>Ice Hockey</span>
                      </a>
                    </li>
                    <li>
                      <a href="/m/game-list/5">
                        <img
                          alt=""
                          className="menu-icon"
                          src="/src/assets/img/5.svg"
                        />
                        <span>Rugby</span>
                      </a>
                    </li>
                    <li>
                      <a href="/m/game-list/26420387">
                        <img
                          alt=""
                          className="menu-icon"
                          src="/src/assets/img/26420387.svg"
                        />
                        <span>Mixed Martial Arts</span>
                      </a>
                    </li>
                    <li>
                      <a href="/m/game-list/3503">
                        <img
                          alt=""
                          className="menu-icon"
                          src="/src/assets/img/3503.svg"
                        />
                        <span>Darts</span>
                      </a>
                    </li>
                    <li>
                      <a href="/m/game-list/29">
                        <img
                          alt=""
                          className="menu-icon"
                          src="/src/assets/img/29.svg"
                        />
                        <span>Futsal</span>
                      </a>
                    </li>

                    <li>
                      <a href="javascript:void(0)">
                        <img
                          src="/src/assets/img/rules.svg"
                          className="menu-icon"
                        />
                        <span>Rules</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </ModalWrapper>
      </div>
    </div>
  );
};

export default LeftMobileSidebar;
