import { PrismaClient,  } from '@prisma/client'



export const db  = new PrismaClient({});

export const UsersRepository = db.user;

export const PickupRequestRepository = db.pickupRequest;

export const ElectionRepository = db.election;

export const ElectionOptionRepository = db.pollingOptions;

export const VoteRepository = db.vote;

export const LoanRepository = db.loan;

export const LoanAttachmentRepository = db.loanAttachments;

export const BankRepository = db.bank;






