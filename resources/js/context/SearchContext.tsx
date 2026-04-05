import React, { createContext, useContext, useState } from 'react';

interface SearchContextProps {
    openSearch: boolean;
    setOpenSearch: (val: boolean) => void;
    search: string | undefined;
    setSearch: (val: string) => void;
}

const SearchBarContext = createContext<SearchContextProps | undefined>(undefined);

export const useSearch = () => {
    const context = useContext(SearchBarContext);
    if (!context) {
        throw new Error('useSearch must be used with in the Search Context');
    }
    return context;
};

const SearchContext = ({ children }: { children: React.ReactNode }) => {
    const [openSearch, setOpenSearch] = useState<boolean>(false);
    const [search, setSearch] = useState<string | undefined>('');
    console.log(search);

    return <SearchBarContext.Provider value={{ openSearch, setOpenSearch, search, setSearch }}>{children}</SearchBarContext.Provider>;
};

export default SearchContext;
