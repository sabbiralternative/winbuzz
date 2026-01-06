const TabOne = ({ categories, setSelectedCategory, selectedCategory }) => {
  return (
    <ul
      data-v-15497d74
      className="nav nav-pills casino-provider-list"
      id="pills-tab"
      role="tablist"
    >
      {categories?.map((category) => {
        return (
          <li
            key={category}
            data-v-15497d74
            className="nav-item"
            role="presentation"
          >
            <button
              onClick={() => setSelectedCategory(category)}
              data-v-15497d74
              className={`nav-link  ${
                selectedCategory === category ? "active" : "list-menu"
              }`}
              id="pills-all12-tab"
              role="tab"
            >
              <span data-v-15497d74>{category}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TabOne;
