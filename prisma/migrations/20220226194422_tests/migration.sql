-- CreateTable
CREATE TABLE "TestModel" (
    "id" SERIAL NOT NULL,
    "authorId" INTEGER NOT NULL,
    "data" TEXT NOT NULL,
    "results" TEXT NOT NULL,

    CONSTRAINT "TestModel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TestModel" ADD CONSTRAINT "TestModel_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "UserModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
