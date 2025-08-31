-- CreateEnum
CREATE TYPE "public"."Choice" AS ENUM ('A', 'B');

-- CreateTable
CREATE TABLE "public"."Topic" (
    "id" SERIAL NOT NULL,
    "day" DATE NOT NULL,
    "title" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "optionA" TEXT NOT NULL,
    "optionB" TEXT NOT NULL,
    "openedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Vote" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "topicId" INTEGER NOT NULL,
    "choice" "public"."Choice" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Topic_day_key" ON "public"."Topic"("day");

-- CreateIndex
CREATE INDEX "Vote_topicId_choice_idx" ON "public"."Vote"("topicId", "choice");

-- CreateIndex
CREATE INDEX "Vote_userId_idx" ON "public"."Vote"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Vote_userId_topicId_key" ON "public"."Vote"("userId", "topicId");

-- AddForeignKey
ALTER TABLE "public"."Vote" ADD CONSTRAINT "Vote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Vote" ADD CONSTRAINT "Vote_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "public"."Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
