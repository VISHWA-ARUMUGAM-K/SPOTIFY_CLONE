import React, { useEffect, useState } from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { MdFavorite, MdSpaceDashboard } from "react-icons/md";
import { FaGripfire, FaPlay, FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import apiclient from "../../spotify";

export default function Sidebar() {
  const [image, setImage] = useState("https://images.unsplash.com/photo-1677032448306-fc2de110276d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60");

  useEffect(() => {
    apiclient.get("/me").then((response) => setImage(response.data.images[0].url));
  });

  return (
    <div className="sidebar-container">
      <img src={image} className="profile-tag" alt=" Profile" />

      <div>
        <SidebarButton title="Feed " to="/feed" icon={<MdSpaceDashboard />}></SidebarButton>
        <SidebarButton title="Trending " to="/trending" icon={<FaGripfire />}></SidebarButton>
        <SidebarButton title="Player" to="/player" icon={<FaPlay />}></SidebarButton>
        <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />}></SidebarButton>
        <SidebarButton title="Library" to="/" icon={<IoLibrary />}></SidebarButton>
      </div>

      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />}></SidebarButton>
    </div>
  );
}
