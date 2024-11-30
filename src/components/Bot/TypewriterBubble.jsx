import React, { useState } from "react";
import Typewriter from "typewriter-effect";

function TypewriterBubble({ texto, onComplete }) {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  return (
    <div>
      {isTypingComplete ? (
        <span>{texto}</span> // Mostramos el texto estático
      ) : (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(texto) // Escribimos el texto
              .callFunction(() => {
                setIsTypingComplete(true); // Cambiamos el estado
                if (onComplete) onComplete(); // Llamamos al callback si existe
              })
              .start(); // Inicia el efecto
          }}
        />
      )}
    </div>
  );
}

export default TypewriterBubble;