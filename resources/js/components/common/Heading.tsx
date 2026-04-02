interface HeadingProps {
    main: string;
    sub: string;
}

const Heading = ({ main, sub }: HeadingProps) => {
    return (
        <div className="mt-10 h-full w-full text-center">
            <h2
                className="text-4xl font-black uppercase sm:text-6xl lg:text-7xl xl:text-8xl"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
                <span className="bg-gradient-to-br from-rose-500 via-rose-400 to-orange-300 bg-clip-text text-transparent">{main}</span>
            </h2>

            <p className="text-muted-foreground">{sub}</p>
        </div>
    );
};

export default Heading;
