import { title } from "@/components/primitives";
import Image from "next/image";

export default function AsociationPage() {
	return (
		<div>
			<Image
				src="/logo2.png"
				alt="Asociation"
				width={500}
				height={500}
			/>
			<h1 className={title()}>Asociation</h1>
		</div>
	);
}
