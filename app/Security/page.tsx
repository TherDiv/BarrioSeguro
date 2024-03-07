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
import Staff from '@/components/Staff';

export default function SecurityPage() {

  return (
    <>
    <Footer text={'Seguridad'}/>
        <div className="flex justify-center flex-col gap-12">
        <Staff names={'Juan Perez'} lastNames='Mercedez' phone='912645566' position={'Guardia'} schedule={'7:00 - 13:00'} />
        <Staff names={'Enrique Jean'} lastNames='Mamni' phone='952245566' position={'Guardia'} schedule={'13:00 - 19:00'} />

        <Staff names={'Noemí Claudia'} lastNames=' Quispe' phone='911164566' position={'Guardia'} schedule={'7:00 - 13:00'} />

        <Staff names={'Jaime Lora'} lastNames='Chupivilcas' phone='912855556' position={'Guardia'} schedule={'13:00 - 19:00'} />


    </div>
    </>

  );
}
