// src/App.js
import "./index.css"
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login'
import User from './components/User'
import Signin from './pages/Signin'
import styled from 'styled-components';


const App = () => {
  return(
    <div className="App">
      <BrowserRouter>
        <Frame>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/*" element={<User/>} />
          </Routes>
        </Frame>
      </BrowserRouter>
    </div>
  );
}

export default App;


const Frame = styled.div`
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 375px;
  height: 812px;
  box-sizing: border-box;
  border: 1px solid black;
`;
