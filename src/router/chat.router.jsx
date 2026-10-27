import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import LayoutUsuario from "../layout/LayoutGeneral";
import Chatbot from "../pages/Chatbot";

export const chatRouter = createBrowserRouter([
  {
    path: '/home',
    element: <LayoutUsuario />, // Asegúrate de tener un LayoutAdmin
    children: [
      {
        index: true,
        element: <Chatbot />// Renderiza el Dashboard cuando se accede a /admin
      },
      {
        path: "chatbot/:id", // Ruta dinámica para una conversación específica
        element: <Chatbot />, // El mismo componente Chatbot manejará las conversaciones
      },
      // Otras rutas para el administrador
    ]
  },
  {
    path: '*',
    element: <Navigate to="/home" /> // Redirige cualquier ruta no encontrada a /admin
  }
]);
