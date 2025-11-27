'use server';

import { z } from 'zod';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

const LeadSchema = z.object({
    name: z.string().min(1, 'Nama diperlukan'),
    email: z.string().email('Emel tidak sah'),
    phone: z.string().min(1, 'Nombor telefon diperlukan'),
    package: z.string().min(1, 'Pakej diperlukan'),
});

export async function submitLead(prevState: any, formData: FormData) {
    const validatedFields = LeadSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        package: formData.get('package'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Sila periksa maklumat anda.',
        };
    }

    const { name, email, phone, package: packageType } = validatedFields.data;

    try {
        await prisma.lead.create({
            data: {
                name,
                email,
                phone,
                package: packageType,
            },
        });

        revalidatePath('/admin');
        return { message: 'Pendaftaran berjaya! Kami akan menghubungi anda sebentar lagi.' };
    } catch (error) {
        console.error('Database Error:', error);
        return { message: 'Gagal mendaftar. Sila cuba lagi nanti.' };
    }
}
