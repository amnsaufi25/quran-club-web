import { Star } from 'lucide-react';

const testimonials = [
    {
        body: 'Alhamdulillah, sejak menyertai Quran Club, bacaan saya semakin lancar. Ustaz sangat membantu dan sabar dalam mengajar.',
        author: {
            name: 'Ahmad Zulfikar',
            handle: 'Peserta Pakej Standard',
            imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        body: 'Kelas online yang sangat fleksibel. Saya boleh belajar walaupun sibuk dengan kerja. Sangat disyorkan untuk mereka yang bekerja.',
        author: {
            name: 'Sarah Aminah',
            handle: 'Peserta Pakej Premium',
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        name: 'Haji Ismail',
        body: 'Seronok dapat belajar dalam kumpulan. Rasa bersemangat bila ada kawan-kawan yang sama-sama nak perbaiki bacaan.',
        author: {
            name: 'Haji Ismail',
            handle: 'Peserta Pakej Basic',
            imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
];

export default function Testimonials() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-emerald-600">Testimoni</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl">
                        Apa Kata Pelajar Kami
                    </p>
                </div>
                <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.author.name} className="rounded-2xl bg-cream-50 p-6 ring-1 ring-sage-200">
                                <blockquote className="text-sage-500 leading-7">
                                    <p>"{testimonial.body}"</p>
                                </blockquote>
                                <div className="mt-6 flex items-center gap-x-4">
                                    <img className="h-10 w-10 rounded-full bg-sage-100" src={testimonial.author.imageUrl} alt="" />
                                    <div>
                                        <div className="font-semibold text-emerald-900">{testimonial.author.name}</div>
                                        <div className="text-sm leading-6 text-sage-500">{testimonial.author.handle}</div>
                                    </div>
                                </div>
                                <div className="mt-4 flex text-emerald-500">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-current" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
