const RightSidebar = () => {
  return (
    <div data-v-4a1ad0c4 className="col-sm-0 col-md-0 col-lg-4">
      <div data-v-4a1ad0c4 className="placed-bet-sec">
        <div data-v-4a1ad0c4 className="placed-bet-head open-bet">
          <span data-v-4a1ad0c4>Live stream</span>
        </div>
        <div data-v-4a1ad0c4 className="live-match-sec">
          <iframe
            data-v-4a1ad0c4
            src="https://vid.dreamcasino.live/GetAPI.html?MatchID=35094251"
            scrolling="no"
            frameBorder={0}
            className="tv-iframe"
            style={{ height: "235px !important", width: "100%" }}
          />
        </div>
        <div data-v-4a1ad0c4 className="placed-bet-head">
          <span data-v-4a1ad0c4>Place-Bet</span>
        </div>
        <div data-v-4a1ad0c4 className="stake-bet-desk-sec">
          <div
            data-v-4a1ad0c4
            className="stake-placed-bet stake-light-pink-box"
            style={{ display: "none" }}
          >
            <div data-v-4a1ad0c4 className="bet-placing-head">
              <div data-v-4a1ad0c4 className="bet-placing-head-right">
                <small data-v-4a1ad0c4>MIN: </small>
                <small data-v-4a1ad0c4>MAX: </small>
              </div>
              <p data-v-4a1ad0c4 className="betslip-aval-bal">
                Aval Bal : &nbsp;
                <span data-v-4a1ad0c4 className="text-green">
                  3.53
                </span>
              </p>
            </div>
            <p data-v-4a1ad0c4 className="betslip-aval-bal">
              Aval Bal : &nbsp;
              <span data-v-4a1ad0c4 className="text-green">
                3.53
              </span>
            </p>
            <div data-v-4a1ad0c4 className="bets-odd-sec">
              <div data-v-4a1ad0c4 className="inpt-grp-lft">
                <label data-v-4a1ad0c4>odds</label>
                <div data-v-4a1ad0c4 className="increment-decrement-sec">
                  <div
                    data-v-4a1ad0c4
                    className="value-button decrease-btn d-none"
                    id="decrease"
                  >
                    {" "}
                    -
                  </div>
                  <div data-v-4a1ad0c4 className="select-digit">
                    <input
                      data-v-4a1ad0c4
                      type="number"
                      className="form-control input-disabled"
                      id="number"
                      disabled
                      readOnly
                    />
                  </div>
                  <div
                    data-v-4a1ad0c4
                    className="value-button increase-btn d-none"
                    id="increase"
                  >
                    +{" "}
                  </div>
                </div>
              </div>
              <div data-v-4a1ad0c4 className="inpt-grp-rgt">
                <label data-v-4a1ad0c4>stake</label>
                <input data-v-4a1ad0c4 type="number" className="form-control" />
              </div>
            </div>
            <div data-v-4a1ad0c4 className="value-btn-grid-box">
              <div data-v-4a1ad0c4 className="value-small-box">
                <button data-v-4a1ad0c4 type="button">
                  50
                </button>
              </div>
              <div data-v-4a1ad0c4 className="value-small-box">
                <button data-v-4a1ad0c4 type="button">
                  200
                </button>
              </div>
              <div data-v-4a1ad0c4 className="value-small-box">
                <button data-v-4a1ad0c4 type="button">
                  1000
                </button>
              </div>
              <div data-v-4a1ad0c4 className="value-small-box">
                <button data-v-4a1ad0c4 type="button">
                  5000
                </button>
              </div>
              <div data-v-4a1ad0c4 className="value-small-box">
                <button data-v-4a1ad0c4 type="button">
                  20000
                </button>
              </div>
              <div data-v-4a1ad0c4 className="value-small-box">
                <button data-v-4a1ad0c4 type="button">
                  100
                </button>
              </div>
              <div data-v-4a1ad0c4 className="value-small-box">
                <button data-v-4a1ad0c4 type="button">
                  50
                </button>
              </div>
              <div data-v-4a1ad0c4 className="value-small-box">
                <button data-v-4a1ad0c4 type="button">
                  50
                </button>
              </div>
            </div>
            <div data-v-4a1ad0c4 className="stake-limit-grid">
              <div data-v-4a1ad0c4 className="stake-small-box">
                <button data-v-4a1ad0c4 type="button" className="stake-1">
                  Min
                </button>
              </div>
              <div data-v-4a1ad0c4 className="stake-small-box">
                <button data-v-4a1ad0c4 type="button" className="stake-2">
                  Max
                </button>
              </div>
              <div data-v-4a1ad0c4 className="stake-small-box">
                <button data-v-4a1ad0c4 type="button" className="stake-3">
                  All In
                </button>
              </div>
              <div data-v-4a1ad0c4 className="stake-small-box">
                <button data-v-4a1ad0c4 type="button" className="stake-4">
                  Clear
                </button>
              </div>
            </div>
            <div data-v-4a1ad0c4 className="cancel-placed-btn">
              <div data-v-4a1ad0c4 className="cancel-btn">
                <button data-v-4a1ad0c4 type="button" className="close-btn-1">
                  Cancel
                </button>
              </div>
              <div data-v-4a1ad0c4 className="placed-btn">
                <button
                  data-v-4a1ad0c4
                  className="place-btn-outline place-btn-filled"
                  type="button"
                >
                  <span data-v-4a1ad0c4>Place Bet</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          data-v-4a1ad0c4
          className="placed-bet-head open-bet cursor-pointer"
        >
          <span data-v-4a1ad0c4>Open Bets</span>
        </div>
        <div data-v-4a1ad0c4 className="open-placed-body-sec">
          <div data-v-4a1ad0c4 className="select-bet-box">
            <select data-v-4a1ad0c4 name id className="form-control" />
          </div>
          <div data-v-4a1ad0c4 className="matched-unmatched-tabs-sec">
            <ul
              data-v-4a1ad0c4
              className="nav nav-pills"
              id="pills-tab"
              role="tablist"
            >
              <li data-v-4a1ad0c4 className="nav-item" role="presentation">
                <button
                  data-v-4a1ad0c4
                  className="nav-link active"
                  id="pills-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-matched"
                  type="button"
                  role="tab"
                  aria-controls="pills-matched"
                  aria-selected="true"
                >
                  Matched
                </button>
              </li>
              <li data-v-4a1ad0c4 className="nav-item" role="presentation">
                <button
                  data-v-4a1ad0c4
                  className="nav-link"
                  id="pills-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-unmatched"
                  type="button"
                  role="tab"
                  aria-controls="pills-unmatched"
                  aria-selected="false"
                >
                  Bookmakers
                </button>
              </li>
              <li data-v-4a1ad0c4 className="nav-item" role="presentation">
                <button
                  data-v-4a1ad0c4
                  className="nav-link"
                  id="pills-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-fancy"
                  type="button"
                  role="tab"
                  aria-controls="pills-fancy"
                  aria-selected="false"
                >
                  Fancy
                </button>
              </li>
            </ul>
            <div
              data-v-4a1ad0c4
              className="tab-content"
              id="pills-tabContent"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
