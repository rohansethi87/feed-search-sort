import React, { useEffect } from "react";

const Filter = ({ options, data, changeData, filterQuery, setFilterQuery }) => {

  const filterData = (selection) => {
    const property = selection
    const filteredData = data.sort((a, b) => (a[property] > b[property]) ? 1 : -1)
    changeData(filteredData) 
  }

  useEffect(() => {
    filterData(filterQuery)
  }, [filterQuery])

  return (
    <div>
      <select name="filter" onChange={(e) => setFilterQuery(e.target.value)}>
        <option value=""  disabled>Select</option>
        {options &&
          options.map((option) => (
            <option value={option.value} selected={option.selected} >{option.name}</option>
          ))}
      </select>
    </div>
  );
};

export default Filter;
