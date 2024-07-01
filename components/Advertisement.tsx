import { ReactNode } from 'react';
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

interface AdvertisementProps {
  date: string;
  type: string;
  title: string;
  description: string;
  img?: string;
  buttonText?: string;
  onClick?: () => void; // Nueva propiedad para manejar clics
}

export const Advertisement: React.FC<AdvertisementProps> = ({ date, title, description, img, buttonText, type, onClick }) => {
  return (
    <Card className="max-w-[400px] bg-[#D8D8D8] shadow-none">
      <CardHeader className="flex gap-3 bg-[#adadad] shadow-none">
        <Image
          alt="nextui logo"
          src=""
          height={40}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-lg font-bold text-black">{title}</p>
          <div className="flex justify-end items-center text-small text-black self-start">
            <span>{type}</span>
            <span className="mx-1">-</span> {/* Separador */}
            <span>{date}</span>
          </div>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-black text-justify">{description}</p>
        <div style={{ margin: '5px 0' }}></div>  {/* Espacio entre descripción e imagen */}
        {img ? <Image
          alt="nextui logo"
          src={img}
        /> : null}
        {buttonText ?
          <Button
            color="success"
            className="mt-12 mb-2 px-24 py-6"
            onClick={onClick} // Maneja el clic del botón
          >
            <p className="text-lg">
              {buttonText}
            </p>
          </Button>
          : null}
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Más información
        </Link>
      </CardFooter>
    </Card>
  );
};
