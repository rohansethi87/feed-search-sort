import React, { useState } from "react";
import Content from "../../data/mock_data.json";
import Card from "../../components/FeedCard";
import SearchFilter from "../../components/SearchTextField";
import Pagination from "../../components/Pagination";
import "./Feed.css";

const Feed = () => {
  const [data, setData] = useState(Content);
  const [postsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const postLength = 100;

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const changeData = (newData) => {
    setData(newData);
  };

  return (
    <>
      <div>Feed</div>
      <SearchFilter data={currentPosts} changeData={changeData} />
      <div className="container">
        {currentPosts && currentPosts.map((item) => <Card data={item} />)}
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
