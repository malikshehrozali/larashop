import AdminLayout from "@/components/admin/common/AdminLayout";
import { Head } from "@inertiajs/react";

const dashboard = () => {
    return <div>
        <Head title="Dashboard" />
        <h2>Admin Dashboard</h2>
    </div>;
};

dashboard.layout = (page: React.ReactNode) => <AdminLayout>{page}</AdminLayout>;

export default dashboard;
