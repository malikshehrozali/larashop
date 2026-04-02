import Header from '@/components/common/Header';
import { Head } from '@inertiajs/react';

const index = () => {
    return (
        <>
            <Head title="Favourites" />
            <Header />
            <div>Your Favourites Products</div>
        </>
    );
};

export default index;
