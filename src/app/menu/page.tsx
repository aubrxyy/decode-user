import KategoriComponent from "../_components/KategoriComponent"
import MenuComponent from "../_components/MenuComponent"
import Hero from "../_components/Hero"
import ScrollToTopBtn from "../_components/ScrollToTopBtn"

export default function Menu() {
    return (
        <>
            <Hero bgImage="/menuHero.jpg" link={`#kategori`} />
            <KategoriComponent categoryLink={"`#${category.title}`"} />
            <MenuComponent />
        </>
    );
}