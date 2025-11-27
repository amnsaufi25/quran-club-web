'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-100/80 backdrop-blur-md border-b border-sage-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="text-2xl font-bold text-emerald-deep">
                                Quran Club
                            </Link>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="#features" className="text-sage-500 hover:text-emerald-deep transition-colors">
                                Kelebihan
                            </Link>
                            <Link href="#pricing" className="text-sage-500 hover:text-emerald-deep transition-colors">
                                Pakej
                            </Link>
                            <Link
                                href="#pricing"
                                className="bg-emerald-deep text-white px-4 py-2 rounded-full hover:bg-emerald-900 transition-colors font-medium"
                            >
                                Daftar Sekarang
                            </Link>
                        </div>

                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="text-sage-500 hover:text-emerald-deep p-2"
                            >
                                <Menu className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </>
    );
}
