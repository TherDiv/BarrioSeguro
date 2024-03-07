"use client";
import { ReactNode } from 'react';
import { Button } from "@nextui-org/button";
import { IconType } from 'react-icons';
import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  text: string;
}

export const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <div className=" mb-20">
    <div className="flex justify-between flex-col">
        <Link href={"/Asociation/FISILOVE"}>
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
