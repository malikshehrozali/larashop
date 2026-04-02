import Header from '@/components/common/Header';
import Heading from '@/components/common/Heading';
import { Hero } from '@/components/common/Hero';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome"></Head>
            <Header />
            <Hero />
            <div className="flex h-screen w-full items-center">
                <Heading main="testing" sub="sub heading" />
            </div>
        </>
    );
}
