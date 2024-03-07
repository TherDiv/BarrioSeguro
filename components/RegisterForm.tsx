"use client"
import { Input } from "@nextui-org/input";
import { Button, ButtonGroup } from "@nextui-org/button";
import { useMemo, useState } from "react";

export default function RegisterForm() {
    const [email, setEmail] = useState("");
    const [names, setNames] = useState("");
    const [lastNames, setLastNames] = useState("");
    const [dni, setDNI] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
    const validateDNI = (value: string) => value.length === 8 && !isNaN(parseInt(value));
    const validatePasswordMatch = (password: string, confirmPassword: string) => password === confirmPassword;

    const isEmailInvalid = useMemo(() => {
        if (email === "") return false;
        return validateEmail(email) ? false : true;
    }, [email]);

    const isDNIInvalid = useMemo(() => {
        if (dni === "") return false;
        return validateDNI(dni) ? false : true;
    }, [dni]);

    const isPasswordMatchInvalid = useMemo(() => {
        if (password === "" || confirmPassword === "") return false;
        return validatePasswordMatch(password, confirmPassword) ? false : true;
    }, [password, confirmPassword]);

    return (
        <>
            <div className="flex w-full flex-wrap gap-6">
                <Input type="text" label="Nombres" value={names} onValueChange={setNames} />
                <Input type="text" label="Apellidos" value={lastNames} onValueChange={setLastNames} />
                <Input type="text" label="DNI" value={dni} isInvalid={isDNIInvalid} errorMessage={isDNIInvalid && "Please enter a valid DNI"} onValueChange={setDNI} />
                <Input type="text" label="Dirección" value={address} onValueChange={setAddress} />
                <Input type="email" label="Email" value={email} isInvalid={isEmailInvalid} errorMessage={isEmailInvalid && "Please enter a valid email"} onValueChange={setEmail} />
                <Input type="password" label="Contraseña" value={password} onValueChange={setPassword} />
                <Input type="password" label="Confirmar Contraseña" value={confirmPassword} isInvalid={isPasswordMatchInvalid} errorMessage={isPasswordMatchInvalid && "Passwords do not match"} onValueChange={setConfirmPassword} />
            </div>
            <Button color="success" className="mt-12 mb-2 px-24 py-6 ">
                <p className="text-lg">
                    Crear Cuenta
                </p>
            </Button>
        </>

    );
}
