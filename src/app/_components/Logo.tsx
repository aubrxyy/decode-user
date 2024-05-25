import Image from "next/image";

interface LogoProps {
    className?: string;
}

export default function Logo (props: LogoProps) {
    return (
        <a href="/" >
            <Image src='/logo.png' alt="Warung Sate Beber" width={280} height={100} className={props.className} />
        </a>
    )
}

