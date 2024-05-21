import Hero from "./_components/Hero";
import KategoriComponent from "./_components/KategoriComponent";
import LokasiComponent from "./_components/LokasiComponent";
import AboutComponent from "./_components/AboutComponent";
import PesanComponent from "./_components/PesanComponent";



export default function Home() {
  return (
    <>
      <Hero bgImage="/hero.jpg" />
      <KategoriComponent />
      <LokasiComponent />
      <AboutComponent />
      <PesanComponent />
    </>
  )
}
