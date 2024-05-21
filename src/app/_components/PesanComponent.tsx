import { Caladea } from "next/font/google"

export const caladeaBold = Caladea({
    weight: "700",
    subsets: ["latin"]
})

export const caladea = Caladea({
    weight: "400",
    subsets: ["latin"]
})

export default function PesanComponent() {
    return (
        <div className="my-20 mx-auto text-center">
            <div className={caladeaBold.className}><h2 className="text-5xl max-md:text-4xl mb-4">Pesan di Sini!</h2></div>
            <div className={caladea.className}><p className="text-3xl max-md:text-2xl max-md:mx-8 mb-8">Ingin pesan? Klik tombol pesan di bawah ini!</p></div>
            <div
            className="text-2xl mt-8 text-nowrap bg-dgreen border-dgreen border-[2px] rounded active:shadow-lg hover:bg-[#f5f5f5] hover:text-dgreen hover:border-[2px] hover:border-dgreen hover:cursor-pointer text-white transition-all lg:mt-12 py-2 w-36 mx-auto">
                <a href="https://wa.me/6281385976170" target="_blank" rel="noopener noreferrer" title="WhatsApp">Pesan</a>
            </div>
        </div>
    )
}