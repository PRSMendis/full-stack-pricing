/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// TODO: Fix typing of seed file
import { PrismaClient } from '@prisma/client'; // Import the DateTime type
const prisma = new PrismaClient();
async function main() {
const pinot = await prisma.product.upsert({
    where: { sku: 'HGVPIN216' },
    update: {},
    create: {
        sku: 'HGVPIN216',
        name: 'High Garden  Pinot Noir 2021',
        quantity: 1,
        brand: 'High Garden ',
        categoryId: 'Alcoholic Beverage',
        subCategoryId: 'Wine',
        segmentId: 'Red',
        price: 279.06,
        createdAt: new Date(),
        updatedAt: new Date(), 
    },
});

const brutNature = await prisma.product.upsert({
    where: { sku: 'KOYBRUNV6' },
    update: {},
    create: {
        sku: 'KOYBRUNV6',
        name: 'Koyama Methode  Brut Nature NV',
        quantity: 1,
        brand: 'Koyama Wines',
        categoryId: 'Alcoholic Beverage',
        subCategoryId: 'Wine',
        segmentId: 'Sparkling',
        price: 120,
        createdAt: new Date(),
        updatedAt: new Date(), 
    },
});

const riesling = await prisma.product.upsert({
    where: { sku: 'KOYNR1837' },
    update: {},
    create: {
        sku: 'KOYNR1837',
        name: 'Koyama  Riesling 2018',
        quantity: 1,
        brand: 'Koyama Wines',
        categoryId: 'Alcoholic Beverage',
        subCategoryId: 'Wine',
        segmentId: 'Port/Dessert',
        price: 215.04,
        createdAt: new Date(),
        updatedAt: new Date(), 
    },
});

console.log(pinot, brutNature, riesling);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e: unknown) => {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error('An unexpected error occurred');
    }
    await prisma.$disconnect();
    process.exit(1);
  });

