"use client"
import { useState } from 'react';
import LoginForm from '@/components/LoginForm';
import RegisterForm from '@/components/RegisterForm';
import CodeGenerator from '@/components/CodeGenerator';
import {Input} from '@nextui-org/input';

export default function GenerateCodePage() {
  const [name, setName] = useState('');

  return (
    <div className="flex justify-center flex-col gap-12 w-96 justify-items-center items-center">
        <Input type="text" label="Nombre de la Asociación" value={name} onValueChange={setName} className='w-3/4'/>
        {name ? <CodeGenerator associationName={name}/> : null}
    </div>
  );
}
