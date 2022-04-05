import { Route, Routes } from "react-router-dom";
import AllReviews from "./components/AllReviews/AllReviews";
import Blogs from "./components/Blogs/Blogs";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/reviews" element={<AllReviews/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
