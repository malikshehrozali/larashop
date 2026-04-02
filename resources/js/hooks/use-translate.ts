import { usePage } from '@inertiajs/react';

type Translations = Record<string, string>;

export function useTranslate() {
    const { translations, locale, locales } = usePage().props as {
        translations?: Translations;
        locale?: string;
        locales?: string[];
    };

    const t = (key: string, fallback?: string) => {
        return translations?.[key] ?? fallback ?? key;
    };

    return { t, locale, locales };
}
