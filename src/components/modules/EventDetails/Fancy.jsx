import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useExposure } from "../../../hooks/exposure";
import { useGetLadderMutation } from "../../../redux/features/events/events";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";
import isOddSuspended from "../../../utils/isOddSuspended";
import MobileBetSlip from "./MobileBetSlip";

const Fancy = ({ data }) => {
  const fancyData = data?.filter(
    (fancy) =>
      fancy.btype === "FANCY" &&
      fancy.tabGroupName === "Normal" &&
      fancy?.visible == true,
  );
  const [marketName, setMarketName] = useState("");
  const [ladderData, setLadderData] = useState([]);
  const { eventId } = useParams();

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { runnerId } = useSelector((state) => state.event);
  const { data: exposure } = useExposure(eventId);
  const [getLadder] = useGetLadderMutation();

  const handleBetSlip = (betType, games, runner, price, bottomValue) => {
    if (token) {
      let selectionId;
      let runnerId;
      let eventTypeId;
      if (!price) {
        return;
      }

      let pnlBySelection;
      const updatedPnl = [];

      if (exposure?.pnlBySelection) {
        const obj = exposure?.pnlBySelection;
        pnlBySelection = Object?.values(obj);
      }

      if (games?.btype == "FANCY") {
        selectionId = games?.id;
        runnerId = games?.id;
        eventTypeId = games?.eventTypeId;
      } else if (games?.btype && games?.btype !== "FANCY") {
        selectionId = runner?.id;
        runnerId = games.runners.map((runner) => runner.id);
        eventTypeId = games?.eventTypeId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find((p) => p?.RunnerId === runner?.id);
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      } else {
        selectionId = runner?.selectionId;
        eventTypeId = games?.marketId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find(
            (p) => p?.RunnerId === runner?.selectionId,
          );
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      }

      const betData = {
        price,
        side: betType === "back" ? 0 : 1,
        selectionId,
        btype: games?.btype,
        eventTypeId,
        betDelay: games?.betDelay,
        marketId: games?.id,
        lay: betType === "lay",
        back: betType === "back",
        selectedBetName: runner?.name,
        name: games.runners.map((runner) => runner.name),
        runnerId,
        isWeak: games?.isWeak,
        maxLiabilityPerMarket: games?.maxLiabilityPerMarket,
        isBettable: games?.isBettable,
        maxLiabilityPerBet: games?.maxLiabilityPerBet,
        pnl: updatedPnl,
        marketName: games?.name,
        eventId: games?.eventId,
        totalSize: 0,
        bottomValue,
      };
      if (games?.btype == "FANCY") {
        dispatch(setRunnerId(games?.id));
      } else if (games?.btype && games?.btype !== "FANCY") {
        dispatch(setRunnerId(runner?.id));
      } else {
        dispatch(setRunnerId(runner?.selectionId));
      }

      dispatch(setPlaceBetValues(betData));
    } else {
      dispatch(setShowLoginModal(true));
    }
  };

  let pnlBySelection;
  if (exposure?.pnlBySelection) {
    const obj = exposure?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  const handleGetLadder = async (pnl, marketName) => {
    if (!pnl?.MarketId) {
      return;
    }
    setMarketName(marketName);
    const res = await getLadder({ marketId: pnl?.MarketId }).unwrap();

    if (res.success) {
      setLadderData(res.result);
    }
  };
  return (
    <section data-v-4a1ad0c4 className="fancy-tab-sec" id="fancy-tab">
      <div data-v-4a1ad0c4 className="fancy-tab-list">
        <div data-v-4a1ad0c4 className="tab-content" id="myTabContent">
          <div
            data-v-4a1ad0c4
            className="tab-pane fade show active"
            id="all"
            role="tabpanel"
            aria-labelledby="all-tab"
          >
            {fancyData?.length > 0 && (
              <div data-v-4a1ad0c4 className="mb-2">
                <div data-v-4a1ad0c4 className="fancy-market-tabs-details-sec">
                  <div data-v-4a1ad0c4 className="row g-0">
                    <div data-v-4a1ad0c4 className="col-7 col-md-6 pl-0">
                      <span data-v-4a1ad0c4 className="mark-lft-head">
                        Fancy
                      </span>
                    </div>
                    <div data-v-4a1ad0c4 className="col-5 col-md-6">
                      <div data-v-4a1ad0c4 className="fancy-group-box">
                        <div
                          data-v-4a1ad0c4
                          className="fancy-box-1 fancy-no-yes"
                        >
                          <button
                            data-v-4a1ad0c4
                            type="button"
                            className="yes-no-btn back-title"
                          >
                            No
                          </button>
                          <button
                            data-v-4a1ad0c4
                            type="button"
                            className="yes-no-btn lay-title"
                          >
                            Yes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {fancyData?.map((game) => {
                  return (
                    <Fragment key={game?.id}>
                      <div data-v-4a1ad0c4>
                        <div
                          data-v-4a1ad0c4
                          className="fancy-market-tabs-details-sec bet-slip-area"
                        >
                          <div data-v-4a1ad0c4 className="row g-0">
                            <div data-v-4a1ad0c4 className="col-7">
                              <div
                                data-v-4a1ad0c4
                                className="fancy-tab-lft-content"
                              >
                                <div
                                  data-v-4a1ad0c4
                                  className="game-icon ng-star-inserted"
                                >
                                  <img
                                    data-v-4a1ad0c4
                                    className="star-active"
                                    src="/src/assets/img/star-inactive-Cy8n08QW.png"
                                  />
                                </div>
                                <div
                                  data-v-4a1ad0c4
                                  className="fancy-lft-title"
                                >
                                  <span
                                    data-v-4a1ad0c4
                                    className="market-event-head"
                                  >
                                    {game?.name}
                                  </span>
                                  <div
                                    data-v-4a1ad0c4
                                    className="back-lay-status"
                                  />
                                </div>
                              </div>
                            </div>
                            <div data-v-4a1ad0c4 className="col-5">
                              <div data-v-4a1ad0c4 className="fancy-group-box">
                                <div data-v-4a1ad0c4 className="fancy-box-1">
                                  {isOddSuspended(game) && (
                                    <div
                                      data-v-4a1ad0c4
                                      className="running-con suspend-con"
                                    >
                                      <span data-v-4a1ad0c4>SUSPENDED</span>
                                    </div>
                                  )}

                                  <button
                                    onClick={() =>
                                      handleBetSlip(
                                        "lay",
                                        game,
                                        game?.runners?.[0],
                                        game?.runners?.[0]?.lay?.[0]?.line,
                                        game?.runners?.[0]?.lay?.[0]?.price,
                                      )
                                    }
                                    data-v-4a1ad0c4
                                    type="button"
                                    className="fancy-betting-box light-pink"
                                  >
                                    <span data-v-4a1ad0c4>
                                      <b data-v-4a1ad0c4>
                                        {" "}
                                        {game?.runners?.[0]?.lay?.[0]?.line}
                                      </b>
                                    </span>
                                    <span data-v-4a1ad0c4>
                                      {" "}
                                      {game?.runners?.[0]?.lay?.[0]?.price}
                                    </span>
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleBetSlip(
                                        "back",
                                        game,
                                        game?.runners?.[0],
                                        game?.runners?.[0]?.back?.[0]?.line,
                                        game?.runners?.[0]?.back?.[0]?.price,
                                      )
                                    }
                                    data-v-4a1ad0c4
                                    type="button"
                                    className="fancy-betting-box light-blue"
                                  >
                                    <span data-v-4a1ad0c4>
                                      <b data-v-4a1ad0c4>
                                        {game?.runners?.[0]?.back?.[0]?.line}
                                      </b>
                                    </span>
                                    <span data-v-4a1ad0c4>
                                      {game?.runners?.[0]?.back?.[0]?.price}
                                    </span>
                                  </button>
                                </div>
                                <div
                                  data-v-4a1ad0c4
                                  className="fancy-box-1 fancy-min-max"
                                >
                                  <div
                                    data-v-4a1ad0c4
                                    className="max-min-bet-rgt-box"
                                  >
                                    <span data-v-4a1ad0c4>
                                      Max Bet: {game?.minLiabilityPerBet}
                                    </span>
                                    <span data-v-4a1ad0c4>
                                      Max Bet: {game?.maxLiabilityPerBet}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {game?.id === runnerId && (
                        <MobileBetSlip currentPlaceBetEvent={game} />
                      )}
                    </Fragment>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fancy;
