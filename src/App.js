import React from "react";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import Library from "./screens/library";
import Favorites from "./screens/favorites";
import Player from "./screens/player";
import Trending from "./screens/trending";
import Feed from "./screens/feed";
import Login from "./screens/auth/login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Library></Library>}></Route>
        <Route path="favorites" element={<Favorites></Favorites>}></Route>
        <Route path="feed" element={<Feed></Feed>}></Route>
        <Route path="player" element={<Player></Player>}></Route>
        <Route path="trending" element={<Trending></Trending>}></Route>
      </Route>
      <Route path="login">
        <Route index element={<Login />}></Route>
      </Route>
    </Routes>
  );
}
