import React from 'react'
import { logoutUser } from '../services/logoutService';

function Navbar() {

    const handleLogout = () => {
      logoutUser(); // Llamar al servicio de logout
    };
  
  
    return (
      <nav className="w-full bg-primary text-white p-3 flex items-center justify-between fixed top-0 left-0 z-10 shadow-md">
        <div className="logo text-2xl font-bold px-6"><strong>ChatBot</strong></div>
    
        <button onClick={handleLogout} className="logout border border-white text-white border-r-white-400 px-6 py-2 rounded hover:bg-secondary transition duration-300">
          Cerrar Sesión
        </button>
      </nav>
    );
  };
  

export default Navbar