"use client";
import { useEffect, useState } from 'react';
import { Button } from "@nextui-org/button";
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  text: string;
}

export const Header: React.FC<HeaderProps> = ({ text }) => {
  const [associationCode, setAssociationCode] = useState<string>(() => {
    return localStorage.getItem('associationId') || "0";
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const associationId = localStorage.getItem('associationId');
      if (associationId) {
        setAssociationCode(associationId);
      } else {
        setAssociationCode("prueba");
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Llamar a handleStorageChange al montar el componente
    handleStorageChange();

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    console.log("el codigo de asociacion es: " + associationCode);
  }, [associationCode]);

  return (
    <header className="flex flex-col w-full p-4 shadow-none">
      <div className="flex w-full justify-between">
        <Link href={"/Asociation/" + associationCode}>
          <Image
            src="/logo2.png"
            alt="Asociation"
            width={200}
            height={20}
          />
        </Link>
      </div>
      <div className="flex mt-4">
        <p className="font-bold text-5xl text-[#115DA9]">{text}</p>
      </div>
    </header>
  );
};
