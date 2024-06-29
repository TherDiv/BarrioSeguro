"use client"

import {Footer} from '@/components/Footer';
import { Advertisement } from '@/components/Advertisement';

export default function FinancesPage() {

  return (
    <>
    <Footer text={'Finanzas'}/>
        <div className="flex justify-center flex-col gap-12">
      <p className='font-bold text-xl '>Marzo-2024</p>
      <Advertisement type='Anuncio' date={'28/03/24'} title={'Renovación de garita'} description={'Declaración del manejo de los ingresos de marzo en el mantimiento de las casetas de seguridad'} buttonText='Descargar Boleta'/>
      <p className='font-bold text-xl '>Febrero-2024</p>
      <Advertisement type='Anuncio' date={'25/02/24'} title={'Cobro por vigilancia'} description={'Sueldo Mensual de los guardias'} buttonText='Descargar Boleta'/>
      <Advertisement type='Anuncio' date={'28/03/24'} title={'Reparación de la pista principal'} description={'Tapar los huecos que diariamente ponian en serio peligro a los conductores'} buttonText='Descargar Boleta'/>
    </div>
    </>

  );
}
