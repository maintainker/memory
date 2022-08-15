import React from "react";
import { Private, Public } from "./page";

function App() {
  const isLoggedIn = false;
  if (!isLoggedIn) return <Public />;
  return <Private />;
}

export default App;
