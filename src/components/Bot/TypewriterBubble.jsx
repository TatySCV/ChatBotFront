import React, { useEffect, useState } from "react";

function TypewriterBubble({ texto, onComplete }) {
  const [mostrarTexto, setMostrarTexto] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (typingIndex < texto.length) {
        setMostrarTexto((prev) => prev + texto[typingIndex]);
        setTypingIndex(typingIndex + 1);
      } else {
        clearInterval(timer);
        if (onComplete) {
          onComplete(); // Llamamos al callback para indicar que terminó el tipeo
        }
      }
    }, 50); // Intervalo entre cada carácter

    return () => clearInterval(timer); // Limpiar el intervalo si el componente se desmonta
  }, [texto, typingIndex, onComplete]);

  return <div>{mostrarTexto}</div>;
}

export default TypewriterBubble;