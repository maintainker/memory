import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Home from "./Home";
import Layout from "@/components/Layout";
import AlbumDetail from "./Album";

function Private() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="album/:albumId" element={<AlbumDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Private;
