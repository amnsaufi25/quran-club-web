'use client';

import { Check } from 'lucide-react';
import { useState } from 'react';
import LeadForm from '@/components/LeadForm';

const tiers = [
    {
        name: 'STARTER TO JANNAH',
        id: 'tier-starter',
        href: '#',
        priceMonthly: 'RM50',
        description: 'Pelajar baru yang nak rasa dulu suasana pembelajaran. Fokus kepada pelajar yang ingin memperbaiki bacaan Quran.',
        features: [
            '1-1 Personal Coaching',
            '1 Kelas Seminggu',
            '30 Minit Setiap Kelas',
            'Terbuka kepada pelajar yang sudah mula membaca Quran',
        ],
        color: 'yellow',
        borderColor: 'border-yellow-400',
        bgColor: 'bg-yellow-50',
        textColor: 'text-yellow-700',
        btnColor: 'bg-yellow-500 hover:bg-yellow-600',
        badge: null,
    },
    {
        name: 'QURAN JOURNEY',
        id: 'tier-journey',
        href: '#',
        priceMonthly: 'RM100',
        description: 'Pelajar yang mahu belajar secara konsisten dalam tempoh sederhana.',
        features: [
            '1-1 Personal Coaching',
            '1 Kelas Seminggu',
            '60 Minit Setiap Kelas',
            'Terbuka kepada semua peringkat pelajar',
        ],
        color: 'blue',
        borderColor: 'border-blue-400',
        bgColor: 'bg-blue-50',
        textColor: 'text-blue-700',
        btnColor: 'bg-blue-500 hover:bg-blue-600',
        badge: null,
    },
    {
        name: 'QURANTIME',
        id: 'tier-qurantime',
        href: '#',
        priceMonthly: 'RM150',
        description: 'Pelajar yang mahu belajar secara konsisten tetapi mempunyai kekangan masa.',
        features: [
            '1-1 Personal Coaching',
            '2 Kelas Seminggu',
            '30 Minit Setiap Kelas',
            'Terbuka kepada semua peringkat pelajar',
        ],
        color: 'green',
        borderColor: 'border-emerald-400',
        bgColor: 'bg-emerald-50',
        textColor: 'text-emerald-700',
        btnColor: 'bg-emerald-500 hover:bg-emerald-600',
        badge: null,
    },
    {
        name: 'TALAQQI MASTERY',
        id: 'tier-mastery',
        href: '#',
        priceMonthly: 'RM200',
        description: 'Pelajar yang serius mahu memperbaiki bacaan, mahraj & tajwid dengan kemajuan cepat.',
        features: [
            '1-1 Personal Coaching',
            '2 Kelas Seminggu',
            '60 Minit Setiap Kelas',
            'Terbuka kepada semua peringkat pelajar',
        ],
        color: 'red',
        borderColor: 'border-red-400',
        bgColor: 'bg-red-50',
        textColor: 'text-red-700',
        btnColor: 'bg-red-500 hover:bg-red-600',
        badge: 'TERHAD',
    },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
    const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

    const handleSelectPackage = (packageName: string) => {
        setSelectedPackage(packageName);
    };

    const handleCloseModal = () => {
        setSelectedPackage(null);
    };

    return (
        <section id="pricing" className="py-24 sm:py-32 bg-cream-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl">Pakej Pembelajaran</h2>
                    <p className="mt-6 text-lg leading-8 text-sage-500">
                        Pilih pakej yang bersesuaian dengan matlamat dan jadual anda. Tiada yuran tersembunyi.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-none lg:grid-cols-4 lg:gap-x-8">
                    {tiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={classNames(
                                tier.borderColor,
                                tier.bgColor,
                                'relative p-8 rounded-3xl border-2 flex flex-col justify-between transition-transform hover:scale-105 duration-300'
                            )}
                        >
                            {tier.badge && (
                                <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md animate-pulse">
                                    {tier.badge}
                                </div>
                            )}
                            <div>
                                <h3 id={tier.id} className={classNames(tier.textColor, "text-base font-bold leading-7")}>
                                    {tier.name}
                                </h3>
                                <div className="mt-4 flex items-baseline gap-x-2">
                                    <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.priceMonthly}</span>
                                    <span className="text-sm font-semibold leading-6 text-gray-600">/bulan</span>
                                </div>
                                <p className="mt-6 text-sm leading-6 text-gray-600">{tier.description}</p>
                                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <Check className={classNames(tier.textColor, "h-6 w-5 flex-none")} aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button
                                onClick={() => handleSelectPackage(tier.name)}
                                aria-describedby={tier.id}
                                className={classNames(
                                    tier.btnColor,
                                    'mt-8 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors'
                                )}
                            >
                                Langgan Sekarang
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {selectedPackage && (
                <LeadForm selectedPackage={selectedPackage} onClose={handleCloseModal} />
            )}
        </section>
    );
}
