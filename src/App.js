import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/blog/:id" Component={Blog}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
