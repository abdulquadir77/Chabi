import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";

const AllRoutes = () => {
  return (
    <div>
      {
        <Routes>
          <Route path="/signIn" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      }
    </div>
  );
};

export default AllRoutes;
