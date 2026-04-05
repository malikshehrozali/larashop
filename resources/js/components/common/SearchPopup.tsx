import { useSearch } from '@/context/SearchContext';
import { Search } from 'lucide-react';

const SearchPopup = () => {
    const { openSearch, setOpenSearch, search, setSearch } = useSearch();

    if (!openSearch) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/30" onClick={() => setOpenSearch(!openSearch)} />
            <div className="bg-background relative h-[80vh] w-[50vw] rounded-2xl p-5 shadow">
                <div className="flex border rounded-2xl items-center gap-2">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#eb4c4c] to-[#ff7070] shadow-lg">
                        <Search className="shrink-0 text-white" />
                    </div>
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." className='outline-none focus:outline-none'/>
                </div>
            </div>
        </div>
    );
};

export default SearchPopup;
