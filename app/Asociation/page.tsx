"use client";
import { Asociation } from '@/components/Asociation';
import Link from 'next/link';
import { useEffect } from 'react';

export default function AsociationPage() {
  //redirigir a homr con un useffect
  
  useEffect(() => {
    window.location.href = '/';
  }, []);

  return (
        <>
        <h1>
          Pagina no encontrada, 
        </h1>
        <Link className='text-blue-500 underline ' href="/">volver a la  página principal</Link>
        </>
  );
}
