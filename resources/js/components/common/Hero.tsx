import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShoppingBag, Sparkles, Star, TrendingUp, Zap } from 'lucide-react';
import { useRef } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useTranslate } from '@/hooks/use-translate';

const stats = [
    { value: '500+', label: 'Products', icon: Zap },
    { value: '10k+', label: 'Happy Clients', icon: Sparkles },
    { value: '4.9★', label: 'Rating', icon: TrendingUp },
];

const avatars = [
    'https://i.pravatar.cc/40?img=1',
    'https://i.pravatar.cc/40?img=2',
    'https://i.pravatar.cc/40?img=3',
    'https://i.pravatar.cc/40?img=4',
];

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
    const { t } = useTranslate();
    return (
        <TooltipProvider>
            <section
                ref={containerRef}
                className="bg-background relative flex min-h-screen items-center overflow-hidden"
                style={{ overflowX: 'clip' }}
            >
                {/* Subtle grid background */}
                {/* <div
                    className="pointer-events-none absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                /> */}

                {/* Soft color blobs — tasteful, not garish */}
                {/* <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-rose-100/50 blur-[100px]" />
                <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-amber-100/40 blur-[100px]" /> */}

                <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                        {/* ── LEFT COLUMN ── */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col gap-6 sm:gap-8"
                        >
                            {/* Badge pill */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.15, duration: 0.5, ease: 'backOut' }}
                            >
                                <Badge
                                    variant="outline"
                                    className="inline-flex items-center gap-2 rounded-full border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700 shadow-sm"
                                >
                                    <Sparkles className="size-3.5" />
                                    Spring Collection 2026
                                    <TrendingUp className="size-3.5" />
                                </Badge>
                            </motion.div>

                            {/* Heading */}
                            <div className="space-y-3">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                    className="text-5xl leading-[1.05] font-black tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
                                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                                >
                                    <span className="block bg-gradient-to-br from-rose-500 via-rose-400 to-orange-300 bg-clip-text text-transparent">
                                        {t('fashion', 'Fashion')}
                                    </span>
                                    <span className="text-foreground block"> {t('reimagined', 'Reimagined')}</span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.35 }}
                                    className="text-muted-foreground max-w-md text-base leading-relaxed sm:text-lg"
                                >
                                    {t(
                                        'heroDescription',
                                        'Discover the latest trends in fashion with our exclusive collection. Shop now and elevate your style to new heights.',
                                    )}
                                </motion.p>
                            </div>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.45 }}
                                className="flex flex-col gap-3 sm:flex-row sm:gap-4"
                            >
                                <Button
                                    size="lg"
                                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-rose-500 to-rose-400 px-8 py-6 text-base font-bold text-white shadow-lg shadow-rose-200 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-rose-300 active:scale-[0.98]"
                                >
                                    <ShoppingBag className="mr-2 size-5" />
                                    {t('explore', 'Explore Now')}
                                    <ArrowRight className="ml-2 size-5 transition-transform duration-200 group-hover:translate-x-1" />
                                </Button>

                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-border hover:bg-muted rounded-2xl border-2 px-8 py-6 text-base font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    {t('viewCatalog', 'View Catalog')}
                                </Button>
                            </motion.div>

                            {/* Social proof row */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.55 }}
                                className="flex items-center gap-4"
                            >
                                <div className="flex -space-x-2.5">
                                    {avatars.map((src, i) => (
                                        <img
                                            key={i}
                                            src={src}
                                            alt="Customer"
                                            className="border-background size-9 rounded-full border-2 object-cover shadow-sm"
                                        />
                                    ))}
                                </div>
                                <div>
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground text-xs">
                                        Loved by <span className="text-foreground font-semibold">10,000+</span> customers
                                    </p>
                                </div>
                            </motion.div>

                            <Separator className="my-1 opacity-60" />

                            {/* Stats row */}
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.65 }}
                                className="grid grid-cols-3 gap-3 sm:gap-4"
                            >
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 + index * 0.08 }}
                                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                                    >
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Card className="border-border/60 bg-card cursor-default shadow-sm transition-shadow hover:shadow-md">
                                                    <CardContent className="flex flex-col gap-1.5 p-4">
                                                        <stat.icon className="size-4 text-rose-400" />
                                                        <span className="text-foreground text-2xl font-black tracking-tight sm:text-3xl">
                                                            {stat.value}
                                                        </span>
                                                        <span className="text-muted-foreground text-[11px] font-semibold tracking-wider uppercase">
                                                            {stat.label}
                                                        </span>
                                                    </CardContent>
                                                </Card>
                                            </TooltipTrigger>
                                            <TooltipContent side="bottom">
                                                <p>
                                                    {stat.value} {stat.label}
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* ── RIGHT COLUMN — Image ── */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="relative order-first lg:order-last"
                            style={{ overflowX: 'clip' }}
                        >
                            {/* Main image card */}
                            <motion.div
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                className="relative mx-4 sm:mx-6 lg:mx-0"
                            >
                                <div className="border-border/40 relative overflow-hidden rounded-[2.5rem] border shadow-2xl">
                                    {/* Overlay */}
                                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                                    <motion.div style={{ y: imageY }} className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1622079400125-5b6679552976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwd29tYW4lMjBtb2RlbHxlbnwxfHx8fDE3NzE2NTY4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                            alt="Fashion Model"
                                            className="h-[440px] w-full object-cover sm:h-[540px] lg:h-[600px]"
                                        />
                                    </motion.div>
                                </div>

                                {/* Floating card — top left: moved INSIDE the image, inset not negative */}
                                <motion.div
                                    animate={{ y: [0, 8, 0], rotate: [-1, 1, -1] }}
                                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                                    className="absolute top-3 left-3 z-20 sm:top-4 sm:left-4"
                                >
                                    <Card className="border-border/60 shadow-xl backdrop-blur-sm">
                                        <CardContent className="flex items-center gap-3 px-4 py-3 sm:p-5">
                                            <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-rose-400 shadow-md sm:size-12">
                                                <Sparkles className="size-5 text-white sm:size-6" />
                                            </div>
                                            <div>
                                                <p className="text-foreground text-sm font-black sm:text-base">Limited Edition</p>
                                                <p className="text-muted-foreground text-xs font-medium">Only 50 pieces left</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>

                                {/* Floating card — bottom right: INSIDE the image boundary */}
                                <motion.div
                                    animate={{ y: [0, -8, 0], rotate: [1, -1, 1] }}
                                    transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                                    className="absolute right-3 bottom-3 z-20 sm:right-4 sm:bottom-4"
                                >
                                    <Card className="border-border/60 shadow-xl backdrop-blur-sm">
                                        <CardContent className="px-4 py-3 sm:p-5">
                                            <p className="text-3xl font-black text-rose-500 sm:text-4xl">30% OFF</p>
                                            <p className="text-muted-foreground text-xs font-bold">Spring Sale — ends soon</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>

                                {/* Floating tag — right side center: stays inside */}
                                <motion.div
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                    className="absolute top-1/2 right-3 z-20 -translate-y-1/2 sm:right-4"
                                >
                                    <Badge className="bg-background border-border/60 text-foreground flex flex-col items-center gap-1 rounded-2xl border px-3 py-3 shadow-lg">
                                        <Star className="size-4 fill-amber-400 text-amber-400" />
                                        <span className="text-xs font-bold">4.9</span>
                                        <span className="text-muted-foreground text-[10px] font-medium">Rating</span>
                                    </Badge>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </TooltipProvider>
    );
}
