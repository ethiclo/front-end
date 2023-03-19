import Image from "next/image";
import Link from "next/link";
import logoImg from "../../public/img/ethiclo-logo.JPEG";
import { signOut } from "next-auth/react";

export default function Header({ ...props }) {
  return (
    <header
      className="border-b-2 flex justify-between items-center pr-4"
      {...props}
    >
      <Link href="/" className="hover:opacity-70 transition-opacity">
        <Image src={logoImg} alt="Ethiclo logo" className="w-20" />
      </Link>
      <div
        onClick={() => signOut()}
        className="rounded-full bg-gray-200 w-10 h-10"
      />
    </header>
  );
}
