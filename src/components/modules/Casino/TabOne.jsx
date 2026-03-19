import { useNavigate } from "react-router-dom";

const TabOne = ({ providersOption, provider }) => {
  const navigate = useNavigate();
  return (
    <ul
      data-v-15497d74
      className="nav nav-pills casino-provider-list"
      id="pills-tab"
      role="tablist"
    >
      <li data-v-15497d74 className="nav-item" role="presentation">
        <button
          onClick={() => {
            navigate(`/casino?provider=all&category=all`);
          }}
          data-v-15497d74
          className={`nav-link  ${provider === "all" ? "active" : "list-menu"}`}
          id="pills-all12-tab"
          role="tab"
        >
          <span data-v-15497d74>All</span>
        </button>
      </li>
      {providersOption?.map((item) => {
        return (
          <li
            key={item}
            data-v-15497d74
            className="nav-item"
            role="presentation"
          >
            <button
              onClick={() => {
                navigate(`/casino?provider=${item}&category=all`);
              }}
              data-v-15497d74
              className={`nav-link  ${
                provider === item ? "active" : "list-menu"
              }`}
              id="pills-all12-tab"
              role="tab"
            >
              <span data-v-15497d74>{item}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TabOne;
