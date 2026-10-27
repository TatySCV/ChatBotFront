import React, { useState } from "react";
import Typewriter from "typewriter-effect";

function TypewriterBubble({ texto, onComplete }) {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  console.log("Texto recibido por TypewriterBubble:", texto);

  return (
    <div>
      {isTypingComplete ? (
        <span>{texto}</span>
      ) : (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(texto)
              .callFunction(() => {
                setIsTypingComplete(true);
                if (onComplete) onComplete();
              })
              .start();
          }}
        />
      )}
    </div>
  );
}

export default TypewriterBubble;