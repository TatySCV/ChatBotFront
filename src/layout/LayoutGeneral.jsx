import React from 'react';
import { Outlet } from 'react-router-dom'; // Este componente se usa para renderizar las rutas hijas
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const LayoutGeneral = () => {
    return (
        <div className="flex h-screen w-screen">
          {/* Sidebar de navegación con un ancho fijo */}
          <div className="w-1/5"> {/* Ajusta el ancho del Sidebar aquí */}
            <Sidebar />
          </div>
        
         <div className="flex-1 flex flex-col">

          {/* Contenido principal 
            Navbar con el logo y el título 
            <Navbar /> */}
            
            <main className="flex-1 p-4 overflow-y-auto bg-black text-white">
              <Outlet /> {/* Aquí se renderizarán las rutas hijas */}
            </main>
          </div>
        </div>
      );
    };

export default LayoutGeneral;