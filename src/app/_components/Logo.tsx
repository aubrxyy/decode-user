
interface LogoProps {
    className?: string;
}

export default function Logo (props: LogoProps) {
    return (
        <a href="/" >
            <img src='/logo.png' alt="Warung Sate Beber" width={280} className={props.className} />
        </a>
    )
}

