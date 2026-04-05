import Collections from '@/components/common/Collections';
import Header from '@/components/common/Header';
import { Hero } from '@/components/common/Hero';
import TrendingProduct from '@/components/common/TrendingProduct';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome"></Head>
            <Header />
            <Hero />
            <Collections />
            <div className="my-10 py-10">
                <TrendingProduct />
            </div>
        </>
    );
}
