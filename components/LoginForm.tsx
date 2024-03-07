"use client"
import { Input } from "@nextui-org/input";
import { Button, ButtonGroup } from "@nextui-org/button";
import { useMemo, useState } from "react";
import { Link } from "@nextui-org/link";

export default function LoginForm() {
    const [dni, setDNI] = useState("");
    const [password, setPassword] = useState("");

    const validateDNI = (value: string) => value.length === 8 && !isNaN(parseInt(value));

    const isDNIInvalid = useMemo(() => {
        if (dni === "") return false;
        return validateDNI(dni) ? false : true;
    }, [dni]);
    return (
        <>
            <div className="flex w-full flex-wrap gap-6">
                <Input type="text" label="DNI" value={dni} isInvalid={isDNIInvalid} errorMessage={isDNIInvalid && "Please enter a valid DNI"} onValueChange={setDNI} />
                <Input type="password" label="Contraseña" value={password} onValueChange={setPassword} />
            </div>
            <Link
            href="/Actions">
            <Button color="success" className="my-12 px-24 py-6 ">
                <p className="text-lg">
                    Iniciar Sesión
                </p>
            </Button>
            </Link>

            <footer className="w-full flex items-center justify-center py-3">
                <Link
                    isExternal
                    className="grid items-center gap-1 text-curren t"
                    href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                    title="nextui.org homepage"
                >
                    <span className="text-default-600 text-primary">Olvidé mi contraseña</span>
                </Link>
            </footer>
        </>

    );
}
