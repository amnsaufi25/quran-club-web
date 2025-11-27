'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/actions/auth';
import { Lock } from 'lucide-react';

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:opacity-50 transition-colors"
        >
            {pending ? 'Sedang Log Masuk...' : 'Log Masuk'}
        </button>
    );
}

export default function LoginPage() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);

    return (
        <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="mx-auto h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Lock className="h-6 w-6 text-emerald-600" />
                </div>
                <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Admin Login
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action={dispatch} className="space-y-6">
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Kata Laluan
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 px-3"
                            />
                        </div>
                    </div>

                    {errorMessage && (
                        <p className="text-sm text-red-600 text-center">{errorMessage}</p>
                    )}

                    <div>
                        <LoginButton />
                    </div>
                </form>
            </div>
        </div>
    );
}
