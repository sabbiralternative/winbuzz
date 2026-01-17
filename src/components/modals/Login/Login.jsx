import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Settings } from "../../../api";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import { setUser } from "../../../redux/features/auth/authSlice";
import {
  setShowBanner,
  setShowForgotPasswordModal,
  setShowLoginModal,
  setShowRegisterModal,
} from "../../../redux/features/global/globalSlice";
import toast from "react-hot-toast";
import { useLogo } from "../../../context/ApiProvider";
import useWhatsApp from "../../../hooks/whatsapp";
import images from "../../../assets/images";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

const Login = () => {
  const { data: socialLink } = useWhatsApp();
  const navigate = useNavigate();
  const [tab, setTab] = useState(Settings.registration ? "mobile" : "userId");
  const [showPassword, setShowPassword] = useState(false);
  const { logo } = useLogo();
  const dispatch = useDispatch();
  const [handleLogin] = useLoginMutation();
  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ username, password }) => {
    const loginData = {
      username: username,
      password: password,
      b2c: Settings.b2c,
    };
    const result = await handleLogin(loginData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      const memberId = result?.result?.memberId;
      const banner = result?.result?.banner;

      dispatch(setUser({ user, token, memberId }));
      localStorage.setItem("memberId", memberId);
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);
      localStorage.setItem("bonusToken", bonusToken);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (result?.result?.changePassword) {
        dispatch(setShowLoginModal(false));
        localStorage.setItem("changePassword", true);
        navigate("/change-password");
      }
      if (!result?.result?.changePassword && token && user) {
        dispatch(setShowLoginModal(false));
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  /* handle login demo user */
  const loginWithDemo = async () => {
    /* Random token generator */
    /* Encrypted the post data */
    const loginData = {
      username: "demo",
      password: "",
      b2c: Settings.b2c,
    };
    const result = await handleLogin(loginData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      const banner = result?.result?.banner;

      dispatch(setUser({ user, token }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);

      localStorage.setItem("bonusToken", bonusToken);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (token && user) {
        dispatch(setShowLoginModal(false));
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  const closeLoginModal = () => {
    dispatch(setShowLoginModal(false));
  };

  const showRegister = () => {
    closeLoginModal();
    dispatch(setShowRegisterModal(true));
  };

  const showForgotPassword = () => {
    closeLoginModal();
    dispatch(setShowForgotPasswordModal(true));
  };

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

  const getWhatsAppId = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div data-v-b55734cb className="login-model-pop-up-sec login-model-popup">
      <div
        data-v-b55734cb
        className="modal fade show"
        id="login-btn"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        data-bs-backdrop="static"
        aria-modal="true"
        role="dialog"
        style={{ display: "block", background: "none" }}
      >
        <div data-v-b55734cb className="modal-dialog modal-dialog-centered">
          <div data-v-b55734cb className="modal-content">
            <button
              onClick={closeLoginModal}
              data-v-b55734cb
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i data-v-b55734cb className="fa-solid fa-xmark" />
            </button>
            <div data-v-b55734cb className="modal-body">
              <ModalWrapper setModal={setShowLoginModal} redux={true}>
                <div
                  data-v-b55734cb
                  className="login-body-sec"
                  style={{
                    backgroundImage: "url(/src/assets/img/login-back-1.jpg)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div data-v-b55734cb className="login-body-lft">
                    <div data-v-b55734cb className="login-header">
                      <h2
                        data-v-b55734cb
                        className="modal-title"
                        id="exampleModalLabel"
                      >
                        <img
                          data-v-b55734cb
                          loading="lazy"
                          src={logo}
                          alt="logo"
                        />
                      </h2>
                    </div>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      data-v-b55734cb
                      className="login-form"
                    >
                      <div data-v-b55734cb className="input-field">
                        <div data-v-b55734cb className="profile-tab-list">
                          <ul
                            data-v-b55734cb
                            className="nav nav-pills mb-3"
                            id="pills-tab"
                            role="tablist"
                          >
                            <li
                              data-v-b55734cb
                              className="nav-item"
                              role="presentation"
                            >
                              <button
                                onClick={() => setTab("mobile")}
                                data-v-b55734cb
                                className={`nav-link  ${
                                  tab === "mobile" ? "active" : ""
                                }`}
                                data-bs-toggle="pill"
                                type="button"
                                role="tab"
                              >
                                Mobile Number
                              </button>
                            </li>
                            <li
                              data-v-b55734cb
                              className="nav-item"
                              role="presentation"
                            >
                              <button
                                onClick={() => setTab("userId")}
                                data-v-b55734cb
                                className={`nav-link  ${
                                  tab === "userId" ? "active" : ""
                                }`}
                                data-bs-toggle="pill"
                                type="button"
                                role="tab"
                              >
                                User ID
                              </button>
                            </li>
                          </ul>
                        </div>
                        {tab === "userId" ? (
                          <div data-v-b55734cb className="row g-2">
                            <div
                              data-v-b55734cb
                              className="col-12 col-sm-12 col-md-12"
                            >
                              <div data-v-b55734cb className="input-left">
                                <input
                                  {...register("username")}
                                  data-v-b55734cb
                                  type="text"
                                  className="form-control user_id_icon"
                                  placeholder="Enter User ID*"
                                />
                                <i
                                  data-v-b55734cb
                                  className="fa-solid fa-user"
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div data-v-b55734cb className="row g-2">
                            <div
                              data-v-b55734cb
                              className="col-12 col-sm-12 col-md-12"
                            >
                              <div
                                data-v-b55734cb
                                className="input-left phone-no-field"
                              >
                                <div
                                  data-v-b55734cb
                                  className="country-code-flag-top-wrapper"
                                >
                                  <div
                                    data-v-b55734cb
                                    className="country-code-flag-top-sec"
                                  >
                                    <img
                                      data-v-b55734cb
                                      src="https://flagcdn.com/in.svg"
                                    />
                                    <span data-v-b55734cb>+91</span>
                                    <i
                                      data-v-b55734cb
                                      className="fa-solid fa-caret-down"
                                    />
                                  </div>
                                </div>
                                <input
                                  {...register("username")}
                                  data-v-b55734cb
                                  type="tel"
                                  required
                                  maxLength={10}
                                  className="form-control"
                                  placeholder={`${
                                    tab === "mobile"
                                      ? "Enter Mobile Number"
                                      : "Enter User Id"
                                  }`}
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div data-v-b55734cb className="int-container-box">
                        <div data-v-b55734cb className="forgot-password-field">
                          <input
                            {...register("password", { required: true })}
                            data-v-b55734cb
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter Password*"
                            className="form-control"
                          />

                          <div data-v-b55734cb className="otp-login-btn"></div>

                          <div
                            onClick={() => setShowPassword((prev) => !prev)}
                            data-v-b55734cb
                            className="score-hide-show"
                          >
                            <img
                              data-v-b55734cb
                              loading="lazy"
                              className="score-hide-icon"
                              src={
                                showPassword ? images.eyeShow : images.eyeHide
                              }
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                      <div data-v-b55734cb className="check-box-sec">
                        <div data-v-b55734cb className="box-right">
                          <a
                            style={{
                              color: "white",
                              textDecoration: "underline",
                            }}
                            data-v-b55734cb
                            onClick={showForgotPassword}
                            data-bs-toggle="modal"
                          >
                            Forgot Password?
                          </a>
                        </div>
                      </div>
                      <div
                        data-v-b55734cb
                        className="login-cmn-btn login-demo-btn"
                      >
                        {Settings.demoLogin && (
                          <button
                            onClick={loginWithDemo}
                            data-v-b55734cb
                            type="button"
                          >
                            <span data-v-b55734cb>Login With Demo ID</span>
                          </button>
                        )}

                        <button data-v-b55734cb type="submit">
                          <span data-v-b55734cb>Log In</span>
                        </button>
                      </div>
                      {Settings.apkLink && (
                        <div
                          data-v-b55734cb
                          className="login-cmn-btn download-apk-btn"
                        >
                          <a
                            onClick={handleDownload}
                            data-v-b55734cb
                            className="apk-download-anchor"
                          >
                            <span data-v-b55734cb>
                              Download APK{" "}
                              <img
                                data-v-b55734cb
                                src="/src/assets/img/apk_icon-CKpATu5s.svg"
                              />
                            </span>
                          </a>
                        </div>
                      )}

                      <div data-v-b55734cb className="Continue-with">
                        {socialLink?.whatsapplink &&
                          Settings.registrationWhatsapp && (
                            <Fragment>
                              <div
                                data-v-b55734cb
                                className="login-flow-heading pb-0"
                              >
                                <p data-v-b55734cb>
                                  Get Your Ready-Made ID From WhatsApp
                                </p>
                              </div>
                              <div data-v-b55734cb className="button-whatsapp">
                                <a
                                  data-v-b55734cb
                                  onClick={() =>
                                    getWhatsAppId(socialLink?.whatsapplink)
                                  }
                                  className="btn-whatsapp"
                                >
                                  <i
                                    data-v-b55734cb
                                    className="fa-brands fa-whatsapp"
                                  />{" "}
                                  Whatsapp Now
                                </a>
                              </div>
                            </Fragment>
                          )}

                        <span data-v-b55734cb className="or-separate">
                          OR
                        </span>
                        <h3 data-v-b55734cb className="whats-with">
                          Login With
                        </h3>
                        <div data-v-b55734cb className="login-with-social">
                          <ul data-v-b55734cb className="cmn-ul-list">
                            <li data-v-b55734cb>
                              <a data-v-b55734cb>
                                <img
                                  data-v-b55734cb
                                  loading="lazy"
                                  src="/src/assets/img/telegram-a01fJV7_.png"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li data-v-b55734cb>
                              <a data-v-b55734cb>
                                <img
                                  data-v-b55734cb
                                  loading="lazy"
                                  src="/src/assets/img/instagram-CBwtwdWl.png"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li data-v-b55734cb>
                              <a data-v-b55734cb>
                                <img
                                  data-v-b55734cb
                                  loading="lazy"
                                  src="/src/assets/img/facebook-ZNZi6boh.png"
                                  alt=""
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div data-v-b55734cb className="acc-and-join-sec">
                        <span data-v-b55734cb>Don&apos;t Have An Account?</span>{" "}
                        <span data-v-b55734cb>
                          <a
                            onClick={showRegister}
                            data-v-b55734cb
                            data-bs-toggle="modal"
                          >
                            Join Now
                          </a>
                        </span>
                      </div>
                      <div data-v-b55734cb className="login-footer-logo">
                        <img
                          data-v-b55734cb
                          src="/src/assets/img/game-care-C32-PadK.svg"
                          className="footer-logo"
                        />
                        <img
                          data-v-b55734cb
                          src="/src/assets/img/restricted-regions-logo-BrkaTLIP.svg"
                          className="footer-logo"
                        />
                        <img
                          data-v-b55734cb
                          src="/src/assets/img/underage-logo-NqR90Ywe.svg"
                          className="footer-logo"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </ModalWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
