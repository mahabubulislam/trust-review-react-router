import { Route, Routes } from "react-router-dom";
import AllReviews from "./components/AllReviews/AllReviews";
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
      </Routes>
    </div>
  );
}

export default App;
