import React, { useContext } from "react";
import { SortContext } from "../context/SortContext";
import "./styles/SortByPrice.css";
export default function SortByPrice() {
  const { handleSortChange } = useContext(SortContext);
  return (
    <section className="sortby">
      <div className="sortby_text">SortBy:</div>
      <div>
        <button onClick={() => handleSortChange("lowToHigh")}>
          Low to High
        </button>
      </div>
      <div>
        <button onClick={() => handleSortChange("highToLow")}>
          High to Low
        </button>
      </div>
    </section>
  );
}
