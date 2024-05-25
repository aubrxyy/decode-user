import KategoriComponent from "../_components/KategoriComponent"
import MenuComponent from "../_components/MenuComponent"
import Hero from "../_components/Hero"


export default function Menu() {
    return (
        <>
            <Hero bgImage="/menuHero.jpg" link={`#kategori`} />
            <KategoriComponent />
            <MenuComponent />
            
        </>
    );
}