import { Caladea } from "next/font/google";
import Image from "next/image";

export const caladea = Caladea({
    weight: "700",
    subsets: ["latin"]
})

interface Category {
    title: string;
    imageUrl: string;
}

async function getCategory() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, { cache: "no-store" });

    return res.json();
}

export default async function KategoriComponent() {
    const categories = await getCategory();

    return (
        <>
            <div id="kategori" className="py-10 my-20 min-w-fit lg:w-1/2 mx-auto px-8 rounded-[2.5rem] bg-[#ECE7BC]">
                <div className={caladea.className}><h1 className="my-4 text-5xl text-center font-bold">Kategori</h1></div>
                <div className="flex gap-8 mx-auto flex-row flex-wrap items-center justify-center text-center">
                    {categories.map((category: Category, index: number) => (
                        <div key={index}>
                            <a href={`/menu/#${category.title}`}>
                                <img src={category.imageUrl} alt={category.title} loading="lazy" className="size-[175px] max-lg:size-[125px] rounded-full object-cover cursor-pointer" />
                                <p className="mt-4 text-xl cursor-pointer">{category.title}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

