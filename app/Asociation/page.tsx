"use client";
import { Asociation } from '@/components/Asociation';
import { useEffect } from 'react';

export default function AsociationPage() {
  //redirigir a homr con un useffect
  
  useEffect(() => {
    window.location.href = '/';
  }, []);

  return (
        <>
        </>
  );
}
