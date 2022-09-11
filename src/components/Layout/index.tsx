import React from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
import Header from "./Header";

function Layout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

export default Layout;
const Container = styled.div`
  min-height: 100vh;
  background: #eee;
`;
