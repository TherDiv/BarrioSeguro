"use client";
import { Asociation } from '@/components/Asociation';
import Link from 'next/link';
import { Spinner } from "@nextui-org/react";
import { useEffect } from 'react';

export default function AsociationPage() {
  //redirigir a homr con un useffect

  useEffect(() => {
    //obtener asociation code del local storage
    const associationCode = localStorage.getItem('associationId');
    if (!associationCode) {
      window.location.href = `/`;
    }
    window.location.href = `/Asociation/${associationCode}`;
  }, []);

  return (
    <>
      <Spinner size='lg' />
    </>
  );
}
