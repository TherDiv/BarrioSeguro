"use client"

import { Header } from '@/components/Header';
import { Advertisement } from '@/components/Advertisement';
import Link from 'next/link';
import Image from 'next/image';

export default function FinancesPage() {

  return (
    <>
  
  <div className="items-start">
      <Link href={"/Asociation/"}>
          <Image
            src="/logo2.png"
            alt="Asociation"
            width={200}
            height={20}
          />
      </Link>
      <p className="font-bold text-5xl text-[#115DA9] mt-20">{"Finanzas"}</p>
    
       <div className="flex flex-col mt-10 gap-5">
        <p className='font-bold text-xl text-black text-start mt-20'>Marzo-2024</p>
        <div className="border-2 border-black p-5 rounded-2xl space-y-5"> 
          <Advertisement type='Anuncio' date={'28/03/24'} title={'Renovación de garita'} description={'Declaración del manejo de los ingresos de marzo en el mantimiento de las casetas de seguridad'} buttonText='Descargar Boleta'/>   
        </div>
      <p className='font-bold text-xl text-black text-start '>Febrero-2024</p>
      <div className="border-2 border-black p-5 rounded-2xl space-y-5"> 
       <Advertisement type='Anuncio' date={'25/02/24'} title={'Cobro por vigilancia'} description={'Sueldo Mensual de los guardias'} buttonText='Descargar Boleta'/>
       <Advertisement type='Anuncio' date={'28/03/24'} title={'Reparación de la pista principal'} description={'Tapar los huecos que diariamente ponian en serio peligro a los conductores'} buttonText='Descargar Boleta'/>
     
      </div>
      </div>
    </div>
    </>

  );
}
