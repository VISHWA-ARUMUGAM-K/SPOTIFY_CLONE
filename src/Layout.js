import React, { useState, useEffect, useContext } from "react";
import Sidebar from "./components/sidebar";
import { Outlet, Navigate } from "react-router-dom";
import { setClientToken } from "./spotify";
import Login from "./screens/auth/login";
import "./App.css";
import DataContext, { DataProvider } from "./Context/DataContext";

const Layout = () => {
  // const { token } = useContext(DataContext);
  // console.log(token);
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
    //classname mainbody
    <div className="App">
      <DataProvider>
        {token ? (
          <div className="main-container" style={{ display: "flex" }}>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
          </div>
        ) : (
          <Login></Login>
        )}
      </DataProvider>
    </div>
  );
};

export default Layout;
