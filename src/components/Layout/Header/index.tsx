import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <HeaderCom>
      <Container>
        <div>
          <Title to="/">
            <h1>Memory</h1>
          </Title>
        </div>
        <User>
          <span>User1</span>
        </User>
      </Container>
    </HeaderCom>
  );
}

export default Header;
const Container = styled.div`
  max-width: 1200px;
  width: calc(100% - 50px);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;
const HeaderCom = styled.header`
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  background: #fff;
`;

const Title = styled(Link)`
  color: #171717;
`;
const User = styled.div``;
