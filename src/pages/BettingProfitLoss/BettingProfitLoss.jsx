import { useAccountStatement } from "../../hooks/accountStatement";

const BettingProfitLoss = () => {
  const fromDate = new Date(new Date().setDate(new Date().getDate() - 7))
    .toISOString()
    .split("T")[0];
  /* current date */
  const toDate = new Date().toISOString().split("T")[0];
  const payload = {
    from: fromDate,
    to: toDate,
    type: "GR",
  };

  const { data } = useAccountStatement(payload);
  console.log(data);
  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-10 box-shd-gap">
      <div>
        <div data-v-b6eed746 className="right-side-bar-main-sec my-bets-sec">
          <div data-v-b6eed746 className="profile-head">
            <span data-v-b6eed746>Profit and Loss</span>
            <span data-v-b6eed746 className="profitLoss-title">
              Total P/L : IR{" "}
              <span data-v-b6eed746 style={{ color: "red" }}>
                -1851.5
              </span>
            </span>
          </div>
          <div
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
                    data-v-275a83f2
                    type="date"
                    min
                    max
                    className="form-control"
                  />
                </div>
              </div>
              <div data-v-275a83f2 className="col-6 col-sm-6 col-md-2 mb-2">
                <label data-v-275a83f2 className="label-upside">
                  To Date :
                </label>
                <div data-v-275a83f2 className="start-end-date-sec">
                  <input
                    data-v-275a83f2
                    type="date"
                    min
                    max
                    className="form-control"
                  />
                </div>
              </div>
              {/**/}
              {/**/}
              {/**/}
              <div data-v-275a83f2 className="col-6 col-sm-6 col-md-2 mb-2">
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
              </div>
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
                  {/**/}
                </div>
              </div>
            </div>
          </div>
          <div data-v-b6eed746 className="form-search-table">
            <div data-v-b6eed746 className="table-responsive">
              <table data-v-b6eed746 className="datatable table table-bordered">
                <thead data-v-b6eed746>
                  <tr data-v-b6eed746>
                    <th data-v-b6eed746>Event</th>
                    <th data-v-b6eed746>P &amp; L</th>
                  </tr>
                </thead>
                <tbody data-v-b6eed746>
                  <tr data-v-b6eed746>
                    <td data-v-b6eed746 className="text-nowrap">
                      <a
                        data-v-b6eed746
                        href="Javascript:void(0);"
                        className="text-dark"
                      >
                        soccer
                      </a>
                    </td>
                    <td
                      data-v-b6eed746
                      className="fontw600"
                      style={{ color: "red" }}
                    >
                      736.64
                    </td>
                  </tr>
                  <tr data-v-b6eed746>
                    <td data-v-b6eed746 className="text-nowrap">
                      <a
                        data-v-b6eed746
                        href="Javascript:void(0);"
                        className="text-dark"
                      >
                        tennis
                      </a>
                    </td>
                    <td
                      data-v-b6eed746
                      className="fontw600"
                      style={{ color: "red" }}
                    >
                      377.00
                    </td>
                  </tr>
                  <tr data-v-b6eed746>
                    <td data-v-b6eed746 className="text-nowrap">
                      <a
                        data-v-b6eed746
                        href="Javascript:void(0);"
                        className="text-dark"
                      >
                        cricket
                      </a>
                    </td>
                    <td
                      data-v-b6eed746
                      className="fontw600"
                      style={{ color: "red" }}
                    >
                      322.86
                    </td>
                  </tr>
                  <tr data-v-b6eed746>
                    <td data-v-b6eed746 className="text-nowrap">
                      <a
                        data-v-b6eed746
                        href="Javascript:void(0);"
                        className="text-dark"
                      />
                    </td>
                    <td
                      data-v-b6eed746
                      className="fontw600"
                      style={{ color: "green" }}
                    >
                      190.00
                    </td>
                  </tr>
                  <tr data-v-b6eed746>
                    <td data-v-b6eed746 className="text-nowrap">
                      <a
                        data-v-b6eed746
                        href="Javascript:void(0);"
                        className="text-dark"
                      >
                        Worli Matka
                      </a>
                    </td>
                    <td
                      data-v-b6eed746
                      className="fontw600"
                      style={{ color: "red" }}
                    >
                      605.00
                    </td>
                  </tr>
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
