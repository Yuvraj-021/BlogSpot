import { createContext, useReducer } from "react";
import { blogList } from "../config/data";

export const blogListStore = createContext({
  blogsStoreList: [],
  addBlogs: () => {},
  deleteBlogs: () => {},
});

const bloglistReducer = (currBlogList, action) => {
  let newBlogList = currBlogList;
  if (action.type === "ADD_BLOG") {
    newBlogList = [action.payload, ...currBlogList];
  } else if (action.type === "DELETE_BLOG") {
    newBlogList = currBlogList.filter(
      (blog) => blog.id !== action.payload.blogid
    );
  }
  return newBlogList;
};

const BlogListProvider = ({ children }) => {
  const [blogsStoreList, dispatchBlogList] = useReducer(
    bloglistReducer,
    DEFAULT_BLOG_LIST
  );

  const addBlogs = (newBlog) => {
    dispatchBlogList({
      type: "ADD_BLOG",
      payload: {
        id: parseInt(newBlog?.id, 10), // Assuming ID field exists
        title: newBlog?.title,
        category: newBlog?.category,
        subCategory: newBlog?.subCategory,
        description: newBlog?.description,
        authorName: newBlog?.authorName,
        authorAvatar: newBlog?.authorAvatar,
        createdAt: newBlog?.createdAt, // Assuming a date picker is used
        cover: newBlog?.cover,
      },
    });
  };

  const deleteBlogs = (blogid) => {
    dispatchBlogList({
      type: "DELETE_BLOG",
      payload: {
        blogid,
      },
    });
  };

  return (
    <blogListStore.Provider value={{ blogsStoreList, addBlogs, deleteBlogs }}>
      {children}
    </blogListStore.Provider>
  );
};

export const DEFAULT_BLOG_LIST = [
  {
    id: 1,
    title: "7 CSS tools you should be using ",
    category: "development",
    subCategory: ["frontend", "ui/ux", "design"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: "John Doe",
    authorAvatar: "/assets/images/author.jpg",
    createdAt: "June 03, 2021",
    cover: "/assets/images/designer-1.jpg",
  },
  {
    id: 2,
    title: "Milan Places That Highlight The City",
    category: "travel",
    subCategory: ["vacation", "holidays", "sight seeing"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: "John Doe",
    authorAvatar: "/assets/images/author.jpg",
    createdAt: "June 03, 2021",
    cover: "/assets/images/f67396fc3cfce63a28e07ebb35d974ac.jpg",
  },
  {
    id: 3,
    title: "Online Shopping – An Alternative to Shopping in the Mall",
    category: "shopping",
    subCategory: ["e-commerce store", "clothing", "shopping store"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: "John Doe",
    authorAvatar: "/assets/images/author.jpg",
    createdAt: "June 03, 2021",
    cover: "/assets/images/fQwuyKJ9qxjSbr6REcgtmW-1200-80.jpg",
  },
  {
    id: 4,
    title: "ADVENTURE IN YOU",
    category: "adventure",
    subCategory: ["adrenaline", "stay-fit", "lifestyle"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: "John Doe",
    authorAvatar: "/assets/images/author.jpg",
    createdAt: "June 03, 2021",
    cover: "/assets/images/graphic-design-trends.png",
  },
  {
    id: 5,
    title: "Loaded BBQ Baked Potatoes",
    category: "cooking",
    subCategory: ["bbq", "food", "lifestyle"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: "John Doe",
    authorAvatar: "/assets/images/author.jpg",
    createdAt: "June 03, 2021",
    cover: "/assets/images/make-it-personal.jpg",
  },
  {
    id: 6,
    title: "Beyond the Beach",
    category: "travel",
    subCategory: ["beaches", "sea", "holidays"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: "John Doe",
    authorAvatar: "/assets/images/author.jpg",
    createdAt: "June 03, 2021",
    cover:
      "/assets/images/Purple-Combination-colors-graphic-design-predictions-1024x576-1024x576.jpg",
  },
  {
    id: 7,
    title: "Art & Perception",
    category: "art",
    subCategory: ["skill", "design", "passion"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: "John Doe",
    authorAvatar: "/assets/images/author.jpg",
    createdAt: "June 03, 2021",
    cover: "/assets/images/Synthwave-Postmodern.jpg",
  },
];

export default BlogListProvider;
