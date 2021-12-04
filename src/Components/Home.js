import React, { useContext } from "react";
import "./styles/Home.css";
import Product from "./Product";
import { FilterContext } from "../context/FilterContext";
import Header from "./Header";
import SortByPrice from "./SortByPrice";
import { SortContext } from "../context/SortContext";

function Home() {
  const { setSize, setBrand, setIdeal, handleClearFilters } =
    useContext(FilterContext);
  const { displayProductsAfterSort } = useContext(SortContext);
  let sizeGrp = ["S", "M", "L", "XL"];
  let brandsGrp = [
    "MSE Fashion",
    "TRIPR",
    "Breil By Fort Collins",
    "Fstyler",
    "LEVI'S",
  ];
  const handleBrandChange = (e) => {
    console.log(e);
    if (e.target.checked === true) {
      return setBrand((prev) => e.target.value);
    } else if (e.target.checked === false && e.target.value === "MSE Fashion") {
      return setBrand((prev) => {
        if (prev === "MSE Fashion") {
          return "all";
        } else {
          return prev;
        }
      });
    } else if (e.target.checked === false && e.target.value === "TRIPR") {
      return setBrand((prev) => {
        if (prev === "TRIPR") {
          return "all";
        } else {
          return prev;
        }
      });
    } else if (
      e.target.checked === false &&
      e.target.value === "Breil By Fort Collins"
    ) {
      return setBrand((prev) => {
        if (prev === "Breil By Fort Collins") {
          return "all";
        } else {
          return prev;
        }
      });
    } else if (e.target.checked === false && e.target.value === "Fstyler") {
      return setBrand((prev) => {
        if (prev === "Fstyler") {
          return "all";
        } else {
          return prev;
        }
      });
    } else if (e.target.checked === false && e.target.value === "LEVI'S") {
      return setBrand((prev) => {
        if (prev === "LEVI'S") {
          return "all";
        } else {
          return prev;
        }
      });
    }
  };

  const handleIdealChange = (e) => {
    if (e.target.checked === true && e.target.value === "Men") {
      return setIdeal((prev) => "Men");
    } else if (e.target.checked === true && e.target.value === "Women") {
      return setIdeal((prev) => "Women");
    } else if (e.target.checked === false && e.target.value === "Men") {
      return setIdeal((prev) => {
        if (prev !== "Women") {
          return "all";
        }
      });
    } else if (e.target.checked === false && e.target.value === "Women") {
      return setIdeal((prev) => {
        if (prev !== "Men") {
          return "all";
        }
      });
    } else {
      return setIdeal((prev) => "all");
    }
  };
  const handleSizeChange = (e) => {
    if (e.target.checked === true) {
      return setSize((prev) => e.target.value);
    } else if (e.target.checked === false && e.target.value === "S") {
      return setSize((prev) => {
        if (prev === "S") {
          return "all";
        } else {
          return prev;
        }
      });
    } else if (e.target.checked === false && e.target.value === "M") {
      return setSize((prev) => {
        if (prev === "M") {
          return "all";
        } else {
          return prev;
        }
      });
    } else if (e.target.checked === false && e.target.value === "L") {
      return setSize((prev) => {
        if (prev === "L") {
          return "all";
        } else {
          return prev;
        }
      });
    } else if (e.target.checked === false && e.target.value === "XL") {
      return setSize((prev) => {
        if (prev === "XL") {
          return "all";
        } else {
          return prev;
        }
      });
    }
  };

  return (
    <>
      <Header />
      <div className="home">
        <div className="sidebar">
          <div className="filters">
            <div className="filter_head">
              {" "}
              <span>Filters</span>{" "}
              <span className="clear_filters" onClick={handleClearFilters}>
                Clear Filters
              </span>{" "}
            </div>
            <div className="filter1">
              <h4>Size</h4>
              {sizeGrp.map((eachSize) => (
                <div key={eachSize} className="check_box">
                  <input
                    type="checkbox"
                    name="Size"
                    value={eachSize}
                    id={eachSize}
                    onChange={handleSizeChange}
                  />
                  <label className="label" htmlFor={eachSize}>
                    {eachSize}
                  </label>
                </div>
              ))}
            </div>
            <div className="filter2">
              <h4>Brand</h4>
              {brandsGrp.map((eachBrand) => (
                <div key={eachBrand}>
                  <input
                    type="checkbox"
                    name="Brand"
                    id={eachBrand}
                    value={eachBrand}
                    onChange={handleBrandChange}
                  />
                  <label className="label" htmlFor={eachBrand}>
                    {eachBrand}
                  </label>
                </div>
              ))}
            </div>
            <div className="filter3">
              <h4>Ideal for</h4>
              {["Men", "Women"].map((item) => (
                <div key={item}>
                  <input
                    type="checkbox"
                    name="Ideal"
                    id={item}
                    value={item}
                    onChange={handleIdealChange}
                  />
                  <label className="label" htmlFor={item}>
                    {item}
                  </label>
                </div>
              ))}
            </div>
            <div className="sort_grp">
              <SortByPrice />
            </div>
          </div>
        </div>
        <div className="products_grp">
          {displayProductsAfterSort?.map((item) => (
            <Product
              brand={item.brand}
              title={item.name}
              prize={item.price}
              size={item.sizes}
              img={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
