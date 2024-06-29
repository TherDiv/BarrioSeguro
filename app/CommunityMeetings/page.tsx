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

export default function CommunityMeetingsPage() {

  return (
    <>
    <Footer text={'Juntas Vecinales'}/>
        <div className="flex justify-center flex-col gap-12">
      <p className='font-bold text-xl '>Juntas Pendientes:</p>
      <Action text={'Reparación de cableado eléctrico'} icon={AiOutlineThunderbolt}/>
      <Action text={'Renovación del personal de seguridad'} icon={GrUserPolice}/>
      <Action text={'Mantenimiento de las rejas'} icon={HiOutlineWrenchScrewdriver}/>
    </div>
    </>

  );
}
