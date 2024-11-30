import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import chatService from "../services/chatService";

function Chatbot() {
  const { id } = useParams(); // Obtiene el ID desde la URL
  const [mensajes, setMensajes] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    console.log("ID de la conversación:", id); // Verifica el ID
    const fetchMensajes = async () => {
      try {
        const response = await chatService.getMensajes(id);
        if (response) {
          console.log("Mensajes obtenidos:", response);
          setMensajes(response.mensajes);  // Accede a la propiedad 'mensajes' directamente
            setTitulo(response.titulo);      // Accede a la propiedad 'titulo' directamente
            setFecha(response.fecha_creacion); // Formateo de fecha
        } else {
          console.error("Error al obtener los mensajes");
        }
      } catch (error) {
        console.error("Error al obtener la conversación:", error);
      }
    };

    if (id) {
      fetchMensajes();
    }
  }, [id]);

  return (
    <div className="">
      <h1 className="text-center text-xl font-bold">{titulo}</h1>
      {id ? (
        <p className="text-center text-sm text-gray-600">{fecha}</p>
      ) : (
        <p className="text-center text-sm text-gray-600">Selecciona una conversación para comenzar</p>
      )}

      <div className="space-y-4 mt-4 overflow-y-auto max-h-96">
        {mensajes.length > 0 ? (
          mensajes.map((mensaje, index) => (
            <div
              key={index}
              className={`flex ${mensaje.remitente === "bot" ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`p-3 rounded-lg max-w-xs break-words ${
                  mensaje.remitente === "bot" 
                    ? "bg-secondary text-right" 
                    : "bg-primary text-white"
                }`}
              >
                <p>{mensaje.contenido}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-sm text-gray-500">No hay mensajes disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default Chatbot;