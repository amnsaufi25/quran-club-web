const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    try {
        await prisma.$connect();
        console.log('Successfully connected to the database');
        const count = await prisma.lead.count();
        console.log(`Current lead count: ${count}`);
    } catch (e) {
        console.error('Connection error:', e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
