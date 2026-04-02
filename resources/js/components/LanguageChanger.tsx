import { useTranslate } from '@/hooks/use-translate';
import { Link } from '@inertiajs/react'; // Adjust import based on your framework
import { Languages } from 'lucide-react';
// Or your specific translation hook

const LanguageSwitcher = ({ locale }: any) => {
    const { t } = useTranslate();

    // Determine the next locale to toggle to
    const nextLocale = locale === 'en' ? 'ur' : 'en';

    return (
        <Link
            href={route('lang', { locale: nextLocale })}
            className="hover:bg-muted flex flex-col items-center justify-center rounded-lg px-3 py-2 transition"
        >
            <div className="flex items-center gap-1">
                <Languages className="h-4 w-4" />
                <span className="text-xs font-bold tracking-wide uppercase">{locale === 'en' ? 'EN' : 'UR'}</span>
            </div>
        </Link>
    );
};

export default LanguageSwitcher;
