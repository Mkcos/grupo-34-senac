import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function NavBar() {
    return (
        <header className="pt-8 max-w-7xl width-max">

        <div className="flex items-center items-center justify-between uppercase mt-6">
          <h1 className="title-pm italic" >Treno Cursos</h1>
          <div className='flex justify-between w-2/6 h-12 border-2 rounded px-2 py-1'>
            <input className='w-96 bg-transparent outline-none' type="text" placeholder="O que você quer aprender?"></input>
            <div>
            </div>
            <div>
                <a href=''>
                <MagnifyingGlassIcon className="w-8 rotate-90" />
                </a>
            </div>
          </div>
          <Link href='' className="font-semibold font-2xl w-32 text-center text-xl">Entrar</Link>
         <button className=" anco uppercase font-bold bg-white h-16 w-60 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-[50px]">Matricule-se</button>
        </div>
    
        <nav className="mt-20">
          <div className="py-4 bg-white rounded-full">
            <ul className="flex justify-around anco font-semibold">
              <li><Link href=''>Inovação e Gestão</Link></li>
              <li><Link href=''>Progamação</Link></li>
              <li><Link href=''>FrontEnd</Link></li>
              <li><Link href=''>BackEnd</Link></li>
              <li><Link href=''>Data Science</Link></li>
              <li><Link href=''>UX e Design</Link></li>
            </ul>
          </div>
        </nav>
       </header>
    )
}