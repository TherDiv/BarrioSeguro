"use client"
import { title } from "@/components/primitives";
import { Option } from "@/components/Option";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";

import { FaRegNewspaper } from "react-icons/fa6";
import { BsPiggyBank } from "react-icons/bs";
import { BsFillPiggyBankFill } from "react-icons/bs";

import { GrUserPolice } from "react-icons/gr";
import { Advertisement } from "@/components/Advertisement";



import Image from "next/image";
import { image } from "@nextui-org/theme";
import Link from "next/link";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useState } from "react";

export default function UserPage() {
	const [names, setNames] = useState("Hector Manuel");
	const [lastNames, setLastNames] = useState(" Zerrillo Gonzales");
	const [dni, setDNI] = useState("74719101");
	const [address, setAddress] = useState("Av. Los Pinos 123");
	const [email, setEmail] = useState("zegoe@gmail.com");

	const isDNIInvalid = dni.length !== 8;
	const isEmailInvalid = !email.includes("@");

	return (

		<div className=" ">
		<div className="flex justify-between flex-col">
			<Link href={"/Asociation/FISILOVE"}>
			<Image
				src="/logo2.png"
				alt="Asociation"
				width={200}
				height={20}
			/>
			</Link>

			<div className="flex justify-center align-center items-center mt-20">
				<Image
					src="/perfil2.png"
					alt="Asociation"
					width={150}
					height={160}
				/>

				<div className="flex flex-col ml-6">
				<p className="text-xl font-bold "> Perfil del usuario</p>
				<p className="text-start font-semibold ml-2">Hector Zerrillo</p>
				</div>
			</div>

		</div>
		<div className="flex w-full flex-wrap gap-6 mt-16">
                <Input type="text" label="Nombres" value={names} onValueChange={setNames} />
                <Input type="text" label="Apellidos" value={lastNames} onValueChange={setLastNames} />
                <Input type="text" label="DNI" value={dni} isInvalid={isDNIInvalid} errorMessage={isDNIInvalid && "Please enter a valid DNI"} onValueChange={setDNI} />
                <Input type="text" label="Dirección" value={address} onValueChange={setAddress} />
                <Input type="email" label="Email" value={email} isInvalid={isEmailInvalid} errorMessage={isEmailInvalid && "Please enter a valid email"} onValueChange={setEmail} />

            </div>
            <Button color="success" className="mt-12 mb-2 px-24 py-6 ">
                <p className="text-lg">
                    Guardar
                </p>
            </Button>
		</div>


	);
}
