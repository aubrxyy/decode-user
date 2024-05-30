import { Caladea } from "next/font/google"
import AddToCartBtn from './AddToCartBtn';

const caladea = Caladea({
    weight: "700",
    subsets: ["latin"]
})

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

interface Category {
    title: string;
    imageUrl: string;
    menus: Menu[];
}

export interface Menu {
    title: string;
    imageUrl: string;
    description: string;
    price: string;
}

export default async function MenuComponent() {
    const categories = await getCategory();

    return (
        <>
            {categories.map((category: Category, index: number) => (
                <div key={index} id={category.title} className="my-20 w-3/4 mx-auto">
                    <div className={caladea.className}><h2 className="text-4xl">{category.title}</h2></div>
                    <div className='mt-4 w-[5ch] h-[2px]  bg-gray-400'></div>
                    <div className="flex justify-center">
                        <div className="flex flex-wrap justify-center 2xl:justify-start my-3 gap-7">
                            {category.menus.map((menu: Menu, index: number) => (
                                <div key={index}>
                                    <img src={menu.imageUrl} alt={menu.title} className="w-[410px] h-[270px] rounded-lg object-cover "/>
                                    <div className="menuinfo flex justify-between">
                                        <div className="flex flex-col">
                                            <h3 className="lg:text-2xl/none text-xl/none mt-2">{menu.title}</h3>
                                            <span className="text-lg/none text-gray-500">{menu.description}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-lg text-[#674242] flex justify-end mt-1">Rp. {menu.price}</p>
                                            <AddToCartBtn menu={menu} />
                                        </div>
                                    </div>
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}


