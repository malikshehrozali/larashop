import { useAppearance } from '@/hooks/use-appearance';
import { Monitor, Moon, Sun } from 'lucide-react';

const ApearanceChanger = () => {
    const { appearance, updateAppearance } = useAppearance();
    const getCurrentIcon = () => {
        switch (appearance) {
            case 'dark':
                return <Moon className="h-5 w-5" />;
            case 'light':
                return <Sun className="h-5 w-5" />;
            default:
                return <Monitor className="h-5 w-5" />;
        }
    };
    return <button onClick={() => updateAppearance(appearance === 'dark' ? 'light' : 'dark')}>{getCurrentIcon()}</button>;
};

export default ApearanceChanger;
