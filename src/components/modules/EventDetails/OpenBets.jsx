import { Fragment } from "react";

const OpenBets = () => {
  return (
    <Fragment>
      <div data-v-4a1ad0c4 className="placed-bet-head open-bet cursor-pointer">
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
    </Fragment>
  );
};

export default OpenBets;
