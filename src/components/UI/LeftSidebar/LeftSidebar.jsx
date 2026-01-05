import { useSelector } from "react-redux";
import { Settings } from "../../../api";
import useWhatsApp from "../../../hooks/whatsapp";

const LeftSidebar = () => {
  const { token } = useSelector((state) => state.auth);
  const { data: socialLink } = useWhatsApp();
  const handleDownload = (e) => {
    e.preventDefault();
    const fileUrl = Settings.apkLink;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "site.apk");
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  const navigateWhatsApp = () => {
    if (token && socialLink?.branchWhatsapplink) {
      window.open(socialLink?.branchWhatsapplink, "_blank");
    } else {
      window.open(socialLink?.whatsapplink, "_blank");
    }
  };
  return (
    <div className="col-0 col-sm-0 col-md-0 col-lg-2 box-shd-sec">
      <div className="left-side-bar-sec darkmenu-sidebar" id="show-m-toggle">
        <div className="app-lft-sidebar">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <img
              loading="lazy"
              src="/src/assets/img/close-icon-HndtBqSa.svg"
              alt=""
            />
          </button>
          <div className="offcanvass-logo-sec mobile-logo">
            <img
              loading="lazy"
              src="https://assets3.hurry2.com/site_logo/winbuzz3844.png"
              alt=""
            />
          </div>
          <div className="mobile-sidemenu-wrapper">
            <div className="depo-and-wdrl-sec">
              <ul>
                <li>
                  <a href="/multi-market" className="multi-mark-bg">
                    <div className="icon-sidemenu">
                      <img
                        loading="lazy"
                        src="/src/assets/img/free-chart-icon-DCmNn4g4.png"
                        alt=""
                      />
                    </div>
                    <span>Multi Market</span>
                  </a>
                </li>
                <li>
                  <a href="/sports/cricket/4" className="multi-mark-bg">
                    <div className="icon-sidemenu">
                      <img
                        loading="lazy"
                        src="/src/assets/img/sports-cricket-Qf1NmI1h.png"
                        alt="cricket"
                      />
                    </div>
                    <span>cricket</span>
                  </a>
                </li>
                <li>
                  <a href="/sports/Football/1" className="multi-mark-bg">
                    <div className="icon-sidemenu">
                      <img
                        loading="lazy"
                        src="/src/assets/img/sports-soccer-CaiOK3CT.png"
                        alt="Football"
                      />
                    </div>
                    <span>Football</span>
                  </a>
                </li>
                <li>
                  <a href="/sports/tennis/2" className="multi-mark-bg">
                    <div className="icon-sidemenu">
                      <img
                        loading="lazy"
                        src="/src/assets/img/sports-tennis-DzBamNaA.png"
                        alt="tennis"
                      />
                    </div>
                    <span>tennis</span>
                  </a>
                </li>
                <li>
                  <a className="multi-mark-bg">
                    <div className="icon-sidemenu">
                      <img
                        loading="lazy"
                        src="/src/assets/img/sidebar-sportsbook-CJaqUNak.svg"
                        alt=""
                      />
                    </div>
                    <span>Sports book</span>
                  </a>
                </li>
                <li>
                  <a href="/matka" className="multi-mark-bg">
                    <div className="icon-sidemenu">
                      <img
                        loading="lazy"
                        src="/src/assets/img/matka-icon-NBWZaN-H.png"
                        alt=""
                      />
                    </div>
                    <span>Matka</span>
                  </a>
                </li>
                <li>
                  <a href="/games/casino" className="multi-mark-bg">
                    <div className="icon-sidemenu">
                      <img
                        loading="lazy"
                        src="/src/assets/img/sidebar-intcasino-BYVw7v_R.svg"
                        alt=""
                      />
                    </div>
                    <span>Casino</span>
                  </a>
                </li>
                <li>
                  <a href="/games/evolution" className="multi-mark-bg">
                    <div className="icon-sidemenu">
                      <img
                        loading="lazy"
                        src="/src/assets/img/casino-icon-D7N09FcO.png"
                        alt=""
                      />
                    </div>
                    <span>Evolution</span>
                  </a>
                </li>

                <li>
                  <a href="/sports/Kabaddi /27454572" className="multi-mark-bg">
                    <div className="icon-sidemenu">
                      <img
                        loading="lazy"
                        src="/src/assets/img/sports-no-YhxjmpH9.png"
                        alt="Kabaddi "
                      />
                    </div>
                    <span>Kabaddi </span>
                  </a>
                </li>

                {Settings.apkLink && (
                  <li className="download_apk_side_btn_menu">
                    <a onClick={handleDownload} className="multi-mark-bg">
                      <div className="icon-sidemenu">
                        <img
                          loading="lazy"
                          src="/src/assets/img/project-apk-icon-DhSw9Ns5.png"
                          alt=""
                        />
                      </div>
                      <span>Download APK</span>
                    </a>
                  </li>
                )}
              </ul>
            </div>
            <div className="instant-id-bx">
              {(socialLink?.whatsapplink || socialLink?.branchWhatsapplink) && (
                <strong>Get Instant ID On Whatsapp</strong>
              )}

              <ul>
                {(socialLink?.whatsapplink ||
                  socialLink?.branchWhatsapplink) && (
                  <li>
                    <a onClick={navigateWhatsApp}>
                      <img
                        loading="lazy"
                        src="/src/assets/img/whatapp-icon-CGODlOk_.png"
                        alt="WhatsApp Icon"
                      />
                      <span>Whatsapp Now</span>
                    </a>
                  </li>
                )}

                {socialLink?.telegramLink && (
                  <li>
                    <a
                      onClick={() =>
                        window.open(socialLink?.telegramLink, "_blank")
                      }
                    >
                      <img
                        loading="lazy"
                        src="/src/assets/img/telegram-icon-NcUOJSTd.png"
                        alt="Telegram Icon"
                      />
                      <span>Follow On Telegram</span>
                    </a>
                  </li>
                )}

                {socialLink?.instagramLink && (
                  <li>
                    <a
                      onClick={() =>
                        window.open(socialLink?.instagramLink, "_blank")
                      }
                    >
                      <img
                        loading="lazy"
                        src="/src/assets/img/instagrame-BDxmYzsk.png"
                        alt="Instagram Icon"
                      />
                      <span>Follow On Instagram</span>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
