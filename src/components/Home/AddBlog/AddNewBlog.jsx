import React, { useContext, useRef } from "react";
import "./styles.css";
import { blogListStore } from "../../../store/BlogsStore";

const AddNewBlog = () => {
  const { addBlogs } = useContext(blogListStore);

  const idRef = useRef(null);
  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const subCategoryRef = useRef(null);
  const descriptionRef = useRef(null);
  const authorNameRef = useRef(null);
  const authorAvatarRef = useRef(null);
  const createdAtRef = useRef(null);
  const coverRef = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = {
      id: idRef.current.value,
      title: titleRef.current.value,
      category: categoryRef.current.value,
      subCategory: subCategoryRef.current.value,
      description: descriptionRef.current.value,
      authorName: authorNameRef.current.value,
      authorAvatar: authorAvatarRef.current.value,
      createdAt: createdAtRef.current.value,
      cover: coverRef.current.value,
    };

    console.log("Form submitted:", formData); // Just for demo

    addBlogs(formData);
  };

  return (
    <div className="popup-form">
      <h2>Add New Blog</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" name="id" ref={idRef} required />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" ref={titleRef} required />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select id="category" name="category" ref={categoryRef} required>
            <option value="">Select Category</option>
            <option value="news">News</option>
            <option value="tutorials">Tutorials</option>
            {/* Add more category options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="subCategory">Sub Category:</label>
          <input
            type="text"
            id="subCategory"
            name="subCategory"
            ref={subCategoryRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            ref={descriptionRef}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="authorName">Author Name:</label>
          <input
            type="text"
            id="authorName"
            name="authorName"
            ref={authorNameRef}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="authorAvatar">Author Avatar URL:</label>
          <input
            type="text"
            id="authorAvatar"
            name="authorAvatar"
            ref={authorAvatarRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="createdAt">Created At:</label>
          <input
            type="date"
            id="createdAt"
            name="createdAt"
            ref={createdAtRef}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cover">Cover Image URL:</label>
          <input type="url" id="cover" name="cover" ref={coverRef} required />
        </div>
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default AddNewBlog;
