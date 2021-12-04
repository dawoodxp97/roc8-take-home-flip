import React, { createContext, useState } from "react";
import data from "../data.json";
export const FilterContext = createContext();

export const FilterStatesProvider = ({ children }) => {
  const [size, setSize] = useState("all");
  const [brand, setBrand] = useState("all");
  const [ideal, setIdeal] = useState("all");

  const handleClearFilters = () => {
    setSize((prev) => "all");
    setBrand((prev) => "all");
    setIdeal((prev) => "all");
    document
      .querySelectorAll('input[type="checkbox"]')
      .forEach((el) => (el.checked = false));
  };
  let products = data.products;
  let displayProducts;
  if (size === "all" && brand === "all" && ideal === "all") {
    displayProducts = products;
  } else {
    let localProducts = products;
    if (size !== "all") {
      localProducts = localProducts.filter((item) => {
        return item.sizes.includes(size);
      });
    }
    if (ideal !== "all") {
      localProducts = localProducts.filter((item) => {
        return item.ideal === ideal;
      });
    }

    if (brand !== "all") {
      localProducts = localProducts.filter((item) => {
        return item.brand === brand;
      });
    }

    displayProducts = localProducts;
  }
  const value = {
    size,
    brand,
    ideal,
    setSize,
    setBrand,
    setIdeal,
    displayProducts,
    handleClearFilters,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
