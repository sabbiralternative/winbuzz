import { useParams } from "react-router-dom";
import { useGroupQuery } from "../../redux/features/events/events";
import { useEffect, useState } from "react";
import EventRow from "../../components/shared/EventRow/EventRow";
import { eventNames } from "../../utils/eventNames";

const OddSports = () => {
  const { eventId } = useParams();
  const { data } = useGroupQuery(
    { sportsType: eventId },
    {
      pollingInterval: 1000,
    }
  );

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (data) {
      const categories = Array.from(
        new Set(
          Object.values(data)
            .filter((item) => item.visible)
            .map((item) => item.eventTypeId)
        )
      );
      const sortedCategories = categories.sort((a, b) => {
        const order = { 4: 0, 1: 1, 2: 2 };
        return order[a] - order[b];
      });
      setCategories(sortedCategories);
    }
  }, [data]);
  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-10 box-shd-gap">
      <div>
        <div data-v-86dd4931 className="right-side-bar-main-sec">
          <div data-v-86dd4931 className="section-listing-page">
            {categories?.map((category) => {
              const filteredData = Object.entries(data)
                .filter(
                  ([, value]) =>
                    value.eventTypeId === category && value.visible === true
                )
                .reduce((obj, [key, value]) => {
                  obj[key] = value;
                  return obj;
                }, {});
              return (
                <section
                  key={category}
                  data-v-86dd4931
                  className="bet-details-sec"
                >
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
                              {eventNames[category]}
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
                  <div data-v-86dd4931>
                    <div data-v-86dd4931>
                      {data &&
                        Object.values(data).length > 0 &&
                        Object.keys(filteredData)
                          .sort(
                            (keyA, keyB) => data[keyA].sort - data[keyB].sort
                          )
                          .map((keys, index) => {
                            if (!data?.[keys]?.visible) {
                              return null;
                            }

                            return (
                              <EventRow
                                key={index}
                                data={data}
                                keys={keys}
                                category={category}
                              />
                            );
                          })}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OddSports;
