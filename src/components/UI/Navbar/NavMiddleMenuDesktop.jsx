import { Link } from "react-router-dom";

const NavMiddleMenuDesktop = () => {
  return (
    <section className="nav-new-bar-sec hidden md:block">
      <div className="nav-middle-menu">
        <ul>
          <li>
            <Link
              aria-current="page"
              to="/in-play"
              className="router-link-active router-link-exact-active"
            >
              <img
                loading="lazy"
                src="/icon/in-play-7WyfrqDR.png"
                alt="In Play"
                className="nav-icon"
              />
              <span>In-Play</span>
            </Link>
          </li>
          <li>
            <Link to="/sports/cricket/4?type=inPlay" className>
              <img
                loading="lazy"
                src="/icon/sports-cricket-Qf1NmI1h.png"
                alt="Menu 1"
                className="nav-icon"
              />
              <span>cricket</span>
            </Link>
          </li>
          <li>
            <Link to="/sports/Football/1?type=inPlay" className>
              <img
                loading="lazy"
                src="/icon/sports-soccer-CaiOK3CT.png"
                alt="Menu 1"
                className="nav-icon"
              />
              <span>Football</span>
            </Link>
          </li>
          <li>
            <Link to="/sports/tennis/2?type=inPlay" className>
              <img
                loading="lazy"
                src="/icon/sports-tennis-DzBamNaA.png"
                alt="Menu 1"
                className="nav-icon"
              />
              <span>tennis</span>
            </Link>
          </li>
          <li>
            <Link to="/horse-racing" className>
              <img
                loading="lazy"
                src="/icon/sports-tennis-DzBamNaA.png"
                alt="Menu 1"
                className="nav-icon"
              />
              <span>Horse</span>
            </Link>
          </li>
          <li>
            <Link to="/greyhound-racing" className>
              <img
                loading="lazy"
                src="/icon/sports-tennis-DzBamNaA.png"
                alt="Menu 1"
                className="nav-icon"
              />
              <span>Greyhound</span>
            </Link>
          </li>

          <li

          // className="hightlight-nav-menu"
          >
            <Link to="/casino?provider=all&category=all" className>
              <img
                loading="lazy"
                src="/icon/int-casino-DuAshlyx.png"
                alt="Int Casino"
                className="nav-icon"
              />
              <span>Casino</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NavMiddleMenuDesktop;
