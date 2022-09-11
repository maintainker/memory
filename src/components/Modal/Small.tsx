import React from "react";
import styled from "styled-components";
import Modal from ".";

interface Props {
  children?: React.ReactNode;
  onClose?: () => void;
}

function SmallModal({ children, onClose }: Props) {
  return (
    <Modal>
      <Container>
        <Dim onClick={onClose} />
        <Content>{children}</Content>
      </Container>
    </Modal>
  );
}

export default SmallModal;

const Dim = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;
const Container = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
`;

const Content = styled.div`
  background: #fff;
  min-width: 100px;
  min-height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
