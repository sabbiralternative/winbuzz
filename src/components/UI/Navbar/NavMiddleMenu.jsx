import { Link } from "react-router-dom";

const NavMiddleMenu = () => {
  return (
    <section className="nav-new-bar-sec">
      <div className="nav-middle-menu">
        <ul>
          <li>
            <Link
              aria-current="page"
              to="/"
              className="router-link-active router-link-exact-active"
            >
              <img
                loading="lazy"
                src="/src/assets/img/in-play-7WyfrqDR.png"
                alt="In Play"
                className="nav-icon"
              />
              <span>In-Play</span>
            </Link>
          </li>
          <li>
            <Link to="/sports/cricket/4" className>
              <img
                loading="lazy"
                src="/src/assets/img/sports-cricket-Qf1NmI1h.png"
                alt="Menu 1"
                className="nav-icon"
              />
              <span>cricket</span>
            </Link>
          </li>
          <li>
            <Link to="/sports/Football/1" className>
              <img
                loading="lazy"
                src="/src/assets/img/sports-soccer-CaiOK3CT.png"
                alt="Menu 1"
                className="nav-icon"
              />
              <span>Football</span>
            </Link>
          </li>
          <li>
            <Link to="/sports/tennis/2" className>
              <img
                loading="lazy"
                src="/src/assets/img/sports-tennis-DzBamNaA.png"
                alt="Menu 1"
                className="nav-icon"
              />
              <span>tennis</span>
            </Link>
          </li>
          <li className="hightlight-nav-menu">
            <Link className>
              <img
                loading="lazy"
                src="/src/assets/img/sportsbook-menu-Dl5BZyMg.png"
                alt="Sports Book"
                className="nav-icon"
              />
              <span>Sports book</span>
            </Link>
          </li>
          <li>
            <Link to="/matka" className>
              <img
                loading="lazy"
                src="/src/assets/img/matka-icon-NBWZaN-H.png"
                alt="Matka"
                className="nav-icon"
              />
              <span>Matka</span>
            </Link>
          </li>

          <li className="hightlight-nav-menu">
            <Link to="/games/casino" className>
              <img
                loading="lazy"
                src="/src/assets/img/int-casino-DuAshlyx.png"
                alt="Int Casino"
                className="nav-icon"
              />
              <span>Casino</span>
            </Link>
          </li>
          <li className="hightlight-nav-menu">
            <Link to="/games/evolution" className>
              <img
                loading="lazy"
                src="/src/assets/img/casino-icon-D7N09FcO.png"
                alt="Casino"
                className="nav-icon"
              />
              <span>Evolution</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NavMiddleMenu;
