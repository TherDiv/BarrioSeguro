"use client"
import { useState } from 'react';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';

export default function InsertCodePage() {
  const [code, setCode] = useState('');
  const router = useRouter();

  const handleJoin = () => {
    const storedCodes = localStorage.getItem('associationCodes');
    if (storedCodes) {
      const associationCodes = JSON.parse(storedCodes);
      const associationName = Object.keys(associationCodes).find(name => associationCodes[name] === code);
      if (associationName) {
        router.push(`/${code}`);
      } else {
        alert("Código de invitación no válido.");
      }
    } else {
      alert("No hay asociaciones creadas.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-8">
      <div className="flex flex-col items-center w-full max-w-md p-4 bg-white rounded-xl shadow-md ">
        <p className='font-bold text-3xl text-[#115DA9]'>Ingrese su código</p>
        <Input type="text" label="Código de invitación" value={code} onChange={e => setCode(e.target.value)} className='w-full mt-4'/>
        <Button
          color='success'
          className="mt-4"
          onPress={handleJoin}
        >
          Unirse
        </Button>
      </div>

      <div className="flex flex-col items-center w-full max-w-md p-4 bg-white  shadow-md rounded-xl">
        <p className="font-bold mt-2 text-[#115DA9]">*utilize el código brindado por su director de su asociación</p>
      </div>
    </div>
  );
}


