// SendButton.jsx
import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

function SendButton({ onSendMessage, mensaje }) {
  const handleClick = () => {
    if (mensaje.trim() !== "") {
      onSendMessage(mensaje);  // Llama la función para enviar el mensaje
    }
  };

  return (
    <button
      onClick={handleClick}
      className="ml-2 bg-secondary text-white p-4 rounded flex items-center hover:bg-black"
    >
      Enviar
      <PaperAirplaneIcon className="ml-2 h-5 w-5" />
    </button>
  );
}

export default SendButton;