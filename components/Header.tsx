import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  text: string;
}

export const Header: React.FC<HeaderProps> = ({ text }) => {

  const associationCode = localStorage.getItem('associationId');

  return (
    <header className="flex flex-col w-full p-4 shadow-none">
      <div className="flex w-full justify-between">
        <Link href={"/Asociation/" + associationCode}>
          <Image
            src="/logo2.png"
            alt="Asociation"
            width={200}
            height={20}
          />
        </Link>
      </div>
      <div className="flex mt-4">
        <p className="font-bold text-5xl text-[#115DA9]">{text}</p>
      </div>
    </header>
  );
};
