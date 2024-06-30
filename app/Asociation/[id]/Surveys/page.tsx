"use client"
import React from 'react';
import { Footer } from '@/components/Footer'; // Asegúrate de que Footer está correctamente importado.
import Poll from '@/components/Poll'; // Verifica la ruta correcta si usas alias.

const SurveysPage = () => {
  return (
    <>
      <Footer text={'Encuestas'} />
      <div className="flex justify-center flex-col gap-20 ">
        <p className='font-bold text-xl'>Encuestas Pendientes:</p>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 mt-2">
        <Poll 
          question="¿Quién se robó las PC de la FISI?"
          date="2024-05-20"
          options={["Opción A", "Opción B", "Opción C"]}
        />
        <Poll 
          question="¿En qué invertimos lo del mes de mayo?"
          date="2024-05-15"
          options={["Opción A", "Opción B", "Opción C", "Opción D"]}
        />
        <Poll 
          question="¿Pollada o Anticuchada?"
          date="2024-06-01"
          options={["Pollada", "Anticuchada"]}
        />
        <Poll 
          question="¿Cuándo reunirnos para la próxima asamblea?"
          date="2024-06-10"
          options={["Esta semana", "La próxima semana", "No definido"]}
        />
      </div>
    </>
  );
}

export default SurveysPage;
