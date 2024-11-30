import axios from "axios";

const API_URL = "http://localhost:9010/general/chatbot";

const chatService = {
  getConversaciones: async (user) => {
    try {
      const response = await axios.get(`${API_URL}/conversaciones/?user=${user}`); // Ajusta el endpoint según tu backend
      if (response.status === 200) {
        console.log("Conversaciones obtenidas:", response.data);
        return response.data;
      } else {
        console.error("Error al obtener las conversaciones");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  },

    getMensajes: async (id) => {
        try {
        const response = await axios.get(`${API_URL}/mensajes/?id=${id}`); // Ajusta el endpoint según tu backend
        if (response.status === 200) {
            console.log("Mensajes obtenidos:", response.data);
            return response.data;
        } else {
            console.error("Error al obtener los mensajes");
        }
        } catch (error) {
        console.error("Error al obtener la conversación:", error);
        }
    },

    sendMensaje: async (mensaje, conversacion) => {
      try {
        // Se agrega la información de la conversación (id, titulo, etc.) al payload

        console.log("Mensaje:", mensaje);
        console.log("Conversación:", conversacion);

        const payload = {
          mensaje: mensaje,              // El mensaje del usuario
          id_conversacion: conversacion.id_conversacion,  // ID de la conversación
          titulo_conversacion: conversacion.titulo_conversacion, // Título de la conversación
          fecha_creacion: conversacion.fecha_creacion, // Fecha de creación, si es necesario
        };
    
        console.log("Payload:", payload);
      
        // Realiza la solicitud POST al backend
        const response = await axios.post(`${API_URL}/respuesta-chatbot/`, payload);
      
        // Log para revisar la respuesta
        console.log("Respuesta del bot:", response.data);
      
        // Retorna la respuesta del bot
        return response.data;
      } catch (error) {
        console.error("Error en la solicitud:", error);
        return { contenido: 'Hubo un error al enviar el mensaje' };  // Mensaje de error predeterminado
      }
    },

};

export default chatService;
