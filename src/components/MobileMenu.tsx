'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { X } from 'lucide-react';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuVariants = {
    closed: {
        opacity: 0,
        x: '100%',
        transition: {
            stiffness: 400,
            damping: 40,
        },
    },
    open: {
        opacity: 1,
        x: 0,
        transition: {
            stiffness: 400,
            damping: 40,
        },
    },
};

const linkVariants = {
    closed: { x: 20, opacity: 0 },
    open: (i: number) => ({
        x: 0,
        opacity: 1,
        transition: {
            delay: i * 0.1,
        },
    }),
};

const links = [
    { name: 'Kelebihan', href: '#features' },
    { name: 'Pakej', href: '#pricing' },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                    />

                    {/* Menu Drawer */}
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white shadow-2xl z-50 md:hidden flex flex-col"
                    >
                        <div className="flex justify-end p-4">
                            <button
                                onClick={onClose}
                                className="p-2 text-sage-500 hover:text-emerald-deep hover:bg-sage-50 rounded-full transition-colors"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="flex flex-col px-6 py-8 space-y-6">
                            {links.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    custom={i}
                                    variants={linkVariants}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={onClose}
                                        className="text-xl font-medium text-sage-600 hover:text-emerald-deep transition-colors block"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                custom={links.length}
                                variants={linkVariants}
                                className="pt-4"
                            >
                                <Link
                                    href="#pricing"
                                    onClick={onClose}
                                    className="block w-full text-center bg-emerald-deep text-white px-6 py-3 rounded-full hover:bg-emerald-900 transition-colors font-medium text-lg shadow-lg shadow-emerald-900/20"
                                >
                                    Daftar Sekarang
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
