import { Clock, Users, Video, Award } from 'lucide-react';

const features = [
    {
        name: 'Masa Fleksibel',
        description: 'Pilih waktu belajar yang sesuai dengan jadual harian anda. Kami menawarkan pelbagai slot masa dari pagi hingga malam.',
        icon: Clock,
    },
    {
        name: 'Asatizah Bertauliah',
        description: 'Belajar daripada guru-guru yang mempunyai sanad dan tauliah mengajar. Bimbingan yang tepat dan berkualiti.',
        icon: Award,
    },
    {
        name: 'Kelas Online Interaktif',
        description: 'Sesi pembelajaran dijalankan menerusi Google Meet atau Zoom. Mudah, jimat masa, dan boleh diakses di mana sahaja.',
        icon: Video,
    },
    {
        name: 'Komuniti Sokongan',
        description: 'Sertai kumpulan WhatsApp eksklusif untuk bertanya soalan, berkongsi ilmu, dan mendapat motivasi daripada rakan-rakan.',
        icon: Users,
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 sm:py-32 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-emerald-600">Kenapa Pilih Kami?</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl">
                        Pembelajaran Al-Quran Yang Mudah & Efektif
                    </p>
                    <p className="mt-6 text-lg leading-8 text-sage-500">
                        Kami komited untuk menyediakan platform pembelajaran Al-Quran yang terbaik untuk anda dan keluarga.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-emerald-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-deep">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-sage-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
