/*
  Warnings:

  - You are about to drop the column `capacidade` on the `Estoque` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Estoque" DROP COLUMN "capacidade";

-- AlterTable
ALTER TABLE "Produto" ALTER COLUMN "dataValidade" SET DATA TYPE TEXT;
