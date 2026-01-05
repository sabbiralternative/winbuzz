const EventHeader = ({ data }) => {
  return (
    <div data-v-4a1ad0c4 className="eventtitle-bx">
      <div data-v-4a1ad0c4 className="date-and-time">
        <div data-v-4a1ad0c4 className="inPlay-time">
          <span data-v-4a1ad0c4>( {data?.result?.[0]?.eventName})</span>
        </div>
        <div data-v-4a1ad0c4 className="score_card_tv_sec">
          <button
            data-v-4a1ad0c4
            type="button"
            className="btn tv-btn"
            href="#hide-showModal"
            data-bs-toggle="modal"
          >
            <img
              data-v-4a1ad0c4
              src="/src/assets/img/filter-icon-M4ePfMWm.webp"
              alt="filter-icon"
              loading="lazy"
            />
          </button>
          <button
            data-v-4a1ad0c4
            type="button"
            className="btn tv-btn score-tv-btn"
          >
            <img
              data-v-4a1ad0c4
              src="/src/assets/img/scorecard-icon-CE5reiCq.webp"
              alt=""
              className="score_show_icon score-img"
            />
          </button>
          <button data-v-4a1ad0c4 className="btn tv-btn">
            <img
              data-v-4a1ad0c4
              loading="lazy"
              src="/src/assets/img/tv-icon-DwiwMj4X.svg"
              alt=""
              className="tv-icon"
            />
          </button>
          <a
            data-v-4a1ad0c4
            className="bets-btn"
            href="#bets-matched-modal"
            data-bs-toggle="modal"
          >
            <span data-v-4a1ad0c4>BETS</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventHeader;
