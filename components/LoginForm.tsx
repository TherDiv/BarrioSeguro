"use client"
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useMemo, useState } from "react";
import { useRouter } from 'next/navigation';
import { Link } from "@nextui-org/link";


export default function LoginForm() {
    const [dni, setDNI] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const validateDNI = (value: string) => value.length === 8 && !isNaN(parseInt(value));

    const isDNIInvalid = useMemo(() => {
        if (dni === "") return false;
        return validateDNI(dni) ? false : true;
    }, [dni]);

    const handleLogin = () => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            if (userData.dni === dni && userData.password === password) {
                router.push('/Actions');
            } else {
                alert("DNI o contraseña incorrectos.");
            }
        } else {
            alert("No se encontró ninguna cuenta con este DNI.");
        }
    };

    return (
        <>
            <div className="flex w-full flex-wrap gap-6">
                <Input type="text" label="DNI" value={dni} isInvalid={isDNIInvalid} errorMessage={isDNIInvalid && "Please enter a valid DNI"} onValueChange={setDNI} />
                <Input type="password" label="Contraseña" value={password} onValueChange={setPassword} />
            </div>
            <Button className="my-12 px-24 py-6 bg-[#38A911]" onPress={handleLogin}>
                <p className="text-lg">
                    Iniciar Sesión
                </p>
            </Button>

            <footer className="w-full flex items-center justify-center py-3">
                <Link
                    isExternal
                    className="grid items-center gap-1 text-current"
                    title="nextui.org homepage"
                >
                    <span className="text-default-600 text-primary">Olvidé mi contraseña</span>
                </Link>
            </footer>
        </>
    );
}
