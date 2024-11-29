import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login";

export const defaultRouter = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <Navigate to={"/login"} />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Navigate to={"/login"} />,
  },
]);
