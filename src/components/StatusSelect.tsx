'use client';

import { useState } from 'react';
import { updateLeadStatus } from '@/actions/lead';

interface StatusSelectProps {
    leadId: string;
    initialStatus: string;
}

const STATUS_OPTIONS = [
    { value: 'BARU', label: 'Baru', color: 'bg-blue-100 text-blue-800' },
    { value: 'DIHUBUNGI', label: 'Dihubungi', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'BERJAYA', label: 'Berjaya', color: 'bg-green-100 text-green-800' },
    { value: 'BATAL', label: 'Batal', color: 'bg-red-100 text-red-800' },
];

export default function StatusSelect({ leadId, initialStatus }: StatusSelectProps) {
    const [status, setStatus] = useState(initialStatus);
    const [loading, setLoading] = useState(false);

    const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = e.target.value;
        setStatus(newStatus);
        setLoading(true);

        const result = await updateLeadStatus(leadId, newStatus);

        if (!result.success) {
            alert(result.message);
            setStatus(initialStatus); // Revert on failure
        }

        setLoading(false);
    };

    const currentOption = STATUS_OPTIONS.find(opt => opt.value === status) || STATUS_OPTIONS[0];

    return (
        <div className="relative">
            <select
                value={status}
                onChange={handleChange}
                disabled={loading}
                className={`block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-emerald-600 sm:text-sm sm:leading-6 ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
                {STATUS_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {loading && (
                <div className="absolute inset-y-0 right-0 flex items-center pr-8 pointer-events-none">
                    <svg className="animate-spin h-4 w-4 text-emerald-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </div>
            )}
        </div>
    );
}
