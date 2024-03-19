import React from 'react';
import "./styles.css";
import Blogitem from './BlogItem/Blogitem';

const Bloglist = ({blogs}) => {
  return (
    <div className="bloglist-wrap">
      {blogs.map(blog=><Blogitem blog={blog} key={blog.id} />)}
    </div>
  )
}

export default Bloglist