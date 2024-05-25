import Hero from "./_components/Hero";
import KategoriHomeComponent from "./_components/KategoriHomeComponent";
import LokasiComponent from "./_components/LokasiComponent";
import AboutComponent from "./_components/AboutComponent";
import PesanComponent from "./_components/PesanComponent";



export default function Home() {
  return (
    <>
      <Hero bgImage="/hero.jpg" />
      <KategoriHomeComponent />
      <LokasiComponent />
      <AboutComponent />
      <PesanComponent />
    </>
  )
}
