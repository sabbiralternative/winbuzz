import { Fragment } from "react";
import useWhatsApp from "../../../hooks/whatsapp";
import { useSelector } from "react-redux";

const SocialLink = () => {
  const { token } = useSelector((state) => state.auth);
  const { data: socialLink } = useWhatsApp();

  const navigateWhatsApp = () => {
    if (token && socialLink?.branchWhatsapplink) {
      window.open(socialLink?.branchWhatsapplink, "_blank");
    } else {
      window.open(socialLink?.whatsapplink, "_blank");
    }
  };
  return (
    <Fragment>
      {(socialLink?.whatsapplink || socialLink?.branchWhatsapplink) && (
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
