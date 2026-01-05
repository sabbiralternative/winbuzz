import CasinoProvider from "../../components/modules/Home/CasinoProvider";
import CricketFight from "../../components/modules/Home/CricketFight";
import EventSection from "../../components/modules/Home/EventSection";
import ExchangeGames from "../../components/modules/Home/ExchangeGames";
import NewLaunch from "../../components/modules/Home/NewLaunch";
import PopularGameThumbnails from "../../components/modules/Home/PopularGameThumbnails";

const Home = () => {
  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-10 box-shd-gap">
      <div>
        <div data-v-56384811 className="right-side-bar-main-sec">
          <div data-v-56384811 className="section-listing-page">
            <PopularGameThumbnails />

            <NewLaunch />

            <CricketFight />

            <EventSection />

            <CasinoProvider />

            <ExchangeGames />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
