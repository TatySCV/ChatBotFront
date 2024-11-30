import React, { useState, useEffect } from "react";
import { Card } from "@material-tailwind/react";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { logoutUser } from "../services/logoutService";
import { BsRobot } from "react-icons/bs";
import chatService from "../services/chatService";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [conversaciones, setConversaciones] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchConversaciones = async () => {
      const user = localStorage.getItem("user");

      try {
        const response = await chatService.getConversaciones(user); // Ajusta el endpoint según tu backend
        if (response) {
          //   const data = await response.json();
          console.log("Conversaciones obtenidas (Sidebar):", response);
          setConversaciones(response);
        } else {
          console.error("Error al obtener las conversaciones");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };

    fetchConversaciones();
  }, []);

  const handleConversationClick = (id) => {
    navigate(`/home/chatbot/${id}`); // Navegar a la página del chatbot con el ID
  };

  const handleLogout = () => {
    logoutUser(); // Llamar al servicio de logout
  };

  return (
    <Card
      className="h-full bg-primary shadow-xl border-l-4 border-primary p-4 flex flex-col justify-between"
      style={{ boxShadow: "6px 0 15px rgba(32, 33, 35, 0.7)" }}
    >
      <div className="logo text-2xl font-bold px-6 text-white flex items-center gap-x-4">
        <BsRobot />
        <strong> ChatBOT</strong>
      </div>

      <div className="flex flex-col justify-start flex-grow mt-4">
        <Menu>
          {conversaciones.length > 0 ? (
            conversaciones.map((conv) => (
              <MenuItem
                key={conv.id}
                className="text-white hover:text-primary"
                onClick={() => handleConversationClick(conv.id)} // Llama a la función con el ID
              >
                {conv.titulo || "Conversación sin título"}
              </MenuItem>
            ))
          ) : (
            <p className="text-white px-4">No hay conversaciones</p>
          )}
        </Menu>
      </div>

      <button
        onClick={handleLogout}
        className="logout border border-white text-white border-r-white-400 px-6 py-2 rounded hover:bg-purple transition duration-300"
      >
        Cerrar Sesión
      </button>
    </Card>
  );
}

export default Sidebar;
