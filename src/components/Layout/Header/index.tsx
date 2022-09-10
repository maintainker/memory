import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <header>
      <Logo>
        <Link to="/">
          <h1>Memory</h1>
        </Link>
      </Logo>
    </header>
  );
}
export default Header;
const Logo = styled.div``;
