import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

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

		</section>
	);
}
