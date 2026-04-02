import { useTranslate } from '@/hooks/use-translate';
import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Heart, Home, KeyRound, Languages, ShoppingCart, User } from 'lucide-react';
import ApearanceChanger from '../ApearanceChanger';

const Header = () => {
    const { auth } = usePage<SharedData>().props;
    const { url } = usePage();
    const { t, locale } = useTranslate();
    const nextLocale = locale === 'en' ? 'ur' : 'en';
    return (
        <div>
            <header className="shadow-foreground/20 bg-background fixed right-0 bottom-10 left-0 z-999 mx-auto h-[10vh] w-[90vw] rounded-2xl shadow-lg lg:max-w-300">
                <div className="text-foreground flex items-center justify-around p-3 lg:px-6">
                    <Link href="/" className={`flex flex-col items-center justify-center`}>
                        <Home /> <span className={`${url === '/' ? 'block' : 'hidden'}`}>{t('nav.home', 'Home')}</span>
                    </Link>
                    <Link href="/shop" className="flex flex-col items-center justify-center">
                        <ShoppingCart /> <span className={`${url === '/shop' ? 'block' : 'hidden'}`}>{t('nav.shop', 'Shop')}</span>
                    </Link>
                    <Link href="/favourites" className="flex flex-col items-center justify-center">
                        <Heart /> <span className={`${url === '/favourites' ? 'block' : 'hidden'}`}>{t('nav.favourites', 'Favourites')}</span>
                    </Link>
                    <Link
                        href={route('lang', { locale: nextLocale })}
                        className="hover:bg-muted flex flex-col items-center justify-center rounded-lg px-3 py-2 transition"
                    >
                        <div className="flex items-center gap-1">
                            <Languages className="h-4 w-4" />
                            <span className="text-xs font-bold tracking-wide uppercase">{locale === 'en' ? 'EN' : 'UR'}</span>
                        </div>
                    </Link>
                    <ApearanceChanger />
                    {auth.user ? (
                        <Link href="/profile" className="flex flex-col items-center justify-center">
                            <User /> <span className={`${url === '/profile' ? 'block' : 'hidden'}`}>{t('nav.profile', 'Profile')}</span>
                        </Link>
                    ) : (
                        <Link href="/login" className="flex flex-col items-center justify-center">
                            <KeyRound />
                        </Link>
                    )}
                </div>
            </header>
        </div>
    );
};

export default Header;
