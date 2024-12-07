import axios from "axios";

const API_URL = "http://localhost:9010/general/chatbot";

const chatService = {
  getConversaciones: async (user) => {
    try {
      const response = await axios.get(
        `${API_URL}/conversaciones/?user=${user}`
      ); // Ajusta el endpoint según tu backend
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

  getMensajes: async (id, user) => {
    try {
      console.log("ID de la conversación:", id);
      console.log("Usuario:", user);

      if (id === undefined) {
        id = 0;
      }

      const response = await axios.post(`${API_URL}/mensajes/`, {
        id: id, // Enviamos el ID de la conversación
        user: user.id, // Enviamos el ID del usuario
      });

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

  sendMensaje: async (mensaje, conversacion, user) => {
    try {
      const payload = {
        mensaje: mensaje, // El mensaje del usuario
        id_conversacion: conversacion.id_conversacion, // ID de la conversación
        titulo_conversacion: conversacion.titulo_conversacion, // Título de la conversación
        user: user.id, // ID del usuario
      };

      const response = await axios.post(
        `${API_URL}/respuesta-chatbot/`,
        payload
      );

      if (response.status === 200) {
        console.log("Respuesta del bot:", response.data);

        // Retorna tanto la respuesta del bot como el nuevo ID de la conversación
        return response.data;
      } else {
        console.error("Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      return { contenido: "Hubo un error al enviar el mensaje" };
    }
  },
};

export default chatService;
