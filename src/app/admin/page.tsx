import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import { logout } from '@/actions/auth';
import { LogOut, ChevronLeft, ChevronRight } from 'lucide-react';
import { Lead } from '@prisma/client';
import StatusSelect from '@/components/StatusSelect';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const ITEMS_PER_PAGE = 10;

async function getLeads(page: number) {
    try {
        const skip = (page - 1) * ITEMS_PER_PAGE;
        const [leads, total] = await Promise.all([
            prisma.lead.findMany({
                orderBy: {
                    createdAt: 'desc',
                },
                skip,
                take: ITEMS_PER_PAGE,
            }),
            prisma.lead.count(),
        ]);
        return { leads, total };
    } catch (error) {
        console.error('Failed to fetch leads:', error);
        return { leads: [], total: 0 };
    }
}

export default async function AdminPage({
    searchParams,
}: {
    searchParams: { page?: string };
}) {
    const session = await auth();

    if (!session) {
        redirect('/admin/login');
    }

    const currentPage = Number(searchParams.page) || 1;
    const { leads, total } = await getLeads(currentPage);
    const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                    <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                            Total: {total}
                        </span>
                        <form action={logout}>
                            <button
                                type="submit"
                                className="flex items-center gap-2 bg-red-100 text-red-700 hover:bg-red-200 px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
                            >
                                <LogOut className="h-4 w-4" />
                                <span className="hidden sm:inline">Log Keluar</span>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Mobile Card View */}
                <div className="grid grid-cols-1 gap-4 sm:hidden mb-6">
                    {leads.map((lead: Lead) => (
                        <div key={lead.id} className="bg-white p-4 rounded-lg shadow space-y-3">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-semibold text-gray-900">{lead.name}</h3>
                                    <p className="text-sm text-gray-500">{new Date(lead.createdAt).toLocaleDateString('ms-MY')}</p>
                                </div>
                                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                    {lead.package}
                                </span>
                            </div>
                            <div className="text-sm text-gray-600 space-y-1">
                                <p>{lead.email}</p>
                                <p>{lead.phone}</p>
                            </div>
                            <div className="pt-2 border-t border-gray-100">
                                <StatusSelect leadId={lead.id} initialStatus={lead.status} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop Table View */}
                <div className="hidden sm:block bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Tarikh
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Nama
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Emel
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Telefon
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Pakej
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {leads.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                                        Tiada data dijumpai.
                                    </td>
                                </tr>
                            ) : (
                                leads.map((lead: Lead) => (
                                    <tr key={lead.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {new Date(lead.createdAt).toLocaleDateString('ms-MY')}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {lead.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {lead.email}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {lead.phone}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                {lead.package}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <StatusSelect leadId={lead.id} initialStatus={lead.status} />
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center mt-6 gap-4">
                        <Link
                            href={`/admin?page=${currentPage - 1}`}
                            className={`p-2 rounded-full hover:bg-gray-100 ${currentPage <= 1 ? 'pointer-events-none opacity-50' : ''}`}
                        >
                            <ChevronLeft className="h-5 w-5 text-gray-600" />
                        </Link>
                        <span className="text-sm text-gray-600">
                            Halaman {currentPage} dari {totalPages}
                        </span>
                        <Link
                            href={`/admin?page=${currentPage + 1}`}
                            className={`p-2 rounded-full hover:bg-gray-100 ${currentPage >= totalPages ? 'pointer-events-none opacity-50' : ''}`}
                        >
                            <ChevronRight className="h-5 w-5 text-gray-600" />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
