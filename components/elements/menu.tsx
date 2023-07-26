import Link from "next/link";

export default function Menu() {
    return (
        <nav className="flex flex-col  mx-8">
            <Link href={"./"}>Vendas</Link>
            <Link href={"/clientes"}>Clientes</Link>
            <Link className="ml-4" href={"/clientes/novocliente"}>Novo</Link>
            <Link href={"/"}>Produtos</Link>
        </nav>
    );
}
