import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Asegura&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>tu barrio&nbsp;</h1>
				<br />
				<h1 className={title()}>
					con la tecnolgía de tu lado
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					10 veces mas facil y seguro
				</h2>
			</div>

			<div className="flex gap-3">
				<Link
					isExternal
					href={"/Auth"}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Iniciar Sesión
				</Link>
				<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={"/BudgeCalculator"}
				>
					Presupuestar gratis
				</Link>
			</div>

			<div className="flex mt-6" >
				<Image src={"/phonewallpaper.png"} alt="banner" width={250} height={500}></Image>
				<div className="flex flex-col mt-24 gap-4">
					<div className="flex gap-2">
					<FaCheck/>
					<p>Eficiencia</p>
					</div>
					<div className="flex gap-2" >
					<FaCheck />
					<p>Seguridad</p>
					</div>
					<div className="flex gap-2" >
					<FaCheck />
					<p>Transparencia</p>
					</div>
					<div className="flex gap-2" >
					<FaCheck />
					<p>Comunicacion</p>
					</div>
					<div className="flex gap-2" >
					<FaCheck />
					<p>Alarma</p>
					</div>

				</div>
			</div>

		</section>
	);
}
