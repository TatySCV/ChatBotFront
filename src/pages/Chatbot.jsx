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

  useEffect(() => {
    const fetchMensajes = async () => {
      try {
        const response = await chatService.getMensajes(id);
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
    // Se agrega el mensaje del usuario
    const nuevoMensajeUsuario = {
      contenido: mensaje,
      remitente: "usuario",
      timestamp: new Date().toLocaleTimeString(),
    };
    setMensajes((prevMensajes) => [...prevMensajes, nuevoMensajeUsuario]);

    const conversacion_nueva = {
      id_conversacion: id,
      titulo_conversacion: titulo,
      fecha_creacion: fecha,
    };

    console.log("Conversación:", conversacion_nueva);

    // Enviar mensaje al servicio (simulación de llamada al backend)
    const respuestaBot = await chatService.sendMensaje(mensaje, conversacion_nueva);
    
    // Se agrega la respuesta del bot
    const nuevoMensajeBot = {
      contenido: <TypewriterBubble texto={respuestaBot} />, // Respuesta del bot con efecto de tipeo
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