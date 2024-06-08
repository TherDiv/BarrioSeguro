"use client"
import { Footer } from '@/components/Footer';
import ElegirTipoVecino from '@/components/ElegirTipoVecino';

export default function AddVecino() {

  return (
    <>
      <Footer text={'Elija el tipo de Vecino'} />
      <ElegirTipoVecino />
    </>

  );
}
