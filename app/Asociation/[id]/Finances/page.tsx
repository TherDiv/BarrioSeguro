"use client"
import { useState } from 'react';
import LoginForm from '@/components/LoginForm';
import RegisterForm from '@/components/RegisterForm';
import CodeGenerator from '@/components/CodeGenerator';
import {Input} from '@nextui-org/input';
import Link from 'next/link';
import { Action } from '@/components/Action';
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GrUserPolice } from "react-icons/gr";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import {Footer} from '@/components/Footer';
import Image from 'next/image';
import { Advertisement } from '@/components/Advertisement';

export default function FinancesPage() {

  return (
    <>
    <Footer text={'Finanzas'}/>
        <div className="flex justify-center flex-col gap-12">
      <p className='font-bold text-xl '>Marzo-2024</p>
      <Advertisement date={'28/03/24'} title={'Renovación de garita'} description={'Declaración del manejo de los ingresos de marzo en el mantimiento de las casetas de seguridad'} buttonText='Descargar Boleta'/>
      <p className='font-bold text-xl '>Febrero-2024</p>
      <Advertisement date={'25/02/24'} title={'Cobro por vigilancia'} description={'Sueldo Mensual de los guardias'} buttonText='Descargar Boleta'/>
      <Advertisement date={'28/03/24'} title={'Reparación de la pista principal'} description={'Tapar los huecos que diariamente ponian en serio peligro a los conductores'} buttonText='Descargar Boleta'/>
    </div>
    </>

  );
}
