"use client"
import { useRouter } from 'next/navigation';
import { title } from "@/components/primitives";
import { Option } from "@/components/Option";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import { BsPiggyBank } from "react-icons/bs";
import { BsFillPiggyBankFill } from "react-icons/bs";
import { GrUserPolice } from "react-icons/gr";
import { Advertisement } from "@/components/Advertisement";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Asociation } from '@/components/Asociation';

export default async function AsociationPage({params}) {
    const [dni, setDNI] = useState("");
    const [associationName, setAssociationName] = useState("");
    const router = useRouter();
	const { id } = params;


    return (
        <div className=" ">
			<Asociation params={id} />
        </div>
    );
}
