import AOS from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import AllReviews from "./components/AllReviews/AllReviews";
import Blogs from "./components/Blogs/Blogs";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import HeadPhoneDetail from "./components/HeadPhoneDetails/HeadPhoneDetail";

function App() {
    useEffect(()=>{
      AOS.init()
    },[])
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/reviews" element={<AllReviews/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/specifications" element={<HeadPhoneDetail/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
