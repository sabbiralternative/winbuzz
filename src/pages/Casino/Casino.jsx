import { useEffect, useState } from "react";
import { useMac88AllQuery } from "../../redux/features/casino/casino.api";
import TabOne from "../../components/modules/Casino/TabOne";
import TabTwo from "../../components/modules/Casino/TabTwo";
import Thumbnails from "../../components/modules/Casino/Thumbnails";
const Casino = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("MAC88");
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("All");
  const [filterCategoryData, setFilterCategoryData] = useState([]);
  const { data } = useMac88AllQuery();

  /* tables key data */
  const tables = data?.data?.tables?.[100000];

  useEffect(() => {
    const getCategory = () => {
      if (tables) {
        /* Get only four key */
        const {
          MAC88,
          ["Mac88 Virtuals"]: mac88Virtuals,
          ["Color Prediction"]: colorPrediction,
          ["Fun Games"]: funGames,
        } = tables;
        /* Make a object of four key */
        const filteredData = {
          MAC88,
          mac88Virtuals,
          colorPrediction,
          funGames,
        };
        /* Get data in a single array from four object */
        const tableKeyData =
          filteredData &&
          Object.values(filteredData)
            .flatMap((obj) => Object.values(obj))
            .flat();

        /*get category for first tab */
        const categories = Array.from(
          new Set(tableKeyData.map((item) => item.product))
        );
        setCategories(categories);
        /* get category for first tab */

        /* get sub category for first tabt */
        const filterCasinoByProduct = tableKeyData?.filter(
          (item) => item?.product === selectedCategory
        );
        const subCategory = Array.from(
          new Set(filterCasinoByProduct.map((item) => item.category))
        );

        setSubCategories(subCategory);
        /*get sub category for first tab*/

        /* Get actual data by  category */
        if (selectedSubCategory !== "All") {
          const filterCasinoByCategory = filterCasinoByProduct?.filter(
            (item) => item?.category === selectedSubCategory
          );
          setFilterCategoryData(filterCasinoByCategory);
        } else {
          setFilterCategoryData(filterCasinoByProduct);
        }
      }
    };
    getCategory();
  }, [tables, selectedCategory, selectedSubCategory]);

  useEffect(() => {
    setSelectedSubCategory("All");
  }, [selectedCategory]);

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
                          categories={categories}
                          selectedCategory={selectedCategory}
                          setSelectedCategory={setSelectedCategory}
                        />
                        <TabTwo
                          setSelectedSubCategory={setSelectedSubCategory}
                          selectedSubCategory={selectedSubCategory}
                          categories={subCategories}
                        />
                        <Thumbnails data={filterCategoryData} />
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
