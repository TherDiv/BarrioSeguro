"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useMemo, useState } from "react";
import { useRouter } from 'next/navigation';

type FormData = {
    dni: string;
    nombre: string;
    apellido: string;
    direccion: string;
    genero: string;
    clas_vecino: string;
    id_asociacion: string;
    num_celular: string;
    correo: string;
    contraseña: string;
    confirmPassword: string;
};

export default function RegisterForm() {
    const [formData, setFormData] = useState<FormData>({
        dni: "",
        nombre: "",
        apellido: "",
        direccion: "",
        genero: "",
        clas_vecino: "Excelente",  // Valor predeterminado
        id_asociacion: "52Ax44",   // Valor predeterminado
        num_celular: "",
        correo: "",
        contraseña: "",
        confirmPassword: ""
    });

    const router = useRouter();

    const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
    const validateDNI = (value: string) => value.length === 8 && !isNaN(parseInt(value));
    const validatePasswordMatch = (password: string, confirmPassword: string) => password === confirmPassword;

    const isEmailInvalid = useMemo(() => {
        if (formData.correo === "") return false;
        return validateEmail(formData.correo) ? false : true;
    }, [formData.correo]);

    const isDNIInvalid = useMemo(() => {
        if (formData.dni === "") return false;
        return validateDNI(formData.dni) ? false : true;
    }, [formData.dni]);

    const isPasswordMatchInvalid = useMemo(() => {
        if (formData.contraseña === "" || formData.confirmPassword === "") return false;
        return validatePasswordMatch(formData.contraseña, formData.confirmPassword) ? false : true;
    }, [formData.contraseña, formData.confirmPassword]);

    const handleCreateAccount = async () => {
        try {
            const headers = new Headers();
            headers.append('accept', 'application/json');
            headers.append('access_token', process.env.NEXT_PUBLIC_BACKEND_API_KEY || '');
            headers.append('Content-Type', 'application/json');
            headers.append('ngrok-skip-browser-warning', 'true');

            const { confirmPassword, ...dataToSend } = formData;  // Excluye el campo confirmPassword

            const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/vecinos', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(dataToSend)
            });

            if (!response.ok) {
                throw new Error('Error al registrar');
            }
            //guardar en el local storage el dni
            localStorage.setItem('user_dni', formData.dni);
            router.push('/Actions');

        } catch (error) {
            console.error('Error al registrar:', error);
        }
    };

    return (
        <>
            <div className="flex w-full flex-wrap gap-6">
                <Input type="text" label="Nombres" value={formData.nombre} onValueChange={(value: string) => setFormData({ ...formData, nombre: value })} />
                <Input type="text" label="Apellidos" value={formData.apellido} onValueChange={(value: string) => setFormData({ ...formData, apellido: value })} />
                <Input type="text" label="DNI" value={formData.dni} isInvalid={isDNIInvalid} errorMessage={isDNIInvalid && "Ingrese un DNI válido"} onValueChange={(value: string) => setFormData({ ...formData, dni: value })} />
                <Input type="text" label="Dirección" value={formData.direccion} onValueChange={(value: string) => setFormData({ ...formData, direccion: value })} />
                <Input type="email" label="Email" value={formData.correo} isInvalid={isEmailInvalid} errorMessage={isEmailInvalid && "Ingrese un correo válido"} onValueChange={(value: string) => setFormData({ ...formData, correo: value })} />
                <Input type="password" label="Contraseña" value={formData.contraseña} onValueChange={(value: string) => setFormData({ ...formData, contraseña: value })} />
                <Input type="password" label="Confirmar Contraseña" value={formData.confirmPassword} isInvalid={isPasswordMatchInvalid} errorMessage={isPasswordMatchInvalid && "Las contraseñas no coinciden"} onValueChange={(value: string) => setFormData({ ...formData, confirmPassword: value })} />
                <Input type="text" label="Número de Celular" value={formData.num_celular} onValueChange={(value: string) => setFormData({ ...formData, num_celular: value })} />
                <Input type="text" label="Género" value={formData.genero} onValueChange={(value: string) => setFormData({ ...formData, genero: value })} />
            </div>
            <Button className="mt-12 mb-2 px-24 py-6 bg-[#38A911]" onPress={handleCreateAccount}>
                <p className="text-lg">
                    Crear Cuenta
                </p>
            </Button>
        </>
    );
}
