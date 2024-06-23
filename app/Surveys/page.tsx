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
import React from 'react';
import Poll from '@/components/Poll';

export default function SurveysPage() {

  return (
    <>
    <Footer text={'Encuestas'}/>
        <div className="flex justify-center flex-col gap-12">
      <p className='font-bold text-xl'>Encuestas Pendientes:</p>
    </div>
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 mt-2">
      <Poll question="¿Quien se robo las pc de la FISI?"/>
      <Poll question="¿En que invertimos lo del mes de mayo?"/>
      <Poll question="¿Pollada o Anticuchada?"/>
      <Poll question="¿Cuando reunirnos para la proxima asamblea?"/>
    </div>
    </>

  );
  
}
