/*
  Warnings:

  - You are about to drop the column `data` on the `TestModel` table. All the data in the column will be lost.
  - Added the required column `test` to the `TestModel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `testMode` to the `TestModel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `TestModel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trainMode` to the `TestModel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TestModel" DROP COLUMN "data",
ADD COLUMN     "parole" TEXT,
ADD COLUMN     "test" TEXT NOT NULL,
ADD COLUMN     "testMode" BOOLEAN NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "trainMode" BOOLEAN NOT NULL;
