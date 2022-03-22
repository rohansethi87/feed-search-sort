import React, { useEffect } from "react";

const SearchFilter = ({ currentPosts, changeData, searchQuery, setSearchQuery }) => {

  useEffect(() => {
      const searchData = currentPosts.filter((obj) => obj.description.includes(searchQuery));
      changeData(searchData);
  }, [searchQuery])

  return <input onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search" value={searchQuery}/>;
};

export default SearchFilter;
