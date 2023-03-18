import Image from "next/image";
import Link from "next/link";
import logoImg from "../../public/img/ethiclo-logo.JPEG";

export default function Header({ ...props }) {
  return (
    <header
      className="border-b-2 flex justify-between items-center pr-4"
      {...props}
    >
      <Link href="/" className="hover:opacity-60 transition-opacity">
        <Image src={logoImg} alt="Ethiclo logo" className="w-20" />
      </Link>
      <div className="rounded-full bg-primary w-10 h-10" />
    </header>
  );
}
