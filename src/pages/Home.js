import React from "react";
import Videos from "../comonent/grid/Videos";
import Tags from "../comonent/tag/Tags";
import Pagination from "../comonent/ui/Pagination";

const Home = () => {
  return (
    <>
      <Tags />
      <Videos />
      <Pagination />
    </>
  );
};

export default Home;
