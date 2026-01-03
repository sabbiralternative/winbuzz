import { useDispatch, useSelector } from "react-redux";
import {
  setShowLoginModal,
  setShowRegisterModal,
} from "../../../redux/features/global/globalSlice";
import { Fragment } from "react";
import Login from "../../modals/Login/Login";
import Register from "../../modals/Register/Register";

const Navbar = () => {
  const { showLoginModal, showRegisterModal } = useSelector(
    (state) => state.global
  );
  const dispatch = useDispatch();

  const handleShowLogin = () => {
    dispatch(setShowLoginModal(true));
  };
  const handleShowRegister = () => {
    dispatch(setShowRegisterModal(true));
  };

  return (
    <Fragment>
      {showLoginModal && <Login />}
      {showRegisterModal && <Register />}
      <header>
        <div data-v-9dda4895 className="header-wapper">
          <div data-v-9dda4895 className="container-fluid">
            <div data-v-9dda4895 className="navbar-sec">
              <div data-v-9dda4895 className="nav-left">
                <ul data-v-9dda4895>
                  <li data-v-9dda4895 className="mobile-toggle">
                    <div data-v-9dda4895 className="mobile-toggle-btn-sec">
                      <div data-v-9dda4895 className="mobile-search-menu">
                        <button
                          data-v-9dda4895
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasExample"
                          aria-controls="offcanvasExample"
                          title="Toggle menu"
                          className="last_login_at"
                        >
                          <span
                            data-v-9dda4895
                            id="menu-toggle1"
                            className="menu-toggle"
                          >
                            <span
                              data-v-9dda4895
                              className="menu-toggle-bar menu-toggle-bar--top"
                            />
                            <span
                              data-v-9dda4895
                              className="menu-toggle-bar menu-toggle-bar--middle"
                            />
                            <span
                              data-v-9dda4895
                              className="menu-toggle-bar menu-toggle-bar--bottom"
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li data-v-9dda4895>
                    <a
                      data-v-9dda4895
                      aria-current="page"
                      href="/"
                      className="router-link-active router-link-exact-active desktop-logo"
                    >
                      <img
                        data-v-9dda4895
                        loading="lazy"
                        src="https://assets3.hurry2.com/site_logo/winbuzz3844.png"
                        alt="logo"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div data-v-9dda4895 className="nav-right header-nav-rgt">
                <ul data-v-9dda4895>
                  <li data-v-9dda4895 className="input-form">
                    <div data-v-9dda4895 action>
                      <input
                        data-v-9dda4895
                        type="text"
                        className="form-control"
                        maxLength={25}
                        placeholder="Search Events"
                        defaultValue
                      />
                      <span data-v-9dda4895 className="search-icon">
                        <i
                          data-v-9dda4895
                          className="fa-solid fa-magnifying-glass"
                        />
                      </span>
                    </div>
                  </li>

                  <li data-v-9dda4895>
                    <a
                      onClick={handleShowLogin}
                      data-v-9dda4895
                      data-bs-toggle="modal"
                      className="bdr-btn signup-login-btn login-btn"
                    >
                      Login
                    </a>
                  </li>
                  <li data-v-9dda4895>
                    <a
                      onClick={handleShowRegister}
                      data-v-9dda4895
                      data-bs-toggle="modal"
                      className="bdr-btn signup-login-btn signup-btn"
                    >
                      Register
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          data-v-9dda4895
          className="modal fade header-search-filter-cta"
          id="headersearch_filter"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div data-v-9dda4895 className="modal-dialog">
            <div data-v-9dda4895 className="modal-content">
              <div data-v-9dda4895 className="modal-header">
                <div data-v-9dda4895 className="input-form">
                  <button
                    data-v-9dda4895
                    data-bs-dismiss="modal"
                    type="button"
                    className="0 btn-close"
                    aria-label="Close"
                  >
                    <i data-v-9dda4895 className="fa fa-arrow-left" />
                  </button>
                  <input
                    data-v-9dda4895
                    type="text"
                    maxLength={25}
                    className="form-control"
                    placeholder="Search Events"
                    defaultValue
                  />
                  <span data-v-9dda4895 className="search-icon">
                    <i
                      data-v-9dda4895
                      className="fa-solid fa-magnifying-glass"
                    />
                  </span>
                </div>
              </div>
              <div data-v-9dda4895 className="modal-body"></div>
            </div>
          </div>
        </div>
        <div
          data-v-9dda4895
          className="modal fade display-name-edit worli-Bets-Modal"
          id="displayName_Modal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5>Display Name</h5>
              </div>
              <div className="modal-body">
                <div className="exch-form-sec">
                  <input
                    type="text"
                    maxLength={15}
                    className="form-control"
                    placeholder="Display Name"
                  />
                </div>

                <div className="header-but info-footer">
                  <button
                    type="button"
                    className="thm-but thm-bor-but"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <a disabled="true" className="thm-but save-notification">
                    Save
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-ipl-election">
          <div className="header-ipl-sec">
            <a href="/sports/FIFA CUP WINNER/4343" className>
              FIFA CUP WINNER
            </a>
          </div>
          <div className="header-election-sec">
            <a href="/sports/WINNER CUP/4344" className>
              WINNER CUP
            </a>
          </div>
          <div className="header-ipl-sec">
            <a href="/sports/ELECTION/4345" className>
              ELECTION
            </a>
          </div>
          <div className="header-election-sec">
            <a href="/sports/Kabaddi /27454572" className>
              Kabaddi{" "}
            </a>
          </div>
        </div>
        <section className="nav-new-bar-sec">
          <div className="nav-middle-menu">
            <ul>
              <li>
                <a
                  aria-current="page"
                  href="/"
                  className="router-link-active router-link-exact-active"
                >
                  <img
                    loading="lazy"
                    src="/src/assets/img/in-play-7WyfrqDR.png"
                    alt="In Play"
                    className="nav-icon"
                  />
                  <span>In-Play</span>
                </a>
              </li>
              <li>
                <a href="/sports/cricket/4" className>
                  <img
                    loading="lazy"
                    src="/src/assets/img/sports-cricket-Qf1NmI1h.png"
                    alt="Menu 1"
                    className="nav-icon"
                  />
                  <span>cricket</span>
                </a>
              </li>
              <li>
                <a href="/sports/Football/1" className>
                  <img
                    loading="lazy"
                    src="/src/assets/img/sports-soccer-CaiOK3CT.png"
                    alt="Menu 1"
                    className="nav-icon"
                  />
                  <span>Football</span>
                </a>
              </li>
              <li>
                <a href="/sports/tennis/2" className>
                  <img
                    loading="lazy"
                    src="/src/assets/img/sports-tennis-DzBamNaA.png"
                    alt="Menu 1"
                    className="nav-icon"
                  />
                  <span>tennis</span>
                </a>
              </li>
              <li className="hightlight-nav-menu">
                <a className>
                  <img
                    loading="lazy"
                    src="/src/assets/img/sportsbook-menu-Dl5BZyMg.png"
                    alt="Sports Book"
                    className="nav-icon"
                  />
                  <span>Sports book</span>
                </a>
              </li>
              <li>
                <a href="/matka" className>
                  <img
                    loading="lazy"
                    src="/src/assets/img/matka-icon-NBWZaN-H.png"
                    alt="Matka"
                    className="nav-icon"
                  />
                  <span>Matka</span>
                </a>
              </li>
              <li>
                <a href="/cricket-fight" className>
                  <img
                    loading="lazy"
                    src="/src/assets/img/cricket-icon-DA4L68fL.png"
                    alt="Cricket Fight"
                    className="nav-icon"
                  />
                  <span>Cricket Fight</span>
                </a>
              </li>
              <li className="hightlight-nav-menu">
                <a href="/games/casino" className>
                  <img
                    loading="lazy"
                    src="/src/assets/img/int-casino-DuAshlyx.png"
                    alt="Int Casino"
                    className="nav-icon"
                  />
                  <span>Casino</span>
                </a>
              </li>
              <li className="hightlight-nav-menu">
                <a href="/games/evolution" className>
                  <img
                    loading="lazy"
                    src="/src/assets/img/casino-icon-D7N09FcO.png"
                    alt="Casino"
                    className="nav-icon"
                  />
                  <span>Evolution</span>
                </a>
              </li>
              <li>
                <a href="/sports/Esports/27454571" className>
                  <img
                    loading="lazy"
                    src="/src/assets/img/sports-esports-CpaH_TFr.png"
                    alt="Menu 1"
                    className="nav-icon"
                  />
                  <span>Esports</span>
                </a>
              </li>
              <li>
                <a href="/sports/Mixed Martial Arts/26420387" className>
                  <img
                    loading="lazy"
                    src="/src/assets/img/sports-mixed-martial-arts-CSumTr0R.png"
                    alt="Menu 1"
                    className="nav-icon"
                  />
                  <span>Mixed Martial Arts</span>
                </a>
              </li>
              <li>
                <a href="/sports/Gaelic Games/2152880" className>
                  <img
                    loading="lazy"
                    src="/src/assets/img/sports-gaelic-football-Jft0M_Xo.png"
                    alt="Menu 1"
                    className="nav-icon"
                  />
                  <span>Gaelic Games</span>
                </a>
              </li>
              <li>
                <a href="/sports/Volleyball/998917" className>
                  <img
                    loading="lazy"
                    src="/src/assets/img/sports-volleyball-8l9IG9Fq.png"
                    alt="Menu 1"
                    className="nav-icon"
                  />
                  <span>Volleyball</span>
                </a>
              </li>
              <li>
                <a href="/sports/Handball/468328" className>
                  <img
                    loading="lazy"
                    src="/src/assets/img/sports-handball-BXRZ4Rh8.png"
                    alt="Menu 1"
                    className="nav-icon"
                  />
                  <span>Handball</span>
                </a>
              </li>
              <li>
                <a href="/sports/Australian Rules/61420" className>
                  <img
                    loading="lazy"
                    src="/src/assets/img/sports-australian-rules--7ROFjmy.png"
                    alt="Menu 1"
                    className="nav-icon"
                  />
                  <span>Australian Rules</span>
                </a>
              </li>
              <li>
                <a href="/sports/Ice Hockey/7524" className>
                  <img
                    loading="lazy"
                    src="/src/assets/img/sports-ice-hockey-B0_wQNsj.png"
                    alt="Menu 1"
                    className="nav-icon"
                  />
                  <span>Ice Hockey</span>
                </a>
              </li>
              <li>
                <a href="/sports/Basketball/7522" className>
                  <img
                    loading="lazy"
                    src="/src/assets/img/sports-basketball-jDOPvusD.png"
                    alt="Menu 1"
                    className="nav-icon"
                  />
                  <span>Basketball</span>
                </a>
              </li>
              <li>
                <a href="/sports/Baseball/7511" className>
                  <img
                    loading="lazy"
                    src="/src/assets/img/sports-baseball-C7aYV6u8.png"
                    alt="Menu 1"
                    className="nav-icon"
                  />
                  <span>Baseball</span>
                </a>
              </li>
              <li>
                <a href="/sports/American Football/6423" className>
                  <img
                    loading="lazy"
                    src="/src/assets/img/sports-american-football-D9RZuEeA.png"
                    alt="Menu 1"
                    className="nav-icon"
                  />
                  <span>American Football</span>
                </a>
              </li>
              <li>
                <a href="/sports/Snooker/6422" className>
                  <img
                    loading="lazy"
                    src="/src/assets/img/sports-snooker-C9CUGumV.png"
                    alt="Menu 1"
                    className="nav-icon"
                  />
                  <span>Snooker</span>
                </a>
              </li>
              <li>
                <a href="/sports/Table tennis/27454574" className>
                  <img
                    loading="lazy"
                    src="/src/assets/img/sports-no-YhxjmpH9.png"
                    alt="Menu 1"
                    className="nav-icon"
                  />
                  <span>Table tennis</span>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <div
          data-v-5588f4f2
          data-v-9dda4895
          className="modal fade worli-Bets-Modal"
          id="clickBetValue"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
        >
          <div data-v-5588f4f2 className="modal-dialog modal-dialog-centered">
            <div data-v-5588f4f2 className="modal-content">
              <div data-v-5588f4f2 className="modal-header">
                <div data-v-5588f4f2 className="thm-heading">
                  <div
                    data-v-5588f4f2
                    className="match-faq statement-match-faq"
                  >
                    <div data-v-5588f4f2 className="match-head">
                      <h5 data-v-5588f4f2>Click Bet Value</h5>
                    </div>
                  </div>
                </div>
                <button
                  data-v-5588f4f2
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i data-v-5588f4f2 className="fa fa-close" />
                </button>
              </div>
              <div data-v-5588f4f2 className="modal-body">
                <div data-v-5588f4f2 className="amount-value">
                  <div data-v-5588f4f2 className="amount-value-item">
                    <input
                      data-v-5588f4f2
                      className="active amount-input"
                      maxLength={4}
                      defaultValue={100}
                    />
                  </div>
                  <div data-v-5588f4f2 className="amount-value-item">
                    <input
                      data-v-5588f4f2
                      className="amount-input"
                      maxLength={4}
                      defaultValue={500}
                    />
                  </div>
                  <div data-v-5588f4f2 className="amount-value-item">
                    <input
                      data-v-5588f4f2
                      className="amount-input"
                      maxLength={4}
                      defaultValue={1000}
                    />
                  </div>
                  <div data-v-5588f4f2 className="amount-value-item">
                    <input
                      data-v-5588f4f2
                      className="amount-input"
                      maxLength={4}
                      defaultValue={2000}
                    />
                  </div>
                </div>
                <div data-v-5588f4f2 className="min-max-section">
                  <div data-v-5588f4f2 className="min-max-con">
                    Min : <span data-v-5588f4f2>100.00</span>
                  </div>
                  <div data-v-5588f4f2 className="min-max-icon">
                    <img
                      data-v-5588f4f2
                      rel="preload"
                      src="/src/assets/img/min-max-CkQVnuQ3.svg"
                      alt="min-max"
                    />
                  </div>
                  <div data-v-5588f4f2 className="min-max-con">
                    Max : <span data-v-5588f4f2>2,000.00</span>
                  </div>
                </div>
                <div
                  data-v-5588f4f2
                  className="header-but info-footer edit-stake-btn"
                >
                  <button
                    data-v-5588f4f2
                    type="button"
                    className="thm-but thm-bor-but"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <a data-v-5588f4f2 className="thm-but save-notification">
                    Save
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-v-9dda4895
          className="modal fade"
          id="informationModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content main-content">
              <div className="modal-header">
                <h4 className="modal-title">Bonus Information</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fa fa-close" />
                </button>
              </div>
              <div className="modal-body"></div>
            </div>
          </div>
        </div>
        <div data-v-9dda4895 className="exposure"></div>
      </header>
    </Fragment>
  );
};

export default Navbar;
