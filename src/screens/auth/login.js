import React from "react";
import { loginEndpoint } from "../../spotify";
import "./login.css";
function Login() {
  console.log(loginEndpoint);
  return (
    <div className="login-page">
      <img src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="spotify logo" className="logo"></img>
      <h1 className="name">SPOTIFY</h1>
      <a href={loginEndpoint}>
        <div className="btn-class">LOG IN</div>
      </a>
    </div>
  );
}

export default Login;
