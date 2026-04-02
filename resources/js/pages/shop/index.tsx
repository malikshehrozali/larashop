import Header from '@/components/common/Header';
import { useTranslate } from '@/hooks/use-translate';
import { Head } from '@inertiajs/react';

const index = () => {
    const { t } = useTranslate();
    return (
        <>
            <Head title={t('title.shop', 'Shop')}></Head>
            <Header />
        </>
    );
};

export default index;
