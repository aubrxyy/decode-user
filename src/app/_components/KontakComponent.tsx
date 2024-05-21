import { Caladea, Calistoga } from "next/font/google";

export const caladea = Caladea({
    weight: '700',
    subsets: ['latin'],
});

export const calistoga = Calistoga({
    weight: '400',
    subsets: ['latin'],
});

export default function KontakComponent() {
    return (
        <div className="flex max-lg:flex-col items-center lg:ml-32 lg:mt-32">
            <div className="flex flex-col md:flex-row max-w-2xl items-center gap-8">
                <div>
                    <div className={caladea.className}><h2 className="ml-6 text-3xl md:text-5xl font-bold mb-4">Kontak</h2></div>
                    <a href="https://wa.me/6281385976170" target="_blank" rel="noopener">
                        <div className="my-8 text-xl md:text-2xl bg-[#ECE7BC] rounded-2xl w-full md:w-[500px] h-[150px] p-12 shadow-lg">
                            <div className='flex flex-row pl-4 items-center'>
                                <p className={calistoga.className}>
                                    WhatsApp:
                                </p>
                                <img src="/logoWA.png" alt="WA" className="size-12 ml-2" /> 081385976170
                            </div>
                        </div>
                    </a>
                    <a href="https://instagram.com/" target="_blank" rel="noopener">
                        <div className="my-8 text-xl md:text-2xl bg-[#ECE7BC] rounded-2xl w-full md:w-[500px] h-[150px] p-12 shadow-lg">
                            <div className='flex flex-row pl-4 items-center'>
                                <p className={calistoga.className}>
                                    Instagram:
                                </p>
                                <img src="/logoIG.png" alt="IG" className="size-10 ml-4 mr-3" /> @satebeber
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}