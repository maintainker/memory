import styled, { keyframes } from "styled-components";

function Loading() {
  return (
    <Container>
      <Dim />
      <LoadingContainer className="letter-holder">
        <Letter className="l-1">L</Letter>
        <Letter className="l-2">o</Letter>
        <Letter className="l-3">a</Letter>
        <Letter className="l-4">d</Letter>
        <Letter className="l-5">i</Letter>
        <Letter className="l-6">n</Letter>
        <Letter className="l-7">g</Letter>
        <Letter className="l-8">.</Letter>
        <Letter className="l-9">.</Letter>
        <Letter className="l-10">.</Letter>
      </LoadingContainer>
    </Container>
  );
}

export default Loading;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const Dim = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;
const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoadingAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Letter = styled.div`
  float: left;
  font-size: 21px;
  color: #333;
  animation-name: ${LoadingAnimation};
  animation-duration: 1.6s;
  animation-iteration-count: infinite;
  animation-direction: linear;

  &.l-1 {
    animation-delay: 0.48s;
  }
  &.l-2 {
    animation-delay: 0.6s;
  }
  &.l-3 {
    animation-delay: 0.72s;
  }
  &.l-4 {
    animation-delay: 0.84s;
  }
  &.l-5 {
    animation-delay: 0.96s;
  }
  &.l-6 {
    animation-delay: 1.08s;
  }
  &.l-7 {
    animation-delay: 1.2s;
  }
  &.l-8 {
    animation-delay: 1.32s;
  }
  &.l-9 {
    animation-delay: 1.44s;
  }
  &.l-10 {
    animation-delay: 1.56s;
  }
`;
