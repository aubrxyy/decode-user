import Logo from './Logo'


export default function Footer() {
    return (
        <div className="bg-lgreen league py-10 px-6 lg:px-24">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0">
        <div className="text-center lg:text-left">
            <Logo className="mb-4 mx-auto lg:mx-0" />
            <p>Ⓒ 2024 WARUNG SATE BEBER, ALL RIGHTS RESERVED</p>
        </div>
        <div className="w-full lg:w-[35ch] text-center">
            <h3 className="font-bold text-3xl mb-4">
                Location
            </h3>
            <p className="text-2xl">
                Jl. Ridwan Rais, Beji Tim., Kecamatan Beji, Kota Depok, Jawa Barat 16422
            </p>
        </div>
        <div className="text-center lg:text-right">
            <h3 className="font-bold text-3xl mb-2">
                Contact
            </h3>
            <a href="https://wa.me/6281385976170" target="_blank" rel="noopener noreferrer">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end">
                    <img src="/logoWA.png" alt="WA" className="size-12 mb-2 lg:mb-0 lg:mr-2" />
                    <p className="text-2xl">
                        081385976170
                    </p>
                </div>
            </a>
        </div>
    </div>
    <div className="mt-10 flex justify-center lg:justify-end">
        <img src='/logo.png' alt="Warung Sate Beber" width={220} className="opacity-20" />
    </div>
</div>

    );
}