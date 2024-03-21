import React, { useContext } from "react";
import "./styles.css";
import Chip from "../../../Common/Chip/Chip";
import { Link } from "react-router-dom";
import { blogListStore } from "../../../../store/BlogsStore";
import { Delete } from "@mui/icons-material";

const Blogitem = ({
  blog: {
    id,
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    category,
    cover,
  },
}) => {
  const { deleteBlogs } = useContext(blogListStore);
  return (
    <div className="blogitem-wrap">
      <img src={cover} alt="cover" className="blogitem-cover" />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className="blogitem-desc">{description}</p>

      <footer>
        <div className="blogitem-author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className="blogitem-link" to={`/blog/${id}`}>
          ➝
        </Link>

        <span
          className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger"
          onClick={() => deleteBlogs(id)}
        >
          <Delete />
          {/* <span class="visually-hidden">Delete icon</span> */}
        </span>
      </footer>
    </div>
  );
};

export default Blogitem;
