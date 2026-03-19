import { useNavigate } from "react-router-dom";

const TabTwo = ({ categoriesOption, category, provider }) => {
  const navigate = useNavigate();
  return (
    <ul
      data-v-15497d74
      className="nav nav-pills sub-casino-provider-list"
      id="pills-tab"
      role="tablist"
    >
      <li
        onClick={() => {
          navigate(`/casino?provider=${provider}&category=all`);
        }}
        data-v-15497d74
        className="nav-item"
        role="presentation"
      >
        <button
          data-v-15497d74
          className={`nav-link list-menu ${category === "all" ? "active" : ""}`}
          id="pills-all-int-tab"
        >
          <span data-v-15497d74>
            <img
              data-v-15497d74
              loading="lazy"
              src="https://tezcdn.io/casino/int-casino-icon/all.webp"
              alt=""
              data-fallback-applied="true"
            />
          </span>{" "}
          <span> All</span>
        </button>
      </li>
      {categoriesOption?.map((item) => {
        return (
          <li
            onClick={() => {
              navigate(`/casino?provider=${provider}&category=${item}`);
            }}
            key={item}
            data-v-15497d74
            className="nav-item"
            role="presentation"
          >
            <button
              data-v-15497d74
              className={`nav-link list-menu ${category === item ? "active" : ""}`}
              id="pills-all-int-tab"
            >
              <span data-v-15497d74>
                <img
                  data-v-15497d74
                  loading="lazy"
                  src={`/icon/${item?.split(" ").join("").toLowerCase()}.svg`}
                  alt=""
                  data-fallback-applied="true"
                />
              </span>{" "}
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TabTwo;
