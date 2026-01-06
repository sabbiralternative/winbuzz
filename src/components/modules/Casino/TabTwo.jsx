const TabTwo = ({
  categories,
  setSelectedSubCategory,
  selectedSubCategory,
}) => {
  return (
    <ul
      data-v-15497d74
      className="nav nav-pills sub-casino-provider-list"
      id="pills-tab"
      role="tablist"
    >
      <li
        onClick={() => setSelectedSubCategory("All")}
        data-v-15497d74
        className="nav-item"
        role="presentation"
      >
        <button
          data-v-15497d74
          className={`nav-link list-menu ${
            selectedSubCategory === "All" ? "active" : ""
          }`}
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
      {categories?.map((category) => {
        return (
          <li
            onClick={() => setSelectedSubCategory(category)}
            key={category}
            data-v-15497d74
            className="nav-item"
            role="presentation"
          >
            <button
              data-v-15497d74
              className={`nav-link list-menu ${
                selectedSubCategory === category ? "active" : ""
              }`}
              id="pills-all-int-tab"
            >
              <span data-v-15497d74>
                <img
                  data-v-15497d74
                  loading="lazy"
                  src={`/icon/${category
                    ?.split(" ")
                    .join("")
                    .toLowerCase()}.svg`}
                  alt=""
                  data-fallback-applied="true"
                />
              </span>{" "}
              {category}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TabTwo;
