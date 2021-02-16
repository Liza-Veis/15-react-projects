import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, idx) => {
        return (
          <button className="filter-btn" onClick={() => filterItems(category)} key={idx}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
