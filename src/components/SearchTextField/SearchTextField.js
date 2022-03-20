import React from "react";

const SearchFilter = ({ data, changeData }) => {
  const search = (e) => {
    let sq = e.target.value;

    const newArr = data.filter((obj) => obj.description.includes(sq));
    changeData(newArr);
  };

  return <input onChange={search} placeholder="Search" />;
};

export default SearchFilter;
