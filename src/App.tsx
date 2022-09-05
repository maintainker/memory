import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUser } from "Shared/api/users/index.api";
import { Private, Public } from "./page";

function App() {
  const { data } = useQuery(["USER_DATA"], getUser, { enabled: false });
  // const { user } = useUserStore();
  const isLoggedIn = !!data?.name;
  if (!isLoggedIn) return <Public />;
  return <Private />;
}

export default App;
