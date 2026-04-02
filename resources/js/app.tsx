import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { route as routeFn } from 'ziggy-js';
import { initializeTheme } from './hooks/use-appearance';
import MainLayout from './layouts/MainLayout';

declare global {
    const route: typeof routeFn;
}

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async (name) => {
        const page = await resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx'));

        // Add a default layout if the page doesn't define one.
        // @ts-expect-error - Inertia layout pattern
        page.default.layout = page.default.layout ?? ((page: React.ReactNode) => <MainLayout>{page}</MainLayout>);

        return page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#c96442',
    },
});

// This will set light / dark mode on load...
initializeTheme();
