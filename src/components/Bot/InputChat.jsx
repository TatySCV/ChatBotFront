import React from "react";

function InputChat({ mensaje, setMensaje, onSendMessage }) {
  const handleChange = (e) => {
    setMensaje(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && mensaje.trim() !== "") {
      e.preventDefault();
      onSendMessage(mensaje);  // Llamamos a la función del componente padre
      setMensaje("");          // Limpiar el campo después de enviar el mensaje
    }
  };

  return (
    <div className="w-full p-2">
      <input
        type="text"
        value={mensaje}
        onChange={handleChange}    // Actualiza el estado con el mensaje ingresado
        onKeyDown={handleKeyPress} // Permite el envío del mensaje con Enter
        className="w-full h-16 p-6 bg-white text-sm text-secondary rounded-lg border border-gray-300"
        placeholder="Escribe tu mensaje..."
      />
    </div>
  );
}

export default InputChat;