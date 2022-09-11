import React from "react";
import ReactDOM from "react-dom";

interface Props {
  children?: React.ReactNode;
}

function Modal({ children }: Props) {
  const container = document.querySelector("#modal") as Element;
  return ReactDOM.createPortal(children, container);
}

export default Modal;
