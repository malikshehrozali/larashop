import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { useTranslate } from '@/hooks/use-translate';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, Home, ShoppingBag, Vegan } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Home',
        url: '/',
        icon: Home,
    },
    {
        title: 'Shop',
        url: '/shop',
        icon: ShoppingBag,
    },
    {
        title: 'Your Orders',
        url: '/orders',
        icon: Vegan,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Settings',
        url: '/settings',
        icon: Folder,
    },
    {
        title: 'About Us',
        url: '/about',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    const { locale } = useTranslate();
    const side = locale === 'ur' ? 'right' : 'left';

    return (
        <Sidebar collapsible="icon" variant="inset" side={side}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
