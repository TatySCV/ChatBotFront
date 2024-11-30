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

};

export default chatService;
