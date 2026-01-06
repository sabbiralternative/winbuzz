import { useNavigate } from "react-router-dom";

const Thumbnails = ({ data }) => {
  const navigate = useNavigate();
  const handleNavigateToIFrame = (casino) => {
    navigate(`/casino/${casino?.name?.replace(/ /g, "")}/${casino?.id}`);
  };
  return (
    <div data-v-15497d74 className="tab-content" id="pills-tabContent">
      <div
        data-v-15497d74
        className="tab-pane fade show active"
        id="pills-all11"
        role="tabpanel"
      >
        <div data-v-15497d74 className="all-in-casino-img">
          {data?.map((casino) => {
            return (
              <div
                onClick={() => handleNavigateToIFrame(casino)}
                key={casino?.id}
                className="all-star-model-img"
                style={{ cursor: "pointer" }}
              >
                <a>
                  <img
                    loading="lazy"
                    src={casino?.url_thumb}
                    alt="game-img-1"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Thumbnails;
