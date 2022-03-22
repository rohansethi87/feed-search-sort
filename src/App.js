import { useEffect } from "react";
import "./App.css";
import Feed from "./pages/Feed";
import { BrowserRouter, Routes, Route, Redirect, useLocation } from "react-router-dom";

function App() {
  // function getParams(location) {
  //   const searchParams = new URLSearchParams(location.search);

  //   console.log(searchParams);
  //   // return {
  //   //   query: searchParams.get('query') || '',
  //   // };
  // }

  // useEffect(() => {
  //   getParams()
  // }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
