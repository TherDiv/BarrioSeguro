import { Button, Link } from '@nextui-org/react';
import { FaUserPlus, FaCog } from 'react-icons/fa';

export default function ModificarButton() {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-blue-500 to-blue-700 p-4">
            <div className="flex flex-col items-center">
                <Button className="mb-2 w-full flex items-center justify-center gap-2">
                    <Link href='/AñadirVecino' className='gap-4'>
                        <FaUserPlus />
                        Añadir vecino
                    </Link>

                </Button>
                <Button className="w-full flex items-center justify-center gap-2">
                    <Link href='/Ajustes' className='gap-4'>
                    <FaCog />
                        Ajustes de la asociación
                    </Link>
                </Button>
            </div>
        </div>
    );
}
