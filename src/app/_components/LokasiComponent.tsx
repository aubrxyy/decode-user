import { Caladea } from "next/font/google"

export const caladea = Caladea({
    weight: "700",
    subsets: ["latin"]
})


export default function Lokasi() {
    return (
        <>
        <div className="my-20 mx-auto">
            <div className="flex max-2xl:flex-wrap justify-center items-center gap-8">
                <div>
                        <div className="flex flex-row items-end">
                            <img src="/mapMarker.svg" alt="map"/>
                            <div className={caladea.className}><h2 className="ml-6 text-5xl font-bold mb-4">Lokasi</h2></div>
                        </div>
                    <a href="https://g.co/kgs/FcBnVxq" target="_blank" rel="noopener">
                        <div className="text-2xl lg:text-3xl bg-[#ECE7BC] rounded-2xl w-[26ch] p-12 shadow-lg">
                            <p>
                                Jl. Ridwan Rais, Beji Tim., Kecamatan Beji, Kota Depok, Jawa Barat 16422
                            </p>
                            
                        </div>
                        
                    </a>
                </div>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15860.487640024185!2d106.8248544!3d-6.3782606!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ebfe3e5cc747%3A0xd1c7a8983074a123!2sWarung%20Sate%20Beber!5e0!3m2!1sen!2sid!4v1714924550600!5m2!1sen!2sid"
                        style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                        className="shrink mx-auto min-w-[350px] h-[500px] lg:h-[720px] lg:w-[900px] rounded-xl"></iframe>
                </div>
            </div>
        </div>
        </>
    )
}
