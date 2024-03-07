"use client"
import { useState } from 'react';
import LoginForm from '@/components/LoginForm';
import RegisterForm from '@/components/RegisterForm';
import CodeGenerator from '@/components/CodeGenerator';
import {Input} from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import Link from 'next/link';

export default function InsertCodePage() {
  const [name, setName] = useState('');

  return (
    <div className="flex justify-center flex-col gap-12 w-96 justify-items-center items-center">
        <Input type="text" label="Codigo de invitación" value={name} onValueChange={setName} className='w-3/4'/>
        <Link href={"/Asociation/" + name}>
        <Button
        color= 'success'
        className="mt-2 mb-2 px-20 py-6 "
      >
        Unirse
      </Button>
        </Link>

    </div>
  );
}
