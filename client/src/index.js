import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "./dist/output.css";
import App from "./App";
import Navbar from "./components/navbar";
import Home from "./components/home";
// import Login from './components/login';
import Register from "./components/register.js";
import Loginpage from "./components/Loginpage.js";
import BizzGPT from "./components/bizzgpt.js";
import Evaluate from "./components/evaluate.js";
import Sharktank from "./components/videoconf/Sharktank.js";
import Roompage from "./components/videoconf/Roompage.js";
import Features from "./components/features.js";
// import Paytm from "./components/paytm.js";

import Marketplace from "./components/marketplace.js";
import Temp from "./components/videoconf/temp.js";
import Main from "./components/videoconf/main.js";
import Live from "./components/videoconf/live.js";
import MarketplacePost from "./components/marketplace_post.js";
import Idea from "./components/idea.js";
import News from "./components/news.js";
import Carousel from "./components/carousel/Carousel.js";
import ShowcasePost from "./components/showcase_post.js";
export const serverurl = "http://localhost:8000";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Navbar />
    <div className="mb-16 bg-base-200"></div>
    <Routes>
      <Route path="/" element={<Loginpage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/bizzgpt" element={<BizzGPT />} />
      <Route path="/evaluate" element={<Evaluate />} />
      <Route path="/sharktank" element={<Live />} />
      <Route path="/features" element={<Features />} />
      {/* <Route path="/paytm" element={<Paytm/>} /> */}
      <Route path="/room/:roomid" element={<Roompage />} />
      <Route path="/video" element={<Main />} />
      {/* <Route path="/live" element={<Live />} /> */}
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/marketplace/post" element={<MarketplacePost />} />
      <Route path="/showcase" element={<Idea />} />
      <Route path="/showcase/post" element={<ShowcasePost />} />
      <Route path="/news" element={<News />} />
      <Route path="/hello" element={<Carousel />} />
    </Routes>
  </Router>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
