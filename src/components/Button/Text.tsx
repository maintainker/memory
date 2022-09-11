import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

function TextButton({ children, ...props }: Props) {
  return <Button {...props}>{children}</Button>;
}

export default TextButton;

const Button = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
`;
