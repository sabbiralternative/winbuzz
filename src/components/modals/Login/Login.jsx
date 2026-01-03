const Login = () => {
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
        style={{ display: "block" }}
      >
        <div data-v-b55734cb className="modal-dialog modal-dialog-centered">
          <div data-v-b55734cb className="modal-content">
            <button
              data-v-b55734cb
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i data-v-b55734cb className="fa-solid fa-xmark" />
            </button>
            <div data-v-b55734cb className="modal-body">
              <div data-v-b55734cb className="login-body-sec">
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
                        src="https://assets3.hurry2.com/site_logo/winbuzz3844.png"
                        alt="logo"
                      />
                    </h2>
                  </div>
                  <div data-v-b55734cb className="login-form">
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
                              data-v-b55734cb
                              className="nav-link active"
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
                              data-v-b55734cb
                              className="nav-link"
                              data-bs-toggle="pill"
                              type="button"
                              role="tab"
                            >
                              User ID
                            </button>
                          </li>
                        </ul>
                      </div>
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
                                />{" "}
                                <span data-v-b55734cb>+91</span>
                                <i
                                  data-v-b55734cb
                                  className="fa-solid fa-caret-down"
                                />
                              </div>
                              <ul
                                data-v-b55734cb
                                className="country-code-flag-sec"
                              >
                                {/**/}
                                <li data-v-b55734cb>
                                  <img
                                    data-v-b55734cb
                                    src="https://flagcdn.com/bd.svg"
                                  />{" "}
                                  <span data-v-b55734cb>+880</span>
                                </li>
                                <li data-v-b55734cb>
                                  <img
                                    data-v-b55734cb
                                    src="https://flagcdn.com/ae.svg"
                                  />{" "}
                                  <span data-v-b55734cb>+971</span>
                                </li>
                                <li data-v-b55734cb>
                                  <img
                                    data-v-b55734cb
                                    src="https://flagcdn.com/np.svg"
                                  />{" "}
                                  <span data-v-b55734cb>+977</span>
                                </li>
                                <li data-v-b55734cb>
                                  <img
                                    data-v-b55734cb
                                    src="https://flagcdn.com/pk.svg"
                                  />{" "}
                                  <span data-v-b55734cb>+92</span>
                                </li>
                              </ul>
                            </div>
                            <input
                              data-v-b55734cb
                              type="tel"
                              required
                              maxLength={10}
                              className="form-control"
                              placeholder="Enter Mobile Number*"
                            />
                            {/**/}
                            {/**/}
                          </div>
                          {/**/}
                        </div>
                      </div>
                    </div>
                    <div
                      data-v-b55734cb
                      className="d-flex login-method-section mt-2"
                    >
                      <div data-v-b55734cb className="login-option">
                        <input
                          data-v-b55734cb
                          className="form-check-input flexRadioDefault-sec"
                          type="radio"
                          name="login-method"
                          id="login-password"
                          defaultValue="password"
                        />
                        <label
                          data-v-b55734cb
                          htmlFor="login-password"
                          className="ps-1 text-white"
                        >
                          Password
                        </label>
                      </div>
                      <div data-v-b55734cb className="login-option ms-2">
                        <input
                          data-v-b55734cb
                          className="form-check-input flexRadioDefault-sec"
                          type="radio"
                          name="login-method"
                          id="login-otp"
                          defaultValue="otp"
                        />
                        <label
                          data-v-b55734cb
                          htmlFor="login-otp"
                          className="ps-1 text-white"
                        >
                          OTP
                        </label>
                      </div>
                    </div>
                    <div data-v-b55734cb className="int-container-box">
                      <div data-v-b55734cb className="forgot-password-field">
                        <input
                          data-v-b55734cb
                          type="password"
                          placeholder="Enter Password*"
                          className="form-control"
                        />
                        {/**/}
                        <div data-v-b55734cb className="otp-login-btn">
                          {/**/}
                        </div>
                        {/**/}
                        <div data-v-b55734cb className="score-hide-show">
                          <img
                            data-v-b55734cb
                            loading="lazy"
                            className="score-hide-icon"
                            src="/src/assets/img/score-visible-DHkjyyAR.svg"
                            alt="img"
                          />
                        </div>
                      </div>
                      {/**/}
                      {/**/}
                    </div>
                    <div data-v-b55734cb className="check-box-sec">
                      <div data-v-b55734cb className="box-right">
                        <a
                          data-v-b55734cb
                          href="#forget-password-btn"
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
                      <button data-v-b55734cb type="button">
                        <span data-v-b55734cb>Login With Demo ID</span>
                        {/**/}
                      </button>
                      <button data-v-b55734cb type="button">
                        <span data-v-b55734cb>Log In</span>
                        {/**/}
                      </button>
                    </div>
                    <div
                      data-v-b55734cb
                      className="login-cmn-btn download-apk-btn"
                    >
                      <a
                        data-v-b55734cb
                        className="apk-download-anchor"
                        href="https://assets3.hurry2.com/site_apk/2114winbuzz (3).apk"
                        download="2114winbuzz (3).apk"
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
                    <div data-v-b55734cb className="Continue-with">
                      <div data-v-b55734cb className="login-flow-heading pb-0">
                        <p data-v-b55734cb>
                          Get Your Ready-Made ID From WhatsApp
                        </p>
                      </div>
                      <div data-v-b55734cb className="button-whatsapp">
                        <a
                          data-v-b55734cb
                          href="//wa.me/+917576801624"
                          target="_blank"
                          className="btn-whatsapp"
                        >
                          <i
                            data-v-b55734cb
                            className="fa-brands fa-whatsapp"
                          />{" "}
                          Whatsapp Now
                        </a>
                      </div>
                      <span data-v-b55734cb className="or-separate">
                        OR
                      </span>
                      <h3 data-v-b55734cb className="whats-with">
                        Login With
                      </h3>
                      <div data-v-b55734cb className="login-with-social">
                        <ul data-v-b55734cb className="cmn-ul-list">
                          <li data-v-b55734cb>
                            <a
                              data-v-b55734cb
                              href="//fairplay24.agency/"
                              target="_blank"
                            >
                              <img
                                data-v-b55734cb
                                loading="lazy"
                                src="/src/assets/img/telegram-a01fJV7_.png"
                                alt=""
                              />
                            </a>
                          </li>
                          <li data-v-b55734cb>
                            <a
                              data-v-b55734cb
                              href="//fairplay24.game/"
                              target="_blank"
                            >
                              <img
                                data-v-b55734cb
                                loading="lazy"
                                src="/src/assets/img/instagram-CBwtwdWl.png"
                                alt=""
                              />
                            </a>
                          </li>
                          <li data-v-b55734cb>
                            <a
                              data-v-b55734cb
                              href="//fairplay24.game/"
                              target="_blank"
                            >
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
                          data-v-b55734cb
                          href="#register-btn"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
