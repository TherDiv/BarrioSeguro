"use client";
import { ReactNode, useEffect, useState } from 'react';
import { Button } from "@nextui-org/button";
import { IconType } from 'react-icons';
import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  text: string;
}

export const Footer: React.FC<FooterProps> = ({ text }) => {
  const [associationCode, setAssociationCode] = useState("");
  const [association, setAssociation] = useState("");

  useEffect(() => {
    const associationId = localStorage.getItem('associationId');
    if (associationId) {
      setAssociationCode(associationId);
    }
      const storedCodes = localStorage.getItem('associationCodes');
      if (storedCodes) {
        const associationCodes = JSON.parse(storedCodes);
      const associationCode = Object.values(associationCodes)[0] as string;
      if (associationCode) {
          setAssociation(associationCode);
      }
      }
  }
  , []);

  return (
    <div className="flex flex-col items-center justify-start">
    <div className="">
      <Link href={"/Asociation/" + associationCode}>
        <Image
          src="/logo2.png"
          alt="Asociation"
          width={200}
          height={20}
        />
      </Link>
    </div>
    <div className="flex justify-center items-center mt-10 mb-10">
      <p className="font-bold text-5xl text-[#115DA9] ">{text}</p>
    </div>
  </div>

  );
};
