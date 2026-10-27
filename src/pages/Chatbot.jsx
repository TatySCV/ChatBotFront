import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import chatService from "../services/chatService"; // Servicio para obtener y enviar mensajes
import ConversationHeader from "../components/Bot/ConversationHeader"; // Título y fecha
import MessageList from "../components/Bot/MessageList"; // Lista de mensajes
import Scrollable from "../components/Bot/Scrollable"; // Contenedor desplazable
import InputChat from "../components/Bot/InputChat"; // Campo de texto para escribir mensaje
import SendButton from "../components/Bot/SendButton"; // Botón de enviar
import TypewriterBubble from "../components/Bot/TypewriterBubble"; // Burbuja con efecto de tipeo

function Chatbot() {
  const { id } = useParams();
  const [mensajes, setMensajes] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [mensaje, setMensaje] = useState(""); // Estado para el mensaje
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchMensajes = async () => {
      try {
        const response = await chatService.getMensajes(id, user);
        if (response) {
          setMensajes(response.mensajes);
          setTitulo(response.titulo);
          setFecha(response.fecha_creacion);
        } else {
          console.error("Error al obtener los mensajes");
        }
      } catch (error) {
        console.error("Error al obtener la conversación:", error);
      }
    };

    if (id) fetchMensajes();
  }, [id]);

  const handleSendMessage = async (mensaje) => {
    // Agregar el mensaje del usuario al estado
    const nuevoMensajeUsuario = {
      contenido: mensaje,
      remitente: "usuario",
      timestamp: new Date().toLocaleTimeString(),
    };
    setMensajes((prevMensajes) => [...prevMensajes, nuevoMensajeUsuario]);

    const conversacionActual = {
      id_conversacion: id || 0, // Usa `0` si el ID no está definido
      titulo_conversacion: titulo,
      fecha_creacion: fecha,
    };

    console.log("Conversación antes del envío:", conversacionActual);

    // Enviar el mensaje al backend
    const response = await chatService.sendMensaje(
      mensaje,
      conversacionActual,
      user
    );

    if (response.id_conversacion && conversacionActual.id_conversacion === 0) {
      // Si se creó una nueva conversación, actualiza el ID en el estado
      console.log(
        "Nueva conversación creada con ID:",
        response.id_conversacion
      );
      setTitulo(response.titulo_conversacion || "Conversación con el bot");
      setFecha(new Date().toLocaleTimeString());
      // Cambia el ID en la URL para reflejar el nuevo ID de conversación
      window.history.replaceState(
        null,
        "",
        `/chat/${response.id_conversacion}`
      );
    }

    // Agregar la respuesta del bot al estado
    const nuevoMensajeBot = {
      contenido: response.respuesta_bot,
      remitente: "bot",
      timestamp: new Date().toLocaleTimeString(),
    };
    setMensajes((prevMensajes) => [...prevMensajes, nuevoMensajeBot]);
  };

  // Prevenir el comportamiento de enviar el formulario o abrir la opción de imprimir al presionar Enter
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Previene la acción de envío del formulario o apertura del menú de impresión
      if (mensaje.trim()) {
        handleSendMessage(mensaje); // Llama a la función para enviar el mensaje
        setMensaje(""); // Limpia el campo de entrada
      }
    }
  };

  // Recargar los mensajes desde la base de datos después de que termine el tipeo
  const handleRefreshMessages = async () => {
    const response = await chatService.getMensajes(id, user);
    if (response) {
      setMensajes(response.mensajes);
    } else {
      console.error("Error al obtener los mensajes actualizados");
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Encabezado de la conversación */}
      <ConversationHeader titulo={titulo} fecha={fecha} />

      {/* Contenedor desplazable con mensajes */}
      <div className="flex-1 overflow-y-auto">
        <Scrollable>
          <MessageList mensajes={mensajes} />
        </Scrollable>
      </div>

      {/* Contenedor para el campo de texto y el botón */}
      <div className="bg-primary w-full border-t p-2">
        <div className="flex items-center">
          {/* Campo de texto para escribir mensaje */}
          <InputChat
            onSendMessage={handleSendMessage}
            setMensaje={setMensaje}
            mensaje={mensaje}
            className="flex-grow" // El campo de texto ocupa el espacio disponible
            onKeyDown={handleKeyDown} // Añadimos el evento para prevenir la acción de Enter
          />

          {/* Botón de enviar */}
          <SendButton onSendMessage={handleSendMessage} mensaje={mensaje} />
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
