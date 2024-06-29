"use client"
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function LoginForm() {
    const [formData, setFormData] = useState({
        dni: "",
        contraseña: ""
    });
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async () => {
        try {
            const response = await fetch(process.env.BACKEND_URL + '/vecinos/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Credenciales inválidas');
            }

            // Si la respuesta es exitosa, puedes manejar la respuesta como sea necesario
            // Por ejemplo, redirigir al usuario a la página de inicio después del login
            router.push('/inicio'); // Cambia la ruta según tu aplicación

        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setError('Credenciales inválidas'); // Manejo básico del error de credenciales inválidas
        }
    };

    const handleChange = (key: string, value: string) => {
        setFormData({
            ...formData,
            [key]: value
        });
    };

    return (
        <>
            <div className="flex w-full flex-wrap gap-6">
                <Input type="text" label="DNI" value={formData.dni} onValueChange={(value) => handleChange('dni', value)} />
                <Input type="password" label="Contraseña" value={formData.contraseña} onValueChange={(value) => handleChange('contraseña', value)} />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <Button className="mt-6 px-24 py-6 bg-[#38A911]" onPress={handleLogin}>
                <p className="text-lg">
                    Iniciar Sesión
                </p>
            </Button>
        </>
    );
}
