import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Settings } from "../../../api";

const SocialLink = () => {
  const { token } = useSelector((state) => state.auth);

  const navigateWhatsApp = () => {
    if (token && Settings?.branchWhatsapplink) {
      window.open(Settings?.branchWhatsapplink, "_blank");
    } else {
      window.open(Settings?.whatsapplink, "_blank");
    }
  };
  return (
    <Fragment>
      {(Settings?.whatsapplink || Settings?.branchWhatsapplink) && (
        <section data-v-238a5417 className="help-and-support-box">
          <div data-v-238a5417 className="support-sec">
            <a onClick={navigateWhatsApp} data-v-238a5417>
              <img
                data-v-238a5417
                loading="lazy"
                src="/src/assets/img/wp_support-C-DSr-Mj.png"
                alt="WhatsApp Support"
              />
            </a>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default SocialLink;
