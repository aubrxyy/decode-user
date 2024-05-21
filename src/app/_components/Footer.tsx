import Logo from './Logo'


export default function Footer() {
    return (
        <div className="bg-lgreen league">
        <div className="h-fit grid grid-flow-col pt-20 mx-24">
            <div>
                <Logo className="mb-4"/>
                <p>Ⓒ 2024 WARUNG SATE BEBER, ALL RIGHTS RESERVED</p>
            </div>
            <div className="w-[35ch]">
                <h3 className="font-bold text-center text-3xl mb-4">
                    Location
                </h3>
                <p className="text-2xl">
                    Jl. Ridwan Rais, Beji Tim., Kecamatan Beji, Kota Depok, Jawa Barat 16422
                </p>
            </div>
            <div>
                <h3 className="font-bold text-center text-3xl mb-2">
                    Contact
                </h3>
                <div className="flex flex-row items-center justify-center">
                    <img src="/logoWA.png" alt="WA" className="size-12"/>
                    <p className="text-2xl text-center">
                        081385976170
                    </p>
                </div>
            </div>
        </div>
        <div className="bottom-0 right-0 flex justify-end">
            <img src='/logo.png' alt="Warung Sate Beber" width={220} className="opacity-20" />
        </div>
    </div>
    );
}