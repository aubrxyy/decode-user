import Logo from './Logo'


export default function Footer() {
    return (
        <div className="bg-lgreen league">
        <div className="h-fit grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8 lg:pt-20 mx-24">
            <div>
                <Logo className="mb-4"/>
                <p className='max-md:text-sm'>Ⓒ 2024 WARUNG SATE BEBER, ALL RIGHTS RESERVED</p>
            </div>
            <div >
                <h3 className="font-bold text-center text-3xl max-md:text-2xl max-md:mb-1 mb-4">
                    Location
                </h3>
                <p className="text-2xl max-md:text-sm">
                    Jl. Ridwan Rais, Beji Tim., Kecamatan Beji, Kota Depok, Jawa Barat 16422
                </p>
            </div>
            <div>
                <h3 className="font-bold text-center text-3xl max-md:text-2xl max-md:mb-0 mb-2">
                    Contact
                </h3>
                <a href="https://wa.me/6281385976170" target="_blank" rel="noopener noreferrer">
                    <div className="flex flex-row items-center justify-center">
                        <img src="/logoWA.png" alt="WA" className="size-12"/>
                        <p className="text-2xl max-md:text-sm text-center">
                            081385976170
                        </p>
                    </div>
                </a>
            </div>
        </div>
        <div className="bottom-0 right-0 flex justify-end">
            <img src='/logo.png' alt="Warung Sate Beber" width={220} className="opacity-20" />
        </div>
    </div>
    );
}
