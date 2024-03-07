"use client"
import { useState } from 'react';
import { Action } from '@/components/Action';
import { BsHouses } from "react-icons/bs";
import { BsHouseUp } from "react-icons/bs";
import Link from 'next/link';

export default function ActionPage() {
  return (
    <div className="flex justify-center flex-col gap-12">
      <p className='font-bold text-2xl mb-16'>¿Qué acción desea realizar?</p>
      <Link href="/GenerateCode">
      <Action text={'Crear una asociación de viviendas'} icon={BsHouses}/>
      </Link>
      <Action text={'Ingresar como vecino de una asociacion de viviendas'} icon={BsHouseUp}/>
    </div>
  );
}
