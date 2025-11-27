import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { password } = parsedCredentials.data;
                    // Simple check against environment variable
                    // In a real app, you would hash the password and compare
                    if (password === process.env.ADMIN_PASSWORD) {
                        return { id: '1', name: 'Admin', email: 'admin@quranclub.com' };
                    }
                }
                return null;
            },
        }),
    ],
});
