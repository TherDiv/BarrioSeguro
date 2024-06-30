"use client"
import { Header } from '@/components/Header';
import ElegirTipoVecino from '@/components/ElegirTipoVecino';

export default function AddVecino() {

  return (
    <>
      <Header text={'Elija el tipo de Vecino'} />
      <ElegirTipoVecino />
    </>

  );
}
