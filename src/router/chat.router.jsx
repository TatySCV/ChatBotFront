import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const chatRouter = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <Navigate to={"/home"} />,
  },
  {
    index: true,
    path: "/home",
    element: <div>Home</div>,
  },
  {
    path: "*",
    element: <Navigate to={"/home"} />,
  },
]);
