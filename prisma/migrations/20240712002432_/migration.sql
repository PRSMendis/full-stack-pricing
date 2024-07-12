-- AlterTable
ALTER TABLE "AmendedProduct" ADD COLUMN     "isAmended" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "amendmentValue" SET DEFAULT 0;
