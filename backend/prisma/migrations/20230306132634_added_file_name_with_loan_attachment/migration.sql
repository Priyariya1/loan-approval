/*
  Warnings:

  - Added the required column `title` to the `LoanAttachments` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LoanAttachments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "file" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "loan_id" INTEGER NOT NULL,
    CONSTRAINT "LoanAttachments_loan_id_fkey" FOREIGN KEY ("loan_id") REFERENCES "Loan" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_LoanAttachments" ("createdAt", "file", "id", "loan_id") SELECT "createdAt", "file", "id", "loan_id" FROM "LoanAttachments";
DROP TABLE "LoanAttachments";
ALTER TABLE "new_LoanAttachments" RENAME TO "LoanAttachments";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
