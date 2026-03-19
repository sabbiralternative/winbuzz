import { Loader } from "rsuite";
import TabOne from "../../components/modules/Casino/TabOne";
import TabTwo from "../../components/modules/Casino/TabTwo";
import Thumbnails from "../../components/modules/Casino/Thumbnails";
import { useUltraLobbyQuery } from "../../hooks/ultraLobby";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
const Casino = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const provider = params.get("provider");
  const category = params.get("category");
  const { data } = useUltraLobbyQuery();

  const providersOption =
    data?.length > 0 &&
    Array.from(new Set(data.map((item) => item.providerName)));

  const categoriesOption = useMemo(() => {
    if (data?.length > 0) {
      if (provider === "all") {
        return Array.from(new Set(data.map((item) => item.category)));
      }

      return Array.from(
        new Set(
          data
            ?.filter((item) => item.providerName === provider)
            .map((item) => item.category),
        ),
      );
    }
  }, [data, provider]);

  const filterGames = () => {
    if (!provider && !category) {
      return data;
    }

    if (provider === "all" && category === "all") {
      return data;
    }

    if (provider === "all" && category && category !== "all") {
      return data?.filter((item) => item.category === category);
    }

    if (provider && provider !== "all" && category === "all") {
      return data?.filter((item) => item.providerName === provider);
    }

    return data?.filter((item) => {
      return item.providerName === provider && item.category === category;
    });
  };

  if (!data) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-10 box-shd-gap">
      <div>
        <div data-v-15497d74 className="right-side-bar-main-sec">
          <div data-v-15497d74 className="section-listing-page">
            <section data-v-15497d74 className="bet-details-sec">
              {/* <div data-v-15497d74 className="casino-header-search">
                <input
                  data-v-15497d74
                  type="text"
                  className="form-control"
                  placeholder="Search Casino"
                />

                <button data-v-15497d74 className="btn search-casino-cta">
                  <i data-v-15497d74 className="fa-solid fa-magnifying-glass" />
                </button>
              </div> */}
              <div data-v-15497d74 className="int-casino-main-body-sec">
                <div data-v-15497d74 className="int-casino-main-tabs">
                  <div
                    data-v-15497d74
                    className="tab-content"
                    id="pills-tabContent"
                  >
                    <div
                      data-v-15497d74
                      className="tab-pane fade show active"
                      id="pills-all-int"
                      role="tabpanel"
                      aria-labelledby="pills-all-int-tab"
                    >
                      <div data-v-15497d74 className="all-game-details-page">
                        <TabOne
                          providersOption={providersOption}
                          provider={provider}
                        />
                        <TabTwo
                          categoriesOption={categoriesOption}
                          category={category}
                          provider={provider}
                        />
                        <Thumbnails data={filterGames()} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casino;
