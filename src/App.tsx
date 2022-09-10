import React, { useEffect } from "react";
import useUserStore from "Shared/stores/user";
import { Private, Public } from "./page";

function App() {
  const { user, isBoot, boot } = useUserStore();
  const isLoggedIn = !!user?.access;
  useEffect(() => {
    boot();
  }, [boot]);
  if (!isBoot) return <div></div>;
  if (!isLoggedIn) return <Public />;
  return <Private />;
}

export default App;
