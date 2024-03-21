import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Home/Header/Header";
import Searchbar from "../../components/Home/SearchBar/Searchbar";
import Bloglist from "../../components/Home/BlogList/Bloglist";
import { blogList } from "../../config/data";
import Emptylist from "../../components/Common/EmptyList/Emptylist";
import { blogListStore as BlogListData } from "../../store/BlogsStore";
import "./styles.css";
import Add from "@mui/icons-material/Add";
import AddNewBlog from "../../components/Home/AddBlog/AddNewBlog";

const Home = () => {
  const { blogsStoreList } = useContext(BlogListData);
  console.log("Blog store", blogsStoreList);

  const [blogs, setBlogs] = useState(blogsStoreList);
  const [searchKey, setSearchKey] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen((prevState) => !prevState); // Update state based on previous value
    setBlogs(blogsStoreList);
  };

  useEffect(() => {
    // Update blogs state whenever blogsStoreList changes
    setBlogs(blogsStoreList);
  }, [blogsStoreList]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearchResults();
  };

  //search blog by category
  const handleSearchResults = () => {
    const allBlogs = blogsStoreList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  const handleClearSearch = () => {
    setBlogs(blogsStoreList);
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

      <button class="add-button" onClick={togglePopup}>
        <Add />
      </button>

      {isPopupOpen && <AddNewBlog></AddNewBlog>}
      {/* <div>
        <AddNewBlog />
      </div> */}
    </div>
  );
};

export default Home;
