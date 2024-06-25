import React from 'react';
import { FaUserFriends, FaUserTie, FaDollarSign, FaShieldAlt } from 'react-icons/fa';
import ElegirTipoVecino from '@/components/ElegirTipoVecino';

const AddNeighborPage: React.FC = () => {
  const handleButtonClick = (type: string) => {
    console.log(`Button clicked: ${type}`);
    // Aquí puedes manejar la navegación o cualquier otra acción al hacer clic en el botón
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-bold mb-4">Añadir Vecino</h1>
      <p className="mb-8">Elija el tipo de vecino</p>
      <div className="grid grid-cols-2 gap-4">
        <ElegirTipoVecino 
          type="resident" 
          label="Residente" 
          icon={<FaUserFriends />} 
          onClick={handleButtonClick} 
        />
        <ElegirTipoVecino 
          type="secretary" 
          label="Secretario" 
          icon={<FaUserTie />} 
          onClick={handleButtonClick} 
        />
        <ElegirTipoVecino 
          type="treasurer" 
          label="Tesorero" 
          icon={<FaDollarSign />} 
          onClick={handleButtonClick} 
        />
        <ElegirTipoVecino 
          type="security" 
          label="Vigilante" 
          icon={<FaShieldAlt />} 
          onClick={handleButtonClick} 
        />
      </div>
    </div>
  );
}

export default AddNeighborPage;
