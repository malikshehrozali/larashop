interface HeadingProps {
    main: string;
    sub: string;
    className?: string;
}

const Heading = ({ main, sub, className }: HeadingProps) => {
    return (
        <div className={`mt-10 h-full w-full text-center ${className || ''}`}>
            <h2
                className="text-4xl font-black uppercase sm:text-5xl lg:text-6xl xl:text-7xl"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
                <span className="bg-gradient-to-br from-rose-500 via-rose-400 to-orange-300 bg-clip-text text-transparent">{main}</span>
            </h2>

            <p className="text-muted-foreground">{sub}</p>
        </div>
    );
};

export default Heading;
