import { Link, useLocation } from "react-router-dom";

const NavbarMiddleMenuMobile = () => {
  const { pathname } = useLocation();
  return (
    <div className="exchange-menu-wrapper d-md-none">
      <ul className="subnav">
        <li className={` ${pathname === "/" ? "active" : ""}`}>
          <Link to="/" className="subnav-link ">
            <img src="/icon/in-play.png" />
            In Play
          </Link>
        </li>
        <li className={` ${pathname === "/sports/cricket/4" ? "active" : ""}`}>
          <Link to="/sports/cricket/4" className="subnav-link">
            <img alt="" src="/icon/4.png" /> Cricket{" "}
          </Link>
        </li>
        <li className={` ${pathname === "/sports/cricket/1" ? "active" : ""}`}>
          <Link to="/sports/cricket/1" className="subnav-link">
            <img alt="" src="/icon/1.png" /> Football{" "}
          </Link>
        </li>
        <li className={` ${pathname === "/sports/cricket/2" ? "active" : ""}`}>
          <Link to="/sports/cricket/2" className="subnav-link">
            <img alt="" src="/icon/2.png" /> Tennis{" "}
          </Link>
        </li>
        <li>
          <Link to="/m/game-list/2378961" className="subnav-link">
            <img alt="" src="/icon/2378961.png" /> Politics{" "}
          </Link>
        </li>
        <li>
          <Link to="/casino" className="subnav-link hightlight-menus">
            <img alt="" src="/icon/99998.png" /> Casino{" "}
          </Link>
        </li>
        <li>
          <Link to="javascript:void(0)" className="subnav-link">
            <img alt="" src="/icon/99991.png" /> Sports book{" "}
          </Link>
        </li>
        <li>
          <Link to="/m/game-list/7" className="subnav-link">
            <img alt="" src="/icon/7.png" /> Horse Racing{" "}
          </Link>
        </li>
        <li>
          <Link to="/m/game-list/4339" className="subnav-link">
            <img alt="" src="/icon/4339.png" /> Greyhound Racing{" "}
          </Link>
        </li>
        <li>
          <Link to="/m/game-list/99990" className="subnav-link">
            <img alt="" src="/icon/99990.png" /> Binary{" "}
          </Link>
        </li>
        <li>
          <Link to="/m/game-list/99994" className="subnav-link">
            <img alt="" src="/icon/99994.png" /> Kabaddi{" "}
          </Link>
        </li>
        <li>
          <Link to="/m/game-list/7522" className="subnav-link">
            <img alt="" src="/icon/7522.png" /> Basketball{" "}
          </Link>
        </li>
        <li>
          <Link to="/m/game-list/7511" className="subnav-link">
            <img alt="" src="/icon/7511.png" /> Baseball{" "}
          </Link>
        </li>
        <li>
          <Link to="/m/game-list/20" className="subnav-link">
            <img alt="" src="/icon/20.png" /> Table Tennis{" "}
          </Link>
        </li>
        <li>
          <Link to="/m/game-list/998917" className="subnav-link">
            <img alt="" src="/icon/998917.png" /> Volleyball{" "}
          </Link>
        </li>
        <li>
          <Link to="/m/game-list/7524" className="subnav-link">
            <img alt="" src="/icon/7524.png" /> Ice Hockey{" "}
          </Link>
        </li>
        <li>
          <Link to="/m/game-list/5" className="subnav-link">
            <img alt="" src="/icon/5.png" /> Rugby{" "}
          </Link>
        </li>
        <li>
          <Link to="/m/game-list/26420387" className="subnav-link">
            <img alt="" src="/icon/26420387.png" /> Mixed Martial Arts{" "}
          </Link>
        </li>
        <li>
          <Link to="/m/game-list/3503" className="subnav-link">
            <img alt="" src="/icon/3503.png" /> Darts{" "}
          </Link>
        </li>
        <li>
          <Link to="/m/game-list/29" className="subnav-link">
            <img alt="" src="/icon/29.png" /> Futsal{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarMiddleMenuMobile;
