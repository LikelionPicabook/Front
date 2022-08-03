// src/App.js

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Search from './pages/Search';
import MyPage from './pages/MyPage'
import Nav from './components/Nav'

const App = () => {
  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/mypage" element={<MyPage/>} />
        </Routes>
        <Nav/>
      </BrowserRouter>
    </div>
  );
}

export default App;