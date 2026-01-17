import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import OddSports from "../pages/OddSports/OddSports";
import EventDetails from "../pages/EventDetails/EventDetails";
import EditStake from "../pages/EditStake/EditStake";
import AccountStatement from "../pages/AccountStatement/AccountStatement";
import BettingProfitLoss from "../pages/BettingProfitLoss/BettingProfitLoss";
import OpenBets from "../pages/OpenBets/OpenBets";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import APK from "../pages/APK/APK";
import NotFound from "../pages/NotFound/NotFound";
import Affiliate from "../pages/Affiliate/Affiliate";
import AffiliateUserProfitLoss from "../pages/AffiliateUserProfitLoss/AffiliateUserProfitLoss";
import AffiliateUserStatement from "../pages/AffiliateUserStatement/AffiliateUserStatement";
import Casino from "../pages/Casino/Casino";
import BettingProfitLossDetails from "../pages/BettingProfitLoss/BettingProfitLossDetails";
import Deposit from "../pages/Deposit/Deposit";
import Withdraw from "../pages/Withdraw/Withdraw";
import Promotions from "../pages/Promotions/Promotions";
import LossBackClaims from "../pages/LossBackClaims/LossBackClaims";
import IFrame from "../pages/IFrame/IFrame";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,

      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/sports/:eventName/:eventId",
          element: <OddSports />,
        },
        {
          path: "/sports/:eventName/:eventId",
          element: <OddSports />,
        },
        {
          path: "/event-details/:eventTypeId/:eventId",
          element: <EventDetails />,
        },
        {
          path: "/edit-stake",
          element: <EditStake />,
        },
        {
          path: "/account-statement",
          element: <AccountStatement />,
        },
        {
          path: "/betting-profit-loss",
          element: <BettingProfitLoss />,
        },
        {
          path: "/betting-profit-loss/:marketId",
          element: <BettingProfitLossDetails />,
        },
        {
          path: "/open-bets",
          element: <OpenBets />,
        },

        {
          path: "/change-password",
          element: <ChangePassword />,
        },
        {
          path: "/apk",
          element: <APK />,
        },
        {
          path: "/affiliate",
          element: <Affiliate />,
        },
        {
          path: "/affiliate/user-profit-loss",
          element: <AffiliateUserProfitLoss />,
        },
        {
          path: "/affiliate/user-statement",
          element: <AffiliateUserStatement />,
        },
        {
          path: "/casino",
          element: <Casino />,
        },
        {
          path: "/:route/:name/:gameId",
          element: <IFrame />,
        },
        {
          path: "/deposit",
          element: <Deposit />,
        },
        {
          path: "/withdraw",
          element: <Withdraw />,
        },
        {
          path: "/promotions",
          element: <Promotions />,
        },
        {
          path: "/lossback-claims",
          element: <LossBackClaims />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  },
);
