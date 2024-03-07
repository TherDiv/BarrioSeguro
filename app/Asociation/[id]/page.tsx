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
import Link from "next/link";



import Image from "next/image";
import { image } from "@nextui-org/theme";

export default function AsociationPage() {
	return (
		<div className=" ">
			<div className="flex justify-between">
				<Image
					src="/logo2.png"
					alt="Asociation"
					width={200}
					height={20}
				/>
				<div className="flex justify-center align-center items-center ">
					<FaBell className="w-8 h-8 text-slate-600" color="#FAFAFA" />
					<Link href={"/Users/74719101"}>
					<Image
						src="/perfil.png"
						alt="Asociation"
						width={37}
						height={38}
					/>
					</Link>

				</div>

			</div>

			<div className="flex flex-col mt-8">
				<p className="text-[#fafafa] text-start ">
					Asociación de Vivienda
				</p>
				<h1 className="text-[#fafafa] text-4xl font-bold text-start">Miguel Grau</h1>
			</div>

			<div className="flex flex-col justify-center gap-4 mt-6 max-w-screen">
				<p className="font-bold text-xl text-slate-600">Menu</p>
				<div className="flex flex-wrap justify-between gap-2">
					<Option text={"Encuestas"} icon={FaRegNewspaper} />
					<Option text={"Juntas Vecinales"} icon={FaPeopleRoof} />
					<Option text={"Finanzas"} icon={BsPiggyBank} />
					<Option text={"Seguridad"} icon={GrUserPolice} />
				</div>
			</div>


			{/* Anuncios*/}
			<div className="flex flex-col gap-4 mt-6 max-w-screen justify-center">
				<p className="font-bold text-xl text-slate-600">Anuncios</p>
				<div className="flex flex-wrap justify-center gap-6">
					<Advertisement date={"8/03/2024"} title={"Reparación de cableado eléctrico"} description={"Se ha detectado un corto circuito en el cableado eléctrico de la calle 12, se solicita a los vecinos que eviten el uso de electrodomésticos de alto consumo."} img={"https://peru21.pe/resizer/BrHKBn__ZW7bqCsN2Uer1MeILBU=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/IRZIYEPO7RHSLBPCJBSH5M5FR4.jpg"} />
					<Advertisement date={"4/02/2024"} title={"Invasión de mapaches"} description={"Vistos cerca a la manzana F y G, cuidado pueden tener rabia. culpable: Brenis "} img={"https://elcomercio.pe/resizer/k_DT1bk2YJORbCmKEylngi75PZo=/1200x1200/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/RXAAQMQSRVDIFCM2AW4ZVWV7OU.jpg"} />
					<Advertisement date={"3/02/2024"} title={"Robo de auto"} description={"Robo de auto en la avenida Santa Rosa, paradero 3"} img={"https://i.ytimg.com/vi/6Vo8jdRD3RM/hqdefault.jpg"}/>
				</div>
			</div>
		</div>

	);
}
