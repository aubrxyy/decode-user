import Image from 'next/image';
import { Caladea } from 'next/font/google';

const caladea = Caladea({
    weight: "700",
    subsets: ["latin"],
    display: "swap",
});

export default function AboutComponent() {
    return (
        <>
            <div className="my-20 mx-auto">
                <div className="flex max-2xl:flex-wrap justify-center items-center gap-x-44">
                    <div>
                        <div className={caladea.className}><h2 className="text-5xl caladea max-md:text-center font-bold mb-4">Tentang Kami</h2></div>
                        <div className='mt-4 w-[5ch] h-[2px] max-md:mx-auto bg-gray-400'></div>
                        <div className="my-4 lg:my-6 text-xl lg:text-3xl bg-[#ECE7BC] rounded-2xl w-[30ch] p-12 shadow-lg">
                            <div className={caladea.className}>
                                <h3 className="font-bold max-lg:text-3xl text-4xl mb-12">
                                    Warung Sate Beber
                                </h3>
                            </div>
                            <p>
                                Sate Legendaris Sejak 2015,
                                menyajikan sate ayam dan kambing bakar bumbu rempah khas. Ada juga tongseng ayam, tongseng
                                kambing, dan sop iga sapi. Suasananya nyaman dan ramah, cocok untuk makan bersama keluarga,
                                teman, atau kolega.
                            </p>
                        </div>
                        <div
                            className="my-4 lg:my-6 text-xl lg:text-3xl bg-[#ECE7BC] rounded-2xl w-[30ch] py-8 px-12 shadow-lg">
                            <p>
                                Tips: Datang lebih awal saat jam makan, coba sambal pedasnya yang khas!
                            </p>
                        </div>
                        <div
                            className="my-4 lg:my-6 text-xl lg:text-3xl bg-[#ECE7BC] rounded-2xl w-[30ch] py-8 px-12 shadow-lg">
                            <p>
                                Warung Sate Beber: Cita rasa sate legendaris, suasana nyaman, harga bersahabat.
                            </p>
                        </div>
                    </div>
                    <div>
                        <Image src="/tentangKami.jpg" width={750} height={1000} alt="Warung Sate Beber"
                            className="shrink mx-auto max-lg:w-11/12 rounded-xl"/>
                    </div>
                </div>
            </div>
        </>
    )
}