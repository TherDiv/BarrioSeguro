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

        <div className="flex justify-center flex-col gap-20 mb-56">
        <Footer text={'Juntas Vecinales'}/>
        </div>
        <div className="flex flex-col gap-10 -mt-32 mb-56"> 
      <Action text={'Reparación de cableado eléctrico'} icon={AiOutlineThunderbolt}/>
      <Action text={'Renovación del personal de seguridad'} icon={GrUserPolice}/>
      <Action text={'Mantenimiento de las rejas'} icon={HiOutlineWrenchScrewdriver}/>
    </div>
    </>

  );
}
