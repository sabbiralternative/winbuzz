import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";

const NewLaunch = ({ new_launch }) => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigateToIFrame = (casino) => {
    if (!token) return dispatch(setShowLoginModal(true));
    navigate(`/casino/${casino?.name?.replace(/ /g, "")}/${casino?.id}`);
  };
  return (
    <section data-v-56384811 className="exchange-game-conetent-sec-in-mobile">
      <div
        data-v-56384811
        className="inplay-popular-header inplay-header-color"
      >
        <div data-v-56384811 className="inplay-popular-header__logo">
          <span data-v-56384811 className="inplay-content__logo-icon">
            <img
              data-v-56384811
              src="/icon/play-cart-Sk8L_OAI.png"
              alt="play-cart-img"
            />
          </span>
          <span data-v-56384811 className="inplay-popular-header__logo-text">
            New Launch
          </span>
        </div>
      </div>
      <div
        data-v-56384811
        className="mobile-exch-grid-item grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2"
      >
        {new_launch?.map((casino) => {
          return (
            <div
              onClick={() => handleNavigateToIFrame(casino)}
              key={casino?.id}
              className="mobile-game-img-box"
              style={{ cursor: "pointer", width: "100%" }}
            >
              <a>
                <img loading="lazy" src={casino?.url_thumb} alt="game-img-1" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NewLaunch;
