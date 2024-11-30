import EmptyState from "./EmptyState";
import BubbleBot from "./BubbleBot";
import BubbleUser from "./BubbeUser";

function MessageList({ mensajes }) {
  return (
    <>
      {mensajes.length > 0 ? (
        mensajes.map((mensaje, index) =>
          mensaje.remitente === "bot" ? (
            <BubbleBot
              key={index}
              contenido={mensaje.contenido}
              timestamp={mensaje.timestamp}
            />
          ) : (
            <BubbleUser
              key={index}
              contenido={mensaje.contenido}
              timestamp={mensaje.timestamp}
            />
          )
        )
      ) : (
        <EmptyState mensaje="No hay mensajes disponibles." />
      )}
    </>
  );
}

export default MessageList;