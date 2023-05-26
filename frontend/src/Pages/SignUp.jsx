import React from "react";
import "./signup.css";

const SingUp = () => {
  return (
    <div id="container">
      <nav></nav>
      <div id="signup-form-div">
        <form>
          <h1>Sign Up</h1>
          <input type="text" id="name" placeholder="Enter Your Name" required />
          <br />
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email Address"
            required
          />
          <br />
          <input
            type="password"
            id="password"
            placeholder="Create New Password"
            required
          />
          <br />
          <input
            type="text"
            id="username"
            placeholder="Enter your UserName"
            required
          />
          <button id="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
