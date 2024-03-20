import React, { useState } from "react";
import Header from "../components/Home/Header/Header";
import Searchbar from "../components/Home/SearchBar/Searchbar";
import Bloglist from "../components/Home/BlogList/Bloglist";
import { blogList } from "../config/data";
import Emptylist from "../components/Common/EmptyList/Emptylist";

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearchResults();
  };

  //search blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  return (
    <div>
      {/* Page Header */}
      <Header />
      {/* Search Bar */}
      <Searchbar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {/* Blog List & Empty List */}
      {!blogs.length ? <Emptylist /> : <Bloglist blogs={blogs} />}
    </div>
  );
};

export default Home;
