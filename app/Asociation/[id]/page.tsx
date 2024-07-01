"use client";
import { Asociation } from '@/components/Asociation';
import { useEffect } from 'react';

export default function AsociationPage({ params }: any) {
  const { id } = params;



  return (
    <div className=" ">
      <Asociation id={id} />
    </div>
  );
}
