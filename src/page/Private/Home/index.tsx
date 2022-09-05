import React from "react";
import apiInstant from "Shared/api";

function Home() {
  const tmp = async () => {
    await apiInstant.get("/users/token");
  };
  return (
    <>
      <button onClick={tmp}>일단 눌러</button>
    </>
  );
}

export default Home;
