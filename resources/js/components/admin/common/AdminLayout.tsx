import SearchPopup from '@/components/common/SearchPopup';
import SearchContext from '@/context/SearchContext';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SearchContext>
            <div className="flex h-screen">
                <AdminSidebar />
                <div className="flex flex-1 flex-col overflow-hidden">
                    <AdminHeader />
                    <div className="scrollbar-main min-w-0 flex-1 overflow-auto overflow-x-hidden p-4 sm:p-6">{children}</div>
                </div>
            </div>
            <SearchPopup />
        </SearchContext>
    );
};

export default AdminLayout;
