import { LayoutDashboard, Package, PanelLeftClose, PanelLeftOpen, ScrollText, ShoppingCart, Users } from 'lucide-react';
import { useState } from 'react';

const AdminSidebar = () => {
    const [isOpen, setIsOpen] = useState<boolean | null>(true);

    const navItems = [
        { name: 'Dashboard', icon: <LayoutDashboard size={20} />, href: '#' },
        { name: 'Products', icon: <Package size={20} />, href: '#' },
        { name: 'Orders', icon: <ScrollText size={20} />, href: '#' },
        { name: 'Customers', icon: <Users size={20} />, href: '#' },
    ];

    return (
        // main
        <aside className={` ${isOpen ? 'w-64' : 'w-15'} bg-background text-foreground relative h-screen border-r-2 transition-all duration-600`}>
            {/* header section */}
            <div className="flex h-[10vh] w-full items-center border-b">
                {isOpen ? (
                    <div className="mx-auto flex items-center gap-3 overflow-hidden whitespace-nowrap">
                        <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#eb4c4c] to-[#ff7070] shadow-lg">
                            <ShoppingCart className="shrink-0 text-white" />
                        </div>
                        <h2 className="text-lg font-semibold">LaraShop Admin</h2>
                    </div>
                ) : (
                    <div className="mx-auto">
                        <ShoppingCart />
                    </div>
                )}
            </div>

            {/* sidebar content */}
            <nav className="mt-16 px-2">
                <ul className="flex flex-col gap-4">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className="hover:bg-muted hover:text-foreground flex items-center gap-4 rounded-md px-3 py-2 transition-colors"
                            >
                                <span className="shrink-0">{item.icon}</span>
                                {isOpen && <span className="text-sm font-medium">{item.name}</span>}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`bg-foreground text-background border-background absolute top-5 -right-4 z-50 rounded-full border-2 p-1.5 shadow-md transition-all duration-300`}
            >
                {isOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={18} className="animate-pulse" />}
            </button>
        </aside>
    );
};

export default AdminSidebar;
