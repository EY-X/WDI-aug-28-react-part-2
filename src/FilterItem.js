import React from "react";

const FilterItem = ({ filter, id, handleFilterSelected }) => {
  const { name, value } = filter;

  return (
    <li>
      <input
        type="radio"
        name="category"
        value={value}
        id={id}
        defaultChecked
      />
      <label onClick={() => handleFilterSelected(value)} htmlFor="filter0">
        {name}
      </label>
    </li>
  );
};

export default FilterItem;
