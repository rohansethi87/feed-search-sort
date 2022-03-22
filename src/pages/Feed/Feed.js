import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./Feed.css";
import Content from "../../data/mock_data.json";
import Card from "../../components/FeedCard";
import SearchFilter from "../../components/SearchTextField";
import Pagination from "../../components/Pagination";
import Filter from "../../components/Filter";

const Feed = () => {
  const [filteredData, setFilteredData] = useState(Content);
  const [pageData, setPageData] = useState(Content)
  const [postsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterQuery, setFilterQuery] = useState("name")
  let location = useLocation();
  let navigate = useNavigate();

  const filterOptions = [
    { name: "Name", value: "name", selected: true },
    { name: "Modified Date", value: "dateLastEdited", selected: false },
  ];

  const postLength = Content.length;

  const paginate = (pageNumber) => {
    setCurrentPage(() => pageNumber);
  };

  const updateURL = ({ query = "" }) => {
    const searchParams = new URLSearchParams();
    searchParams.set("query", query);
    let URL = searchParams.toString();
    navigate(`?${URL}`);
  };

  const setSearchData = (searchData) => {
    updateURL({ query: searchQuery });
    setFilteredData(searchData)
  };

  const getSearchParams = (queryString) => {
    const searchParams = new URLSearchParams(location.search);
    return {
      query: searchParams.get(queryString) || "",
    };
  };

  useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    setPageData(() => Content.slice(indexOfFirstPost, indexOfLastPost));
    setFilteredData(() => Content.slice(indexOfFirstPost, indexOfLastPost));
    setSearchQuery('')
  }, [currentPage, postsPerPage])

  useEffect(() => {
    const searchParams = getSearchParams("query");
    setSearchQuery(searchParams.query);
  }, []);

  return (
    <>
      <div>Feed</div>
      <SearchFilter
        currentPosts={pageData}
        changeData={setSearchData}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
       <Filter options={filterOptions} data={filteredData} changeData={setSearchData} filterQuery={filterQuery} setFilterQuery={setFilterQuery}/>
      <div className="container">
        {filteredData &&
          filteredData.map((item, i) => <Card data={item} key={i} />)}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={postLength}
        paginate={paginate}
      />
    </>
  );
};

export default Feed;
