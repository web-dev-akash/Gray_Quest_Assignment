import React from "react";
import { Routes, Route } from "react-router-dom";
import { User } from "../Pages/User";
import { UserDetials } from "../Pages/UserDetials";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<User />}></Route>
      <Route path="/:id" element={<UserDetials />}></Route>
    </Routes>
  );
};
