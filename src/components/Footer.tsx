import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-sage-100 border-t border-sage-200 pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-xl font-bold text-emerald-deep">Quran Club</span>
                        <p className="text-sage-500 text-sm mt-1">Belajar Al-Quran Bersama Komuniti</p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="text-sage-400 hover:text-emerald-deep transition-colors">
                            <span className="sr-only">Facebook</span>
                            <Facebook className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-sage-400 hover:text-emerald-deep transition-colors">
                            <span className="sr-only">Instagram</span>
                            <Instagram className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-sage-400 hover:text-emerald-deep transition-colors">
                            <span className="sr-only">Twitter</span>
                            <Twitter className="h-6 w-6" />
                        </a>
                    </div>
                </div>

                <div className="mt-8 border-t border-sage-200 pt-8 text-center">
                    <p className="text-sm text-sage-400">
                        &copy; {new Date().getFullYear()} Quran Club. Hak Cipta Terpelihara.
                    </p>
                </div>
            </div>
        </footer>
    );
}
