import moment from "moment";
import { useAccountStatementMutation } from "../../hooks/accountStatement";
import { useState } from "react";
import { from_date, to_date } from "../../utils/default-date";
import { useNavigate } from "react-router-dom";

const BettingProfitLoss = () => {
  const navigate = useNavigate();
  const [fromDate, setFromDate] = useState(from_date);
  const [toDate, setToDate] = useState(to_date);

  const { mutate, data } = useAccountStatementMutation();
  const totalPnl = data?.result?.reduce((acc, curr) => {
    return acc + curr.memberWin;
  }, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      from: moment(fromDate).format("YYYY-MM-DD"),
      to: moment(toDate).format("YYYY-MM-DD"),
      type: "GR",
    };

    mutate(payload);
  };

  const handleNavigateSinglePassbook = (item) => {
    if (item?.plDetails) {
      navigate(`/betting-profit-loss/${item?.marketId}`);
    }
  };
  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-10 box-shd-gap">
      <div>
        <div data-v-b6eed746 className="right-side-bar-main-sec my-bets-sec">
          <div data-v-b6eed746 className="profile-head">
            <span data-v-b6eed746>Profit and Loss</span>
            <span data-v-b6eed746 className="profitLoss-title">
              Total P/L : IR{" "}
              <span
                data-v-b6eed746
                style={{ color: totalPnl > 0 ? "green" : "red" }}
              >
                {totalPnl}
              </span>
            </span>
          </div>
          <form
            onSubmit={handleSubmit}
            data-v-275a83f2
            data-v-b6eed746
            className="form-search-sec win-ac-statement-sec"
          >
            <div data-v-275a83f2 className="row">
              <div data-v-275a83f2 className="col-6 col-sm-6 col-md-2 mb-2">
                <label data-v-275a83f2 className="label-upside">
                  From Date :
                </label>
                <div data-v-275a83f2 className="start-end-date-sec">
                  <input
                    onChange={(e) => setFromDate(e.target.value)}
                    data-v-275a83f2
                    type="date"
                    min
                    max
                    className="form-control"
                    value={fromDate}
                  />
                </div>
              </div>
              <div data-v-275a83f2 className="col-6 col-sm-6 col-md-2 mb-2">
                <label data-v-275a83f2 className="label-upside">
                  To Date :
                </label>
                <div data-v-275a83f2 className="start-end-date-sec">
                  <input
                    onChange={(e) => setToDate(e.target.value)}
                    data-v-275a83f2
                    type="date"
                    min
                    max
                    className="form-control"
                    value={toDate}
                  />
                </div>
              </div>

              {/* <div data-v-275a83f2 className="col-6 col-sm-6 col-md-2 mb-2">
                <label data-v-275a83f2 className="label-upside">
                  Search Bet
                </label>
                <div data-v-275a83f2 className="select-search-box">
                  <input
                    data-v-275a83f2
                    type="search"
                    id="open-bet-search"
                    placeholder="Search"
                    className="form-control"
                  />
                </div>
              </div> */}
              <div
                data-v-275a83f2
                className="col-6 col-sm-6 col-md-2 mb-2 align-self-end"
              >
                <div data-v-275a83f2 className="d-flex get-statement-sec">
                  <button
                    data-v-275a83f2
                    type="submit"
                    className="btn btn-gets text-bg-dark"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div data-v-b6eed746 className="form-search-table">
            <div data-v-b6eed746 className="table-responsive">
              <table data-v-b6eed746 className="datatable table table-bordered">
                <thead data-v-b6eed746>
                  <tr data-v-b6eed746>
                    <th data-v-b6eed746>Event Id</th>
                    <th data-v-b6eed746>Settled Time</th>
                    <th data-v-b6eed746>Event</th>
                    <th data-v-b6eed746>Member Win</th>
                  </tr>
                </thead>
                <tbody data-v-b6eed746>
                  {data?.result?.map((bet) => {
                    return (
                      <tr key={bet?.eventId} data-v-b6eed746>
                        <td data-v-b6eed746 className="text-nowrap">
                          {moment(bet?.settledTime).format("Do-MMM-YYYY")}
                        </td>
                        <td data-v-b6eed746 className="text-nowrap">
                          {moment(bet?.eventId).format("Do-MMM-YYYY")}
                        </td>
                        <td data-v-b6eed746 className="text-nowrap">
                          {bet?.plDetails ? (
                            <a
                              onClick={() => handleNavigateSinglePassbook(bet)}
                              data-v-b6eed746
                              href="Javascript:void(0);"
                              className="text-dark"
                            >
                              {bet?.narration}
                            </a>
                          ) : (
                            bet?.narration
                          )}
                        </td>
                        <td
                          data-v-b6eed746
                          className="fontw600"
                          style={{
                            color: bet?.memberWin > 0 ? "green" : "red",
                          }}
                        >
                          {bet?.memberWin}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BettingProfitLoss;
