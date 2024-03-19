import React from "react";
import Header from "../components/Home/Header/Header";
import Searchbar from "../components/Home/SearchBar/Searchbar";
import Bloglist from "../components/Home/BlogList/Bloglist";
import { blogList } from "../config/data";

const Home = () => {
  return (
    <div>
      {/* Page Header */}
      <Header />
      {/* Search Bar */}
      <Searchbar/>
      {/* Blog List & Empty List */}
      <Bloglist blogs={blogList} />
    </div>
  );
};

export default Home;
