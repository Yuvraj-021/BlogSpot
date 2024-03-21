import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import BlogListProvider from "./store/BlogsStore";
import AddNewBlog from "./components/Home/AddBlog/AddNewBlog";

function App() {
  return (
    <BlogListProvider>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/add" Component={AddNewBlog}></Route>
            <Route path="/blog/:id" Component={Blog}></Route>
          </Routes>
        </div>
      </Router>
    </BlogListProvider>
  );
}

export default App;
