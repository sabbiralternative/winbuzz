import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useGroupQuery } from "../../redux/features/events/events";
import { useEffect, useMemo } from "react";
import EventRow from "../../components/shared/EventRow/EventRow";
import moment from "moment";

const OddSports = () => {
  const navigate = useNavigate();
  const { eventId, eventName } = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const type = params.get("type");

  const { data } = useGroupQuery(
    { sportsType: eventId },
    {
      pollingInterval: 1000,
    },
  );

  const todayMoment = moment().startOf("day");
  const groupedData = useMemo(() => {
    if (!data) return { inPlay: {}, today: {}, upcoming: {} };

    return Object.entries(data).reduce(
      (acc, [key, value]) => {
        if (!value.visible) return acc;

        const matchDate = moment(value.date, "DD/MM/YYYY HH:mm");

        if (value.inPlay === 1) {
          acc.inPlay[key] = value;
        } else if (matchDate.isSame(todayMoment, "day")) {
          acc.today[key] = value;
        } else {
          acc.upcoming[key] = value;
        }

        return acc;
      },
      { inPlay: {}, today: {}, upcoming: {} },
    );
  }, [data]);

  const finalData =
    type === "inPlay"
      ? groupedData.inPlay
      : type === "today"
        ? groupedData.today
        : groupedData.upcoming;

  useEffect(() => {
    if (
      Object.entries(groupedData.inPlay).length === 0 &&
      Object.entries(groupedData.today).length === 0 &&
      Object.entries(groupedData.upcoming).length === 0
    )
      return;
    if (
      Object.entries(groupedData.inPlay).length === 0 &&
      Object.entries(groupedData.today).length > 0
    ) {
      navigate(`/sports/${eventName}/${eventId}?type=today`);
    }

    if (
      Object.entries(groupedData.inPlay).length === 0 &&
      Object.entries(groupedData.today).length === 0
    ) {
      navigate(`/sports/${eventName}/${eventId}?type=upcoming`);
    }

    if (
      Object.entries(groupedData.inPlay).length === 0 &&
      Object.entries(groupedData.today).length === 0 &&
      Object.entries(groupedData.upcoming).length > 0
    ) {
      navigate(`/sports/${eventName}/${eventId}?type=upcoming`);
    }
  }, [groupedData, navigate, eventId, eventName]);

  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-10 box-shd-gap">
      <div>
        <div data-v-86dd4931 className="right-side-bar-main-sec">
          <div data-v-86dd4931 className="section-listing-page">
            <section data-v-86dd4931 className="bet-details-sec">
              <div data-v-86dd4931 className="bet-details-header">
                <div data-v-86dd4931 className="row">
                  <div data-v-86dd4931 className="col-6 w-100">
                    <div
                      data-v-86dd4931
                      className="inplay-popular-header inplay-header-color d-flex"
                    >
                      <div
                        data-v-86dd4931
                        className="inplay-popular-header__logo"
                      >
                        <i
                          data-v-86dd4931
                          className="fa fa-play-circle inplay-popular-header__logo-icon"
                        />
                        <span
                          data-v-86dd4931
                          className="inplay-popular-header__logo-text text-capitalize"
                        >
                          {eventName}
                        </span>
                      </div>
                      <ul data-v-86dd4931 className="live_virtual">
                        <li data-v-86dd4931>
                          <input
                            data-v-86dd4931
                            type="checkbox"
                            className="filter-checkbox"
                          />
                          <label data-v-86dd4931>LIVE</label>
                        </li>
                        <li data-v-86dd4931>
                          <input
                            data-v-86dd4931
                            type="checkbox"
                            className="filter-checkbox"
                          />
                          <label data-v-86dd4931>VIRTUAL</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <section
                data-v-56384811
                className="inplay-item-list_exchangeGames mt-2"
              >
                <div data-v-56384811 className="popular-game-tab">
                  <ul
                    data-v-56384811
                    className="nav nav-tabs"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li
                      data-v-56384811
                      className="nav-item"
                      role="presentation"
                    >
                      <button
                        onClick={() =>
                          navigate(
                            `/sports/${eventName}/${eventId}?type=inPlay`,
                          )
                        }
                        data-v-56384811
                        className={`nav-link  ${type === "inPlay" ? "active" : ""}`}
                        id="pills-home-tab"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        <p data-v-56384811>In Play</p>
                      </button>
                    </li>
                    <li
                      data-v-56384811
                      className="nav-item"
                      role="presentation"
                    >
                      <button
                        onClick={() =>
                          navigate(`/sports/${eventName}/${eventId}?type=today`)
                        }
                        data-v-56384811
                        className={`nav-link  ${type === "today" ? "active" : ""}`}
                        id="pills-home-tab"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        <p data-v-56384811>Today</p>
                      </button>
                    </li>

                    <li
                      data-v-56384811
                      className="nav-item"
                      role="presentation"
                    >
                      <button
                        onClick={() =>
                          navigate(
                            `/sports/${eventName}/${eventId}?type=upcoming`,
                          )
                        }
                        data-v-56384811
                        className={`nav-link ${type === "upcoming" ? "active" : ""}`}
                        id="pills-contact-tab"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        <p data-v-56384811>UPCOMING</p>
                      </button>
                    </li>
                  </ul>
                  {Object.entries(finalData).length === 0 && (
                    <div
                      data-v-56384811
                      className="tab-content"
                      id="pills-tabContent"
                    >
                      <div data-v-56384811 className="no-real-time">
                        No real time records found
                      </div>
                    </div>
                  )}
                </div>
              </section>
              <div data-v-86dd4931>
                <div data-v-86dd4931>
                  {data &&
                    Object.values(data).length > 0 &&
                    Object.keys(finalData)
                      .sort((keyA, keyB) => data[keyA].sort - data[keyB].sort)
                      .map((keys, index) => {
                        return (
                          <EventRow
                            key={index}
                            data={data}
                            keys={keys}
                            eventName={eventName}
                          />
                        );
                      })}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OddSports;
