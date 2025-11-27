'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function updateLeadStatus(leadId: string, newStatus: string) {
    try {
        await prisma.lead.update({
            where: {
                id: leadId,
            },
            data: {
                status: newStatus,
            },
        });

        revalidatePath('/admin');
        return { success: true, message: 'Status berjaya dikemaskini.' };
    } catch (error) {
        console.error('Failed to update lead status:', error);
        return { success: false, message: 'Gagal mengemaskini status.' };
    }
}
