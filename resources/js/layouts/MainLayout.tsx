import { useEffect } from 'react';
import { useTranslate } from '@/hooks/use-translate';

type MainLayoutProps = {
    children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
    const { locale } = useTranslate();

    useEffect(() => {
        const dir = locale === 'ur' ? 'rtl' : 'ltr';
        document.documentElement.setAttribute('dir', dir);
        document.documentElement.setAttribute('lang', locale ?? 'en');
    }, [locale]);

    return <>{children}</>;
}
