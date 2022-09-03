import React from "react";
import useUserStore from "Shared/stores/user";
import { Private, Public } from "./page";

function App() {
  const { user } = useUserStore();
  const isLoggedIn = !!user.access;
  if (!isLoggedIn) return <Public />;
  return <Private />;
}

export default App;
