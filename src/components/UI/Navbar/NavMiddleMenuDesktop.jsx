import { Link } from "react-router-dom";
import { latestEvent } from "../../../static/latest-event";
import { useLanguage } from "../../../context/LanguageProvider";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";

const NavMiddleMenuDesktop = () => {
  const { valueByLanguage } = useLanguage();
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
          {latestEvent
            ?.filter((item) => item?.show)
            ?.map((item) => {
              return (
                <li key={item?.eventName}>
                  <Link to={item?.pathname} className>
                    <img
                      loading="lazy"
                      src="/icon/sports-cricket-Qf1NmI1h.png"
                      alt="Menu 1"
                      className="nav-icon"
                    />
                    <span> {item?.eventName}</span>
                  </Link>
                </li>
              );
            })}

          <li>
            <Link to="/sports/Football/1?type=inPlay" className>
              <img
                loading="lazy"
                src="/icon/sports-soccer-CaiOK3CT.png"
                alt="Menu 1"
                className="nav-icon"
              />
              <span>
                {" "}
                {languageValue(valueByLanguage, LanguageKey.FOOTBALL)}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/sports/kabaddi/5?type=inPlay" className>
              <img
                loading="lazy"
                src="/icon/sports-soccer-CaiOK3CT.png"
                alt="Menu 1"
                className="nav-icon"
              />
              <span>
                {" "}
                {languageValue(valueByLanguage, LanguageKey.KABADDI)}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/sports/politics/6?type=inPlay" className>
              <img
                loading="lazy"
                src="/icon/sports-soccer-CaiOK3CT.png"
                alt="Menu 1"
                className="nav-icon"
              />
              <span>Politics</span>
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
              <span> {languageValue(valueByLanguage, LanguageKey.TENNIS)}</span>
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
              <span> {languageValue(valueByLanguage, LanguageKey.HORSE)}</span>
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
              <span>
                {" "}
                {languageValue(valueByLanguage, LanguageKey.GREYHOUND)}
              </span>
            </Link>
          </li>

          <li

          // className="hightlight-nav-menu"
          >
            <Link to="/casino?product=All&category=All" className>
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
