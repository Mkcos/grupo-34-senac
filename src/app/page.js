import NavBar from "@/components/NavBar"

export default function Home() {
  return (
    <>
      <NavBar/>

      <main className=" relative h-screen">
        <div className="content absolute top-1/4 left-1/4 m-auto">
          <h1 className="content__title cursor__animation title-pm">Estude <span>agora</span> na melhor plataforma de Tecnologia</h1>
        </div>
      </main>
    </>
  )
}