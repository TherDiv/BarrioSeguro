"use client"
import { useState } from 'react';
import LoginForm from '@/components/LoginForm';
import RegisterForm from '@/components/RegisterForm';
import CodeGenerator from '@/components/CodeGenerator';
import {Input} from '@nextui-org/input';
import Link from 'next/link';
import { Action } from '@/components/Action';
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GrUserPolice } from "react-icons/gr";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import {Footer} from '@/components/Footer';
import Image from 'next/image';

export default function SurveysPage() {

  return (
    <>
    <Footer text={'Encuestas'}/>
        <div className="flex justify-center flex-col gap-12">
      <p className='font-bold text-xl '>Encuestas Pendientes:</p>
      <Image src={"/encuesta1.png"}  width={600} height={200} alt='encuesta1'/>
      <Image src={"/encuesta2.png"}  width={600} height={200} alt='encuesta2'/>
      <Image src={"/encuesta3.png"}  width={600} height={200} alt='encuesta3'/>
    </div>
    </>

  );
}
