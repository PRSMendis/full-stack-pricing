import { PrismaClient, DateTime } from '@prisma/client'; // Import the DateTime type
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
      Red: 'Red',
      price: 279.06,
      createdAt: DateTime.now(), // Correct the syntax of the @default decorator
      updatedAt: DateTime.now(), // Correct the syntax of the @updatedAt decorator
    },
  });
  console.log(pinot)
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

