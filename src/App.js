import "./App.css";
import Dashboard from "./components/Dashboard";
import Side from "./components/Side";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Card1 from "./components/Card1";
import Right from "./components/Right";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Box from "./components/Box";

function App() {
  return (
    <BrowserRouter>
      <div className="flex bg-[#EDF1F2]">
        <div className="w-full">
          <Side />
          <div className="xl:pl-[19rem] lg:pl-[11.2rem] pl-[6.2rem]">
            <Nav />
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/market" element={<Card1 />} />
              <Route path="/favorites" element={<Right />} />
              <Route path="/Insight" element={<Card2 />} />
              <Route path="/Wallet" element={<Box />} />
              <Route path="/Profile" element={<Card3 />} />
              <Route path="/settings" element={<Card2 />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
