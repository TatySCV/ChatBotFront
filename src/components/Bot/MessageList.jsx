import EmptyState from "./EmptyState";
import BubbleBot from "./BubbleBot";
import BubbleUser from "./BubbeUser";
import TypewriterBubble from "./TypewriterBubble";

function MessageList({ mensajes }) {
  return (
    <>
      {mensajes.length > 0 ? (
        mensajes.map((mensaje, index) => {
          const isLastMessage = index === mensajes.length - 1; // Verificar si es el último mensaje
          return mensaje.remitente === "bot" ? (
            <BubbleBot
              key={index}
              timestamp={mensaje.timestamp}
              contenido={
                isLastMessage ? ( // Solo aplicar efecto de tipeo al último mensaje
                  <TypewriterBubble
                    texto={mensaje.contenido}
                    onComplete={() => console.log("Tipeo completado")}
                  />
                ) : (
                  mensaje.contenido
                )
              }
            />
          ) : (
            <BubbleUser
              key={index}
              contenido={mensaje.contenido}
              timestamp={mensaje.timestamp}
            />
          );
        })
      ) : (
        <EmptyState mensaje="No hay mensajes disponibles." />
      )}
    </>
  );
}

export default MessageList;