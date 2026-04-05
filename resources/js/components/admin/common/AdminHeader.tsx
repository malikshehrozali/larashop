import { useSearch } from '@/context/SearchContext';
import { Search } from 'lucide-react';

const AdminHeader = () => {
    const { setOpenSearch, openSearch } = useSearch();
    // const handleSearch = () => {
    //     return <SearchPopup openSearch={openSearch} setOpenSearch={setOpenSearch} />;
    // };

    return (
        <div className="flex h-[10vh] items-center border-b px-5">
            <div className="text-foreground flex items-center gap-2 rounded-full border p-3">
                <Search className="h-5 w-5 cursor-pointer" onClick={() => setOpenSearch(!openSearch)} />
                <input
                    type="text"
                    readOnly
                    placeholder="Search..."
                    className="hidden w-100 cursor-pointer outline-none focus:outline-none lg:block"
                    onClick={() => setOpenSearch(!openSearch)}
                />
            </div>
        </div>
    );
};

export default AdminHeader;
