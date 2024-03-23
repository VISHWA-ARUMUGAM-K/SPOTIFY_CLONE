import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorties from "../favorites";
import Feed from "../feed";
import Library from "../library";
import Player from "../player";
import Trending from "../trending";
import "../home/home.css";
import Sidebar from "../../components/sidebar";
import Login from "../auth/login";
import { setClientToken } from "../../spotify";

export default function Home() {
  <Router>
    <div className="main-body">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/favorites" element={<Favorties />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/player" element={<Player />} />
        <Route path="/trending" element={<Trending />} />
      </Routes>
    </div>
  </Router>;
}
