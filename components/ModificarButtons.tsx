import { Button, Link } from '@nextui-org/react';
import { FaUserPlus, FaCog } from 'react-icons/fa';
import { useEffect } from 'react';

export default function ModificarButton() {
    const associationCode = localStorage.getItem('associationId');

    return (
        <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-blue-500 to-blue-700  p-4 ">
            <div className="flex flex-col items-center">
            <Link href={`/Asociation/${associationCode}/AddVecino`} className='gap-4'>

                    <Button className="mb-2 w-80  flex items-center justify-center gap-2  ">
                        <FaUserPlus />
                        Añadir vecino

                    </Button>
                </Link>
                <Link href={`/Asociation/${associationCode}/Settings`} className='gap-4'>

                    <Button className="w-80 flex items-center justify-center gap-2">
                        <FaCog />
                        Ajustes de la asociación
                    </Button>
                </Link>

            </div>
        </div>
    );
}
