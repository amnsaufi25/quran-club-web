'use client';

import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitLead } from '@/actions/submitLead';
import { X } from 'lucide-react';

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full rounded-md bg-emerald-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
            {pending ? 'Sedang Memproses...' : 'Hantar Pendaftaran'}
        </button>
    );
}

interface LeadFormProps {
    selectedPackage: string;
    onClose: () => void;
}

const initialState = {
    message: '',
    errors: {},
};

export default function LeadForm({ selectedPackage, onClose }: LeadFormProps) {
    const [state, formAction] = useState(initialState);

    const handleSubmit = async (formData: FormData) => {
        const result = await submitLead(initialState, formData);
        if (result?.message && !result?.errors) {
            // Success case
            alert(result.message);
            onClose();
        } else {
            // Error case
            // @ts-ignore
            formAction(result);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose} />

            <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                        type="button"
                        className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                        onClick={onClose}
                    >
                        <span className="sr-only">Close</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                        <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">
                            Daftar Minat - {selectedPackage}
                        </h3>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500">
                                Isi maklumat di bawah untuk mendaftar minat. Kami akan menghubungi anda untuk langkah seterusnya.
                            </p>
                        </div>

                        <form action={handleSubmit} className="mt-6 space-y-6">
                            <input type="hidden" name="package" value={selectedPackage} />

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Nama Penuh
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 px-3"
                                    />
                                </div>
                                {/* @ts-ignore */}
                                {state?.errors?.name && (
                                    <p className="mt-2 text-sm text-red-600">{state.errors.name[0]}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Alamat Emel
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 px-3"
                                    />
                                </div>
                                {/* @ts-ignore */}
                                {state?.errors?.email && (
                                    <p className="mt-2 text-sm text-red-600">{state.errors.email[0]}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                                    Nombor Telefon (WhatsApp)
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        required
                                        placeholder="+60123456789"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 px-3"
                                    />
                                </div>
                                {/* @ts-ignore */}
                                {state?.errors?.phone && (
                                    <p className="mt-2 text-sm text-red-600">{state.errors.phone[0]}</p>
                                )}
                            </div>

                            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                <SubmitButton />
                            </div>
                            {/* @ts-ignore */}
                            {state?.message && !state?.errors && (
                                // @ts-ignore
                                <p className="mt-4 text-sm text-center text-red-600">{state.message}</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
