import Link from "next/link";

export default function Header({ ...props }) {
  return (
    <header className="h-20 bg-yellow-300 border-b" {...props}>
      <Link href="/">Ethiclo</Link>
    </header>
  );
}
