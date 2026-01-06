import { useParams } from "react-router-dom";
import BetSlip from "./BetSlip";
import OpenBets from "./OpenBets";
import { Settings } from "../../../api";
import { useAccessToken } from "../../../hooks/accessToken";
import { useState } from "react";

const RightSidebar = () => {
  const [showVideo, setShowVideo] = useState(true);
  const { eventId, eventTypeId } = useParams();
  const payload = {
    eventTypeId: eventTypeId,
    eventId: eventId,
    type: "video",
    casinoCurrency: Settings.casinoCurrency,
  };
  const { data } = useAccessToken(payload);

  return (
    <div data-v-4a1ad0c4 className="col-sm-0 col-md-0 col-lg-4">
      <div data-v-4a1ad0c4 className="placed-bet-sec">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setShowVideo((prev) => !prev)}
          data-v-4a1ad0c4
          className="placed-bet-head open-bet"
        >
          <span data-v-4a1ad0c4>Live stream</span>
        </div>
        {showVideo && (
          <div data-v-4a1ad0c4 className="live-match-sec">
            <iframe
              data-v-4a1ad0c4
              src={data?.result?.url}
              scrolling="no"
              frameBorder={0}
              className="tv-iframe"
              style={{ height: "235px !important", width: "100%" }}
            />
          </div>
        )}
        <BetSlip />
        <OpenBets />
      </div>
    </div>
  );
};

export default RightSidebar;
