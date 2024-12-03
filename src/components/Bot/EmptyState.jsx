import React, { useState, useEffect } from "react";
import { Spin } from "antd"; // Importa el Spinner de Ant Design
import { BsRobot } from "react-icons/bs"; // Importa el ícono de robot
import '../../styles.css'

function EmptyState({ mensaje }) {
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar el spinner
  const [showIcon, setShowIcon] = useState(false); // Estado para mostrar el icono después del delay

  useEffect(() => {
    // Temporizador de 5 segundos para ocultar el spinner y mostrar el icono
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowIcon(true);
    }, 5000); // 5 segundos

    // Limpieza del temporizador si el componente se desmonta antes de los 5 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full mt-48">
      {/* Muestra el spinner mientras se carga */}
      {isLoading ? (
        <Spin size="large" className="custom-spin text-6xl"  />
      ) : (
        <>
          {/* Muestra el ícono después de 5 segundos */}
          <BsRobot size={100} className="text-primary" />
          <p className="text-center text-xl text-primary mt-2">{mensaje}</p>
        </>
      )}
    </div>
  );
}

export default EmptyState;