import { Caladea } from "next/font/google";

export const caladea = Caladea({
    weight: "700",
    subsets: ["latin"]
})

interface Category {
    imageUrl: string ;
    title: string;
}

async function getCategory() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { cache: "no-store" });
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
    } catch (error) {
        console.error('Failed to fetch categories:', error);
        return [];
    }
}

export default async function KategoriComponent() {
    const categories = await getCategory();

    return (
        <>
            <div id="kategori" className="py-10 my-20 max-sm:mx-4 max-sm:px-2 min-w-fit lg:w-1/2 mx-auto px-8 rounded-[2.5rem] bg-[#ECE7BC]">
                <div className={caladea.className}><h1 className="my-4 text-5xl text-center font-bold">Kategori</h1></div>
                <div className="flex gap-8 mx-auto flex-row flex-wrap items-center justify-center text-center">
                    {categories.map((category: Category, index: number) => (
                        <div key={index}>
                            <a href={`#${category.title}`}>
                                <img src={category.imageUrl} alt={category.title} loading="lazy" className="size-[175px] max-lg:size-[160px] rounded-full object-cover cursor-pointer" />
                                <p className="mt-4 max-sm:mt-1 text-xl cursor-pointer">{category.title}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

