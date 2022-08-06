// src/components/Nav.js

import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Nav = () => {
  return (
    <Navbar>
      <div>
        <NavLink to="/">
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to="/search">
          Search
        </NavLink>
      </div>
      <div>
        <NavLink to="/mypage">
          MyPage
        </NavLink>
      </div>
    </Navbar>
  )
}

export default Nav;


const Navbar = styled.nav`
  position: absolute;
  bottom: 0;
  height: 90px;
  width: 100%;
  background-color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;