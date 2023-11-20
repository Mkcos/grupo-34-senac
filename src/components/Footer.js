import Link from "next/link";
import { Facebook, GitHub, Instagram } from "@mui/icons-material";

export default function Footer() {
    return (
        <footer className="flex justify-center items-center flex-col">
            <div className="text-sm font-bold leading-10" >
                <ul className="flex gap-12 mb-8">
                    <li><Link href= ''>Quem somos</Link></li>
                    <li><Link href= ''>Veja depoimentos</Link></li>
                    <li><Link href= ''>Perguntas frequentes</Link></li>
                    <li><Link href= ''>Contato</Link></li>
                </ul>
            </div>
            <div className=" flex pb-8 gap-8">
                <a href="#"><Instagram /></a>
                <a href="#"><GitHub /></a>
                <a href="#"><Facebook /></a>
            </div>
        </footer>
    )
}