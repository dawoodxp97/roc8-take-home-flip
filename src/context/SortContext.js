import React, { createContext, useContext, useState } from "react";
import { FilterContext } from "./FilterContext";

export const SortContext = createContext();

export const SortProvider = ({ children }) => {
  const [sort, setSort] = useState("");

  const handleSortChange = (sorting) => {
    setSort((prev) => sorting);
  };
  const { displayProducts } = useContext(FilterContext);
  let displayProductsCopy = [...displayProducts];
  let displayProductsAfterSort;

  if (sort === "") {
    displayProductsAfterSort = displayProducts;
  }

  if (sort === "highToLow") {
    displayProductsAfterSort = displayProductsCopy.sort((x, y) => {
      return Number(y.price) - Number(x.price);
    });
  }
  if (sort === "lowToHigh") {
    displayProductsAfterSort = displayProductsCopy.sort(
      (x, y) => Number(x.price) - Number(y.price)
    );
  }

  const value = { displayProductsAfterSort, handleSortChange };

  return <SortContext.Provider value={value}>{children}</SortContext.Provider>;
};
