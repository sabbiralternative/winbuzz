import { Link } from "react-router-dom";
import images from "../../../assets/images";

const MobileFooter = () => {
  return (
    <div data-v-238a5417 className="footer-fixed-nav">
      <div data-v-238a5417 className="bottom-tabs">
        <ul data-v-238a5417>
          <li data-v-238a5417>
            <Link data-v-238a5417 to="Javascript:void(0);">
              <img
                data-v-238a5417
                src={images.sportsBookFooterIcon}
                alt="foot icon"
                className="img-fluid"
              />
              <div data-v-238a5417 className="title-name">
                Sports Book
              </div>
            </Link>
          </li>
          <li data-v-238a5417>
            <Link
              data-v-238a5417
              aria-current="page"
              to="/"
              className="router-link-active router-link-exact-active"
            >
              <img
                data-v-238a5417
                src={images.inPlayFooterIcon}
                alt="in play"
                className="img-fluid"
              />
              <div data-v-238a5417 className="title-name">
                In play
              </div>
            </Link>
          </li>
          <li data-v-238a5417 className="truncate">
            <Link
              data-v-238a5417
              to="javascript:void(0)"
              className="blank-bg"
              aria-label="Empty link"
            >
              &nbsp;
            </Link>
          </li>
          <li data-v-238a5417 className="truncate">
            <Link
              data-v-238a5417
              to="javascript:void(0)"
              className="blank-bg"
              aria-label="Empty link"
            >
              &nbsp;
            </Link>
          </li>
          <li data-v-238a5417 className="big">
            <Link
              data-v-238a5417
              aria-current="page"
              to="/"
              className="router-link-active router-link-exact-active bowler"
            >
              <span data-v-238a5417>
                <img
                  data-v-238a5417
                  src={images.homeFooterIcon}
                  alt="Home Icon"
                />
              </span>
            </Link>
          </li>
          <li data-v-238a5417 className="truncate lpcasomp">
            <Link data-v-238a5417 to="/casino" className>
              <img
                data-v-238a5417
                src={images.casinoFooterIcon}
                alt="casino icon"
                className="img-fluid"
              />
              <div data-v-238a5417 className="title-name">
                Casino
              </div>
            </Link>
          </li>
          <li data-v-238a5417 className="truncate promotion lppromotion">
            <Link data-v-238a5417 to="/affiliate">
              <img
                data-v-238a5417
                src={images.affiliateFooterIcon}
                alt="mega phone icon"
                className="img-fluid"
              />
              <div data-v-238a5417 className="title-name">
                Affiliate
              </div>
            </Link>
          </li>
        </ul>
      </div>
      {/* <div
        data-v-238a5417
        className="header-marquee-sec footer-bootom-fixed-marquee"
      >
        <marquee data-v-238a5417>
          Event :- Central Hinds W v Auckland Hearts W : Market :- 10 Over CHW,
          20 Over CHW, 1st 3 Wkt CHW, 1st 4 Wkt CHW, , 3rd Wkt CHW Run Bhav, 8th
          Over Runs Only CHW, , 10 OVER TOTAL ODD CHW, 15 OVER TOTAL ODD CHW
          &amp; LAMBI TOTAL ODD CHW .... Penalty Run will not be Counted in
          these Markets , So we will Settle these Markets Result 5 Runs less
          than the&nbsp;Original&nbsp;Score
        </marquee>
        <button data-v-238a5417 className="close-marquee">
          <i data-v-238a5417 className="fa fa-close" />
        </button>
      </div> */}
      {/**/}
    </div>
  );
};

export default MobileFooter;
