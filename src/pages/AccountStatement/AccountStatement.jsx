const AccountStatement = () => {
  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-10 box-shd-gap">
      <div>
        <div data-v-82dac09c className="right-side-bar-main-sec my-bets-sec">
          <div
            data-v-275a83f2
            data-v-82dac09c
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
              <div data-v-275a83f2 className="col-6 col-sm-6 col-md-2">
                <label data-v-275a83f2 className="label-upside">
                  Select Type :
                </label>
                <div data-v-275a83f2 className="select-search-box">
                  <span data-v-275a83f2 className="select-down-arrow">
                    <i data-v-275a83f2 className="fa-solid fa-angle-down" />
                  </span>
                  <select
                    data-v-275a83f2
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option data-v-275a83f2 value="all">
                      All
                    </option>
                    <option data-v-275a83f2 value="dw">
                      Deposit/Withdrawal
                    </option>
                    <option data-v-275a83f2 value="sport">
                      Sports
                    </option>
                  </select>
                </div>
              </div>
              <div data-v-275a83f2 className="col-6 col-sm-6 col-md-2">
                <label data-v-275a83f2 className="label-upside">
                  Select Subtype :
                </label>
                <div data-v-275a83f2 className="select-search-box">
                  <span data-v-275a83f2 className="select-down-arrow">
                    <i data-v-275a83f2 className="fa-solid fa-angle-down" />
                  </span>
                  <select
                    data-v-275a83f2
                    disabled
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option data-v-275a83f2 selected>
                      All
                    </option>
                  </select>
                </div>
              </div>
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
                  <div data-v-275a83f2 className="dropdown file_downland">
                    <button
                      data-v-275a83f2
                      type="submit"
                      className="btn btn-gets downlode_btn dropdown-toggle text-bg-dark"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        data-v-275a83f2
                        src="/assets/download-btn-aILIEDZm.svg"
                        alt="file"
                      />
                    </button>
                    <ul data-v-275a83f2 className="dropdown-menu">
                      <li data-v-275a83f2>
                        <a data-v-275a83f2 className="dropdown-item downl_file">
                          Download as Excel
                        </a>
                      </li>
                      <li data-v-275a83f2>
                        <a data-v-275a83f2 className="dropdown-item downl_file">
                          Download as PDF
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-v-82dac09c
            className="form-search-table nw-statement-table-wrapper"
          >
            <div data-v-82dac09c className="table-responsive">
              <table data-v-82dac09c className="datatable table table-bordered">
                <thead data-v-82dac09c>
                  <tr data-v-82dac09c>
                    <th data-v-82dac09c>Profit &amp; Loss</th>
                    <th data-v-82dac09c>DESCRIPTION</th>
                    <th data-v-82dac09c>BALANCE</th>
                  </tr>
                </thead>
                <tbody data-v-82dac09c>
                  <tr data-v-82dac09c>
                    <td data-v-82dac09c style={{ color: "red" }}>
                      25
                    </td>
                    <td data-v-82dac09c>
                      <a data-v-82dac09c className="acc-description">
                        Worli Matka &gt; SRIDEVI &gt; open &gt; Result 349
                      </a>
                    </td>
                    <td data-v-82dac09c className="kellygreen">
                      1371.70
                    </td>
                  </tr>
                  <tr
                    data-v-82dac09c
                    className="open-bet-footer settled-tabel-footer"
                  >
                    <td data-v-82dac09c>
                      <div data-v-82dac09c className="open-bet-footerbg" />
                      <p data-v-82dac09c className="bet-sub-con">
                        06/01/2026 11:46:02
                      </p>
                    </td>
                    <td data-v-82dac09c colSpan={2}>
                      <p data-v-82dac09c className="bet-sub-con">
                        <span data-v-82dac09c> Remarks :</span>{" "}
                        <span data-v-82dac09c>-</span>
                      </p>
                    </td>
                  </tr>
                  <tr data-v-82dac09c>
                    <td data-v-82dac09c style={{ color: "red" }}>
                      10
                    </td>
                    <td data-v-82dac09c>
                      <a data-v-82dac09c className="acc-description">
                        Worli Matka &gt; KARNATAKA DAY &gt; close &gt; Result
                        119
                      </a>
                    </td>
                    <td data-v-82dac09c className="kellygreen">
                      1396.70
                    </td>
                  </tr>
                  <tr
                    data-v-82dac09c
                    className="open-bet-footer settled-tabel-footer"
                  >
                    <td data-v-82dac09c>
                      <div data-v-82dac09c className="open-bet-footerbg" />
                      <p data-v-82dac09c className="bet-sub-con">
                        06/01/2026 11:45:03
                      </p>
                    </td>
                    <td data-v-82dac09c colSpan={2}>
                      <p data-v-82dac09c className="bet-sub-con">
                        <span data-v-82dac09c> Remarks :</span>{" "}
                        <span data-v-82dac09c>-</span>
                      </p>
                    </td>
                  </tr>
                  <tr data-v-82dac09c>
                    <td data-v-82dac09c style={{ color: "red" }}>
                      35
                    </td>
                    <td data-v-82dac09c>
                      <a data-v-82dac09c className="acc-description">
                        Worli Matka &gt; KARNATAKA DAY &gt; open &gt; Result 222
                      </a>
                    </td>
                    <td data-v-82dac09c className="kellygreen">
                      1406.70
                    </td>
                  </tr>
                  <tr
                    data-v-82dac09c
                    className="open-bet-footer settled-tabel-footer"
                  >
                    <td data-v-82dac09c>
                      <div data-v-82dac09c className="open-bet-footerbg" />
                      <p data-v-82dac09c className="bet-sub-con">
                        06/01/2026 10:30:03
                      </p>
                    </td>
                    <td data-v-82dac09c colSpan={2}>
                      <p data-v-82dac09c className="bet-sub-con">
                        <span data-v-82dac09c> Remarks :</span>{" "}
                        <span data-v-82dac09c>-</span>
                      </p>
                    </td>
                  </tr>
                  <tr data-v-82dac09c>
                    <td data-v-82dac09c style={{ color: "red" }}>
                      102.3
                    </td>
                    <td data-v-82dac09c>
                      <a data-v-82dac09c className="acc-description">
                        CRICKET &gt; Auckland Aces v Otago Volts &gt; Match Odds
                        &gt; Result &gt; Auckland Aces
                      </a>
                    </td>
                    <td data-v-82dac09c className="kellygreen">
                      1441.70
                    </td>
                  </tr>
                  <tr
                    data-v-82dac09c
                    className="open-bet-footer settled-tabel-footer"
                  >
                    <td data-v-82dac09c>
                      <div data-v-82dac09c className="open-bet-footerbg" />
                      <p data-v-82dac09c className="bet-sub-con">
                        06/01/2026 08:26:02
                      </p>
                    </td>
                    <td data-v-82dac09c colSpan={2}>
                      <p data-v-82dac09c className="bet-sub-con">
                        <span data-v-82dac09c> Remarks :</span>{" "}
                        <span data-v-82dac09c>-</span>
                      </p>
                    </td>
                  </tr>
                  <tr data-v-82dac09c>
                    <td data-v-82dac09c style={{ color: "green" }}>
                      70
                    </td>
                    <td data-v-82dac09c>
                      <a data-v-82dac09c className="acc-description">
                        Worli Matka &gt; DESAWAR &gt; open &gt; Result 100
                      </a>
                    </td>
                    <td data-v-82dac09c className="kellygreen">
                      1544.00
                    </td>
                  </tr>
                  <tr
                    data-v-82dac09c
                    className="open-bet-footer settled-tabel-footer"
                  >
                    <td data-v-82dac09c>
                      <div data-v-82dac09c className="open-bet-footerbg" />
                      <p data-v-82dac09c className="bet-sub-con">
                        06/01/2026 07:23:02
                      </p>
                    </td>
                    <td data-v-82dac09c colSpan={2}>
                      <p data-v-82dac09c className="bet-sub-con">
                        <span data-v-82dac09c> Remarks :</span>{" "}
                        <span data-v-82dac09c>-</span>
                      </p>
                    </td>
                  </tr>
                  <tr data-v-82dac09c>
                    <td data-v-82dac09c style={{ color: "green" }}>
                      102
                    </td>
                    <td data-v-82dac09c>
                      <a data-v-82dac09c className="acc-description">
                        CRICKET &gt; Auckland Aces v Otago Volts &gt; 20 Over AA
                        Adv &gt; Result &gt; 200
                      </a>
                    </td>
                    <td data-v-82dac09c className="kellygreen">
                      1474.00
                    </td>
                  </tr>
                  <tr
                    data-v-82dac09c
                    className="open-bet-footer settled-tabel-footer"
                  >
                    <td data-v-82dac09c>
                      <div data-v-82dac09c className="open-bet-footerbg" />
                      <p data-v-82dac09c className="bet-sub-con">
                        06/01/2026 06:45:02
                      </p>
                    </td>
                    <td data-v-82dac09c colSpan={2}>
                      <p data-v-82dac09c className="bet-sub-con">
                        <span data-v-82dac09c> Remarks :</span>{" "}
                        <span data-v-82dac09c>-</span>
                      </p>
                    </td>
                  </tr>
                  <tr data-v-82dac09c>
                    <td data-v-82dac09c style={{ color: "green" }}>
                      18.81
                    </td>
                    <td data-v-82dac09c>
                      <a data-v-82dac09c className="acc-description">
                        SOCCER &gt; Benfica B v Porto B &gt; Over/Under 2.5
                        Goals &gt; Result &gt; Under 2.5 Goals
                      </a>
                    </td>
                    <td data-v-82dac09c className="kellygreen">
                      1372.00
                    </td>
                  </tr>
                  <tr
                    data-v-82dac09c
                    className="open-bet-footer settled-tabel-footer"
                  >
                    <td data-v-82dac09c>
                      <div data-v-82dac09c className="open-bet-footerbg" />
                      <p data-v-82dac09c className="bet-sub-con">
                        06/01/2026 01:33:02
                      </p>
                    </td>
                    <td data-v-82dac09c colSpan={2}>
                      <p data-v-82dac09c className="bet-sub-con">
                        <span data-v-82dac09c> Remarks :</span>{" "}
                        <span data-v-82dac09c>-</span>
                      </p>
                    </td>
                  </tr>
                  <tr data-v-82dac09c>
                    <td data-v-82dac09c style={{ color: "red" }}>
                      100
                    </td>
                    <td data-v-82dac09c>
                      <a data-v-82dac09c className="acc-description">
                        Worli Matka &gt; GALI &gt; close &gt; Result 0
                      </a>
                    </td>
                    <td data-v-82dac09c className="kellygreen">
                      1353.19
                    </td>
                  </tr>
                  <tr
                    data-v-82dac09c
                    className="open-bet-footer settled-tabel-footer"
                  >
                    <td data-v-82dac09c>
                      <div data-v-82dac09c className="open-bet-footerbg" />
                      <p data-v-82dac09c className="bet-sub-con">
                        06/01/2026 00:44:03
                      </p>
                    </td>
                    <td data-v-82dac09c colSpan={2}>
                      <p data-v-82dac09c className="bet-sub-con">
                        <span data-v-82dac09c> Remarks :</span>{" "}
                        <span data-v-82dac09c>-</span>
                      </p>
                    </td>
                  </tr>
                  <tr data-v-82dac09c>
                    <td data-v-82dac09c style={{ color: "red" }}>
                      50
                    </td>
                    <td data-v-82dac09c>
                      <a data-v-82dac09c className="acc-description">
                        Worli Matka &gt; MAIN BAZAR &gt; close &gt; Result 335
                      </a>
                    </td>
                    <td data-v-82dac09c className="kellygreen">
                      1453.19
                    </td>
                  </tr>
                  <tr
                    data-v-82dac09c
                    className="open-bet-footer settled-tabel-footer"
                  >
                    <td data-v-82dac09c>
                      <div data-v-82dac09c className="open-bet-footerbg" />
                      <p data-v-82dac09c className="bet-sub-con">
                        06/01/2026 00:42:02
                      </p>
                    </td>
                    <td data-v-82dac09c colSpan={2}>
                      <p data-v-82dac09c className="bet-sub-con">
                        <span data-v-82dac09c> Remarks :</span>{" "}
                        <span data-v-82dac09c>-</span>
                      </p>
                    </td>
                  </tr>
                  <tr data-v-82dac09c>
                    <td data-v-82dac09c style={{ color: "red" }}>
                      13.98
                    </td>
                    <td data-v-82dac09c>
                      <a data-v-82dac09c className="acc-description">
                        CRICKET &gt; Pretoria Capitals v Sunrisers Eastern Cape
                        &gt; Match Odds &gt; Result &gt; Sunrisers Eastern Cape
                      </a>
                    </td>
                    <td data-v-82dac09c className="kellygreen">
                      1503.19
                    </td>
                  </tr>
                  <tr
                    data-v-82dac09c
                    className="open-bet-footer settled-tabel-footer"
                  >
                    <td data-v-82dac09c>
                      <div data-v-82dac09c className="open-bet-footerbg" />
                      <p data-v-82dac09c className="bet-sub-con">
                        06/01/2026 00:30:04
                      </p>
                    </td>
                    <td data-v-82dac09c colSpan={2}>
                      <p data-v-82dac09c className="bet-sub-con">
                        <span data-v-82dac09c> Remarks :</span>{" "}
                        <span data-v-82dac09c>-</span>
                      </p>
                    </td>
                  </tr>
                  <tr data-v-82dac09c>
                    <td data-v-82dac09c style={{ color: "green" }}>
                      3.92
                    </td>
                    <td data-v-82dac09c>
                      <a data-v-82dac09c className="acc-description">
                        CRICKET &gt; Pretoria Capitals v Sunrisers Eastern Cape
                        &gt; Tied Match &gt; Result &gt; No
                      </a>
                    </td>
                    <td data-v-82dac09c className="kellygreen">
                      1517.17
                    </td>
                  </tr>
                  <tr
                    data-v-82dac09c
                    className="open-bet-footer settled-tabel-footer"
                  >
                    <td data-v-82dac09c>
                      <div data-v-82dac09c className="open-bet-footerbg" />
                      <p data-v-82dac09c className="bet-sub-con">
                        06/01/2026 00:30:02
                      </p>
                    </td>
                    <td data-v-82dac09c colSpan={2}>
                      <p data-v-82dac09c className="bet-sub-con">
                        <span data-v-82dac09c> Remarks :</span>{" "}
                        <span data-v-82dac09c>-</span>
                      </p>
                    </td>
                  </tr>
                  <tr data-v-82dac09c>
                    <td data-v-82dac09c style={{ color: "green" }}>
                      75.67
                    </td>
                    <td data-v-82dac09c>
                      <a data-v-82dac09c className="acc-description">
                        CRICKET &gt; Chattogram Royals v Rangpur Riders &gt;
                        Match Odds &gt; Result &gt; Rangpur Riders
                      </a>
                    </td>
                    <td data-v-82dac09c className="kellygreen">
                      1513.25
                    </td>
                  </tr>
                  <tr
                    data-v-82dac09c
                    className="open-bet-footer settled-tabel-footer"
                  >
                    <td data-v-82dac09c>
                      <div data-v-82dac09c className="open-bet-footerbg" />
                      <p data-v-82dac09c className="bet-sub-con">
                        05/01/2026 21:16:04
                      </p>
                    </td>
                    <td data-v-82dac09c colSpan={2}>
                      <p data-v-82dac09c className="bet-sub-con">
                        <span data-v-82dac09c> Remarks :</span>{" "}
                        <span data-v-82dac09c>-</span>
                      </p>
                    </td>
                  </tr>
                  <tr data-v-82dac09c>
                    <td data-v-82dac09c style={{ color: "green" }}>
                      101
                    </td>
                    <td data-v-82dac09c>
                      <a data-v-82dac09c className="acc-description">
                        CRICKET &gt; Chattogram Royals v Rangpur Riders &gt;
                        Bookmaker &gt; Result &gt; Rangpur Riders
                      </a>
                    </td>
                    <td data-v-82dac09c className="kellygreen">
                      1437.58
                    </td>
                  </tr>
                  <tr
                    data-v-82dac09c
                    className="open-bet-footer settled-tabel-footer"
                  >
                    <td data-v-82dac09c>
                      <div data-v-82dac09c className="open-bet-footerbg" />
                      <p data-v-82dac09c className="bet-sub-con">
                        05/01/2026 21:12:02
                      </p>
                    </td>
                    <td data-v-82dac09c colSpan={2}>
                      <p data-v-82dac09c className="bet-sub-con">
                        <span data-v-82dac09c> Remarks :</span>{" "}
                        <span data-v-82dac09c>-</span>
                      </p>
                    </td>
                  </tr>
                  <tr data-v-82dac09c>
                    <td data-v-82dac09c style={{ color: "red" }}>
                      30.7
                    </td>
                    <td data-v-82dac09c>
                      <a data-v-82dac09c className="acc-description">
                        CRICKET &gt; South Africa U19 v India U19 &gt; Match
                        Odds &gt; Result &gt; India U19
                      </a>
                    </td>
                    <td data-v-82dac09c className="kellygreen">
                      1336.58
                    </td>
                  </tr>
                  <tr
                    data-v-82dac09c
                    className="open-bet-footer settled-tabel-footer"
                  >
                    <td data-v-82dac09c>
                      <div data-v-82dac09c className="open-bet-footerbg" />
                      <p data-v-82dac09c className="bet-sub-con">
                        05/01/2026 21:09:02
                      </p>
                    </td>
                    <td data-v-82dac09c colSpan={2}>
                      <p data-v-82dac09c className="bet-sub-con">
                        <span data-v-82dac09c> Remarks :</span>{" "}
                        <span data-v-82dac09c>-</span>
                      </p>
                    </td>
                  </tr>
                  <tr data-v-82dac09c>
                    <td data-v-82dac09c style={{ color: "green" }}>
                      10
                    </td>
                    <td data-v-82dac09c>
                      <a data-v-82dac09c className="acc-description">
                        CRICKET &gt; South Africa U19 v India U19 &gt; Bookmaker
                        &gt; Result &gt; India U19
                      </a>
                    </td>
                    <td data-v-82dac09c className="kellygreen">
                      1367.28
                    </td>
                  </tr>
                  <tr
                    data-v-82dac09c
                    className="open-bet-footer settled-tabel-footer"
                  >
                    <td data-v-82dac09c>
                      <div data-v-82dac09c className="open-bet-footerbg" />
                      <p data-v-82dac09c className="bet-sub-con">
                        05/01/2026 21:03:02
                      </p>
                    </td>
                    <td data-v-82dac09c colSpan={2}>
                      <p data-v-82dac09c className="bet-sub-con">
                        <span data-v-82dac09c> Remarks :</span>{" "}
                        <span data-v-82dac09c>-</span>
                      </p>
                    </td>
                  </tr>
                  <tr data-v-82dac09c>
                    <td data-v-82dac09c style={{ color: "red" }}>
                      12
                    </td>
                    <td data-v-82dac09c>
                      <a data-v-82dac09c className="acc-description">
                        TENNIS &gt; F Arnaboldi v Andrea Guerrieri &gt; Match
                        Odds &gt; Result &gt; Andrea Guerrieri
                      </a>
                    </td>
                    <td data-v-82dac09c className="kellygreen">
                      1357.28
                    </td>
                  </tr>
                  <tr
                    data-v-82dac09c
                    className="open-bet-footer settled-tabel-footer"
                  >
                    <td data-v-82dac09c>
                      <div data-v-82dac09c className="open-bet-footerbg" />
                      <p data-v-82dac09c className="bet-sub-con">
                        05/01/2026 19:22:02
                      </p>
                    </td>
                    <td data-v-82dac09c colSpan={2}>
                      <p data-v-82dac09c className="bet-sub-con">
                        <span data-v-82dac09c> Remarks :</span>{" "}
                        <span data-v-82dac09c>-</span>
                      </p>
                    </td>
                  </tr>
                  <tr data-v-82dac09c>
                    <td data-v-82dac09c style={{ color: "red" }}>
                      200
                    </td>
                    <td data-v-82dac09c>
                      <a data-v-82dac09c className="acc-description">
                        CRICKET &gt; Chattogram Royals v Rangpur Riders &gt; 20
                        OVER RUN CR 2 &gt; Result &gt; 169
                      </a>
                    </td>
                    <td data-v-82dac09c className="kellygreen">
                      1369.28
                    </td>
                  </tr>
                  <tr
                    data-v-82dac09c
                    className="open-bet-footer settled-tabel-footer"
                  >
                    <td data-v-82dac09c>
                      <div data-v-82dac09c className="open-bet-footerbg" />
                      <p data-v-82dac09c className="bet-sub-con">
                        05/01/2026 19:07:02
                      </p>
                    </td>
                    <td data-v-82dac09c colSpan={2}>
                      <p data-v-82dac09c className="bet-sub-con">
                        <span data-v-82dac09c> Remarks :</span>{" "}
                        <span data-v-82dac09c>-</span>
                      </p>
                    </td>
                  </tr>
                  <tr data-v-82dac09c>
                    <td data-v-82dac09c style={{ color: "red" }}>
                      15
                    </td>
                    <td data-v-82dac09c>
                      <a data-v-82dac09c className="acc-description">
                        Worli Matka &gt; KALYAN &gt; close &gt; Result 248
                      </a>
                    </td>
                    <td data-v-82dac09c className="kellygreen">
                      1569.28
                    </td>
                  </tr>
                  <tr
                    data-v-82dac09c
                    className="open-bet-footer settled-tabel-footer"
                  >
                    <td data-v-82dac09c>
                      <div data-v-82dac09c className="open-bet-footerbg" />
                      <p data-v-82dac09c className="bet-sub-con">
                        05/01/2026 18:30:03
                      </p>
                    </td>
                    <td data-v-82dac09c colSpan={2}>
                      <p data-v-82dac09c className="bet-sub-con">
                        <span data-v-82dac09c> Remarks :</span>{" "}
                        <span data-v-82dac09c>-</span>
                      </p>
                    </td>
                  </tr>
                  <tr data-v-82dac09c>
                    <td data-v-82dac09c style={{ color: "green" }}>
                      306
                    </td>
                    <td data-v-82dac09c>
                      <a data-v-82dac09c className="acc-description">
                        CRICKET &gt; Chattogram Royals v Rangpur Riders &gt; 6
                        Over CR &gt; Result &gt; 48
                      </a>
                    </td>
                    <td data-v-82dac09c className="kellygreen">
                      1584.28
                    </td>
                  </tr>
                  <tr
                    data-v-82dac09c
                    className="open-bet-footer settled-tabel-footer"
                  >
                    <td data-v-82dac09c>
                      <div data-v-82dac09c className="open-bet-footerbg" />
                      <p data-v-82dac09c className="bet-sub-con">
                        05/01/2026 18:10:03
                      </p>
                    </td>
                    <td data-v-82dac09c colSpan={2}>
                      <p data-v-82dac09c className="bet-sub-con">
                        <span data-v-82dac09c> Remarks :</span>{" "}
                        <span data-v-82dac09c>-</span>
                      </p>
                    </td>
                  </tr>
                  <tr data-v-82dac09c>
                    <td data-v-82dac09c style={{ color: "green" }}>
                      106
                    </td>
                    <td data-v-82dac09c>
                      <a data-v-82dac09c className="acc-description">
                        CRICKET &gt; South Africa U19 v India U19 &gt; 10 Over
                        IND U19 &gt; Result &gt; 103
                      </a>
                    </td>
                    <td data-v-82dac09c className="kellygreen">
                      1278.28
                    </td>
                  </tr>
                  <tr
                    data-v-82dac09c
                    className="open-bet-footer settled-tabel-footer"
                  >
                    <td data-v-82dac09c>
                      <div data-v-82dac09c className="open-bet-footerbg" />
                      <p data-v-82dac09c className="bet-sub-con">
                        05/01/2026 17:58:02
                      </p>
                    </td>
                    <td data-v-82dac09c colSpan={2}>
                      <p data-v-82dac09c className="bet-sub-con">
                        <span data-v-82dac09c> Remarks :</span>{" "}
                        <span data-v-82dac09c>-</span>
                      </p>
                    </td>
                  </tr>
                  <tr data-v-82dac09c>
                    <td data-v-82dac09c style={{ color: "green" }}>
                      95
                    </td>
                    <td data-v-82dac09c>
                      <a data-v-82dac09c className="acc-description">
                        Fantasy Cricket &gt; SydneySixers vs Brisbane Heat
                      </a>
                    </td>
                    <td data-v-82dac09c className="kellygreen">
                      1172.28
                    </td>
                  </tr>
                  <tr
                    data-v-82dac09c
                    className="open-bet-footer settled-tabel-footer"
                  >
                    <td data-v-82dac09c>
                      <div data-v-82dac09c className="open-bet-footerbg" />
                      <p data-v-82dac09c className="bet-sub-con">
                        05/01/2026 17:40:25
                      </p>
                    </td>
                    <td data-v-82dac09c colSpan={2}>
                      <p data-v-82dac09c className="bet-sub-con">
                        <span data-v-82dac09c> Remarks :</span>{" "}
                        <span data-v-82dac09c>-</span>
                      </p>
                    </td>
                  </tr>
                  <tr data-v-82dac09c>
                    <td data-v-82dac09c style={{ color: "red" }}>
                      1.66
                    </td>
                    <td data-v-82dac09c>
                      <a data-v-82dac09c className="acc-description">
                        CRICKET &gt; Sydney Sixers v Brisbane Heat &gt; Match
                        Odds &gt; Result &gt; Sydney Sixers
                      </a>
                    </td>
                    <td data-v-82dac09c className="kellygreen">
                      1077.28
                    </td>
                  </tr>
                  <tr
                    data-v-82dac09c
                    className="open-bet-footer settled-tabel-footer"
                  >
                    <td data-v-82dac09c>
                      <div data-v-82dac09c className="open-bet-footerbg" />
                      <p data-v-82dac09c className="bet-sub-con">
                        05/01/2026 17:20:05
                      </p>
                    </td>
                    <td data-v-82dac09c colSpan={2}>
                      <p data-v-82dac09c className="bet-sub-con">
                        <span data-v-82dac09c> Remarks :</span>{" "}
                        <span data-v-82dac09c>-</span>
                      </p>
                    </td>
                  </tr>
                  <tr data-v-82dac09c>
                    <td data-v-82dac09c style={{ color: "red" }}>
                      60
                    </td>
                    <td data-v-82dac09c>
                      <a data-v-82dac09c className="acc-description">
                        CRICKET &gt; Sydney Sixers v Brisbane Heat &gt; Tied
                        Match &gt; Result &gt; No
                      </a>
                    </td>
                    <td data-v-82dac09c className="kellygreen">
                      1078.94
                    </td>
                  </tr>
                  <tr
                    data-v-82dac09c
                    className="open-bet-footer settled-tabel-footer"
                  >
                    <td data-v-82dac09c>
                      <div data-v-82dac09c className="open-bet-footerbg" />
                      <p data-v-82dac09c className="bet-sub-con">
                        05/01/2026 17:19:02
                      </p>
                    </td>
                    <td data-v-82dac09c colSpan={2}>
                      <p data-v-82dac09c className="bet-sub-con">
                        <span data-v-82dac09c> Remarks :</span>{" "}
                        <span data-v-82dac09c>-</span>
                      </p>
                    </td>
                  </tr>
                  <tr data-v-82dac09c>
                    <td data-v-82dac09c style={{ color: "black" }}>
                      0
                    </td>
                    <td data-v-82dac09c>
                      <a data-v-82dac09c className="acc-description">
                        CRICKET &gt; Sydney Sixers v Brisbane Heat &gt;
                        BOOKMAKER &gt; Result &gt; Sydney Sixers
                      </a>
                    </td>
                    <td data-v-82dac09c className="kellygreen">
                      1138.94
                    </td>
                  </tr>
                  <tr
                    data-v-82dac09c
                    className="open-bet-footer settled-tabel-footer"
                  >
                    <td data-v-82dac09c>
                      <div data-v-82dac09c className="open-bet-footerbg" />
                      <p data-v-82dac09c className="bet-sub-con">
                        05/01/2026 17:06:01
                      </p>
                    </td>
                    <td data-v-82dac09c colSpan={2}>
                      <p data-v-82dac09c className="bet-sub-con">
                        <span data-v-82dac09c> Remarks :</span>{" "}
                        <span data-v-82dac09c>-</span>
                      </p>
                    </td>
                  </tr>
                  <tr data-v-82dac09c>
                    <td data-v-82dac09c style={{ color: "green" }}>
                      95
                    </td>
                    <td data-v-82dac09c>
                      <a data-v-82dac09c className="acc-description">
                        Fantasy Cricket &gt; Sylhet Titans vs Noakhali Express
                      </a>
                    </td>
                    <td data-v-82dac09c className="kellygreen">
                      1138.94
                    </td>
                  </tr>
                  <tr
                    data-v-82dac09c
                    className="open-bet-footer settled-tabel-footer"
                  >
                    <td data-v-82dac09c>
                      <div data-v-82dac09c className="open-bet-footerbg" />
                      <p data-v-82dac09c className="bet-sub-con">
                        05/01/2026 16:57:19
                      </p>
                    </td>
                    <td data-v-82dac09c colSpan={2}>
                      <p data-v-82dac09c className="bet-sub-con">
                        <span data-v-82dac09c> Remarks :</span>{" "}
                        <span data-v-82dac09c>-</span>
                      </p>
                    </td>
                  </tr>
                </tbody>
                {/**/}
              </table>
            </div>
          </div>
          <div data-v-82dac09c className="pagination_scetion">
            <div className="pagegneshan-cl">
              Showing <span>1</span> to <span>25</span> of <span>67</span>{" "}
              results
            </div>
            <div className="alignment m-0">
              <ul className="pagination">
                {/**/}
                <li className="page-item">
                  <button className="page-link active" href="#">
                    1
                  </button>
                </li>
                <li className="page-item">
                  <button className="page-link" aria-label="Next">
                    <span aria-hidden="true">Next »</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          data-v-82dac09c
          className="modal worli-Bets-Modal"
          id="statementInfoModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div className="thm-heading">
                  <div className="match-faq statement-match-faq">
                    <div className="match-head">
                      <h5>Statement Info</h5>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fa fa-close" />
                </button>
              </div>
              {/**/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountStatement;
