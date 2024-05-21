import KontakComponent from '../_components/KontakComponent';
import { Calistoga } from 'next/font/google';
import Link from 'next/link';

export const calistoga = Calistoga({
    weight: '400',
    subsets: ['latin'],
});

export default function Kontak() {
    return (
        <div className="hero lg:flex">
            <div className="bg-cover bg-center lg:h-[720px] lg:w-8/12 h-[270px] max-lg:mb-48">
                <KontakComponent />
            </div>
            <div className="bg-[#4E6934] lg:h-[720px] h-[380px] lg:w-4/12 text-center flex flex-col justify-center">
                <div className={calistoga.className}>
                    <h1 className="text-5xl lg:text-7xl lg:leading-[4rem] text-[#f5f5f5]">Sate Beber</h1>
                    <h2 className="mb-4 text-4xl lg:mb-8 text-[#ECE7BC]">khas Cirebon</h2>
                </div>
                <p className="text-[#f5f5f5] mx-4 my-4 text-2xl/none lg:text-3xl/none lg:mx-24">Berdiri sejak 2015, menyajikan
                    sate ayam &amp; kambing bakar bumbu rempah khas.</p>
                <Link href="/menu">
                    <button className="text-2xl mt-8 text-nowrap bg-dgreen border-dgreen border-[2px] rounded active:shadow-lg hover:bg-[#f5f5f5] hover:text-dgreen hover:border-[2px] hover:border-dgreen hover:cursor-pointer text-white transition-all lg:mt-12 py-2 mx-auto  max-lg:w-48 lg:w-72">
                        Lihat menu
                    </button>
                </Link>
            </div>
        </div>
    );
}