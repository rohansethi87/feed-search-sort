import React, { useState } from "react";
import Content from "../../data/mock_data.json";
import Card from "../../components/Card";
import SearchFilter from "../../components/SearchFilter";
import './Feed.css'

const Feed = () => {
  const [data, setData] = useState(Content);

  const changeData = (newData) => {
    setData(newData);
  };
  return (
    <>
      <div>Feed</div>
      <SearchFilter data={Content} changeData={changeData}/>
      <div className="container">
        {data && data.map((item) => <Card data={item} />)}
      </div>
    </>
  );
};

export default Feed;
