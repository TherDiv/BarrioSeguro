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
    <div className="flex justify-center flex-col gap-12 w-96 justify-items-center items-center">
      <Input type="text" label="Codigo de invitación" value={code} onValueChange={setCode} className='w-3/4'/>
      <Button
        color='success'
        className="mt-2 mb-2 px-20 py-6"
        onPress={handleJoin}
      >
        Unirse
      </Button>
    </div>
  );
}
