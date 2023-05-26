import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div id="container">
      <div id="login-form-div">
        <form>
          <h1 id="loghead">Log In</h1>
          <input
            type="text"
            name=""
            id="username"
            placeholder="Enter Your Username"
            required
          />
          <br />
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password"
            required
          />
          <br />
          <input type="submit" id="button" />
        </form>
      </div>
    </div>
  );
};

export default Login;
