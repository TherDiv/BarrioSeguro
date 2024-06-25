import React from 'react';

interface ElegirTipoVecinoProps {
  type: string;
  label: string;
  icon: React.ReactNode;
  onClick: (type: string) => void;
}

const ElegirTipoVecino: React.FC<ElegirTipoVecinoProps> = ({ type, label, icon, onClick }) => {
  return (
    <div 
      onClick={() => onClick(type)} 
      className="cursor-pointer flex flex-col items-center justify-center p-4 m-2 bg-green-500 rounded-lg shadow-md text-white w-24 h-24"
    >
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-center">{label}</div>
    </div>
  );
}

export default ElegirTipoVecino;
