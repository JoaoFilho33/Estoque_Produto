/*
  Warnings:

  - You are about to drop the column `produtoId` on the `Produto` table. All the data in the column will be lost.
  - Added the required column `armazemid` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_id_fkey";

-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "produtoId",
ADD COLUMN     "armazemid" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_armazemid_fkey" FOREIGN KEY ("armazemid") REFERENCES "Estoque"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
