import { useTranslate } from '@/hooks/use-translate';
import { motion } from 'framer-motion';
import { Gem, Glasses, Shirt, ShoppingBag, Sparkles, Watch } from 'lucide-react';
import Heading from './Heading';

const Collections = () => {
    const { t } = useTranslate();

    const categories = [
        { name: 'Watches', icon: Watch, color: 'from-[#eb4c4c] to-[#ff7070]', count: 45 },
        { name: 'Bags', icon: ShoppingBag, color: 'from-[#ff7070] to-[#ffa6a6]', count: 78 },
        { name: 'Jewelry', icon: Gem, color: 'from-[#ffa6a6] to-[#ffedc7]', count: 62 },
        { name: 'Fashion', icon: Shirt, color: 'from-[#eb4c4c] to-[#ffa6a6]', count: 134 },
        { name: 'Accessories', icon: Sparkles, color: 'from-[#ff7070] to-[#ffedc7]', count: 89 },
        { name: 'Eyewear', icon: Glasses, color: 'from-[#eb4c4c] to-[#ffedc7]', count: 34 },
    ];
    return (
        <div className="my-10 flex w-full flex-col gap-10 px-10 py-10">
            <Heading main={t('collections')} sub={t('collectionsSubHeading')} className="mb-8" />
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
                {categories.map((category, index) => {
                    const Icon = category.icon;
                    return (
                        <motion.button
                            key={category.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative overflow-hidden rounded-3xl border-2 border-white/40 bg-white/60 p-6 shadow-lg backdrop-blur-xl transition-all hover:bg-white/80 hover:shadow-2xl"
                        >
                            {/* Animated Background */}
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity group-hover:opacity-10`}
                                initial={{ scale: 0, rotate: 0 }}
                                whileHover={{ scale: 1.5, rotate: 180 }}
                                transition={{ duration: 0.6 }}
                            />

                            <motion.div
                                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                transition={{ duration: 0.5 }}
                                className={`mx-auto mb-4 size-20 rounded-2xl bg-gradient-to-br ${category.color} relative z-10 flex items-center justify-center shadow-xl`}
                            >
                                <Icon className="size-10 text-white" />
                            </motion.div>

                            <div className="mb-1 text-center font-black text-gray-800">{category.name}</div>
                            <div className="text-xs font-bold text-gray-500">{category.count} items</div>

                            {/* Hover Border */}
                            <motion.div
                                className="absolute inset-0 rounded-3xl border-2 border-[#ff7070]"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileHover={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
};

export default Collections;
