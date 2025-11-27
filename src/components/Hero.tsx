'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-cream-100 py-20 sm:py-32 lg:pb-32 xl:pb-36">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl lg:max-w-4xl lg:text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block rounded-full bg-sage-200 px-3 py-1 text-sm font-semibold text-emerald-800 mb-6">
                            Kelas Online Kini Dibuka
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl font-bold tracking-tight text-emerald-900 sm:text-6xl"
                    >
                        Belajar Al-Quran Bersama <span className="text-emerald-600">Komuniti</span> Secara Online
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-6 text-lg leading-8 text-sage-500"
                    >
                        Tingkatkan bacaan dan kefahaman Al-Quran anda dari keselesaan rumah.
                        Sertai sesi Google Meet/Zoom bersama asatizah bertauliah dan rakan-rakan seperjuangan.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-10 flex items-center justify-center gap-x-6"
                    >
                        <Link
                            href="#pricing"
                            className="rounded-full bg-emerald-deep px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-all flex items-center gap-2"
                        >
                            Daftar Sekarang <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link href="#features" className="text-sm font-semibold leading-6 text-emerald-900 hover:text-emerald-700">
                            Ketahui Lebih Lanjut <span aria-hidden="true">→</span>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-cream-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-sage-300 opacity-20 blur-[100px]"></div>
        </section>
    );
}
