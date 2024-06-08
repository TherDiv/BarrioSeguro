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


  const [association, setAssociation] = useState("");

  useEffect(() => {
      const storedUserData = localStorage.getItem('userData');
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
    <div className=" mb-20">
    <div className="flex justify-between flex-col">
        <Link href={"/Asociation/" + association}>
        <Image
            src="/logo2.png"
            alt="Asociation"
            width={200}
            height={20}
        />
        </Link>

        <div className="flex justify-center align-center items-center mt-16">

            <p className=" font-bold text-4xl text-[#FAFAFA]">{text}</p>
        </div>

    </div>
    </div>

  );
};
