import React, { useState, useEffect, useContext } from "react";
import Sidebar from "./components/sidebar";
import { Outlet, Navigate } from "react-router-dom";
import { setClientToken } from "./spotify";
import Login from "./screens/auth/login";
import "./App.css";
import DataContext, { DataProvider } from "./Context/DataContext";

const Layout = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";

    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return (
    <div className="App">
      {token ? (
        <div className="main-container" style={{ display: "flex" }}>
          <DataProvider>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
          </DataProvider>
        </div>
      ) : (
        <Login></Login>
      )}
    </div>
  );
};

export default Layout;
