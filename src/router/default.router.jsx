import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const defaultRouter = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <Navigate to={"/login"} />,
  },
  {
    path: "/login",
    element: <div>Login</div>,
  },
]);
