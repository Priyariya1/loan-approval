import { Router } from "express";
import { getElections } from "../../Controller/Admin/getElections";
import { updateLoanStatus } from "../../Controller/Loan/changeStatusAdmin";
import { createLoan } from "../../Controller/Loan/create";
import { getBanks } from "../../Controller/Loan/getBanks";
import { getLoan } from "../../Controller/Loan/getLoan";
import { getLoanAdmin } from "../../Controller/Loan/getLoanAdmin";
import { getLoanAdminAll } from "../../Controller/Loan/getLoanAdminAll";
import { getLoanTemplates } from "../../Controller/Loan/loanTemplates";
import { authenticateWithJwt } from "../../Middlewares/jwtAuth";
import { validateRequestPayload } from "../../Middlewares/validateRequestPayload";
import { createLoanSchema, updateLoanStatusSchema } from "../../Schemas/Loan";


export const LoanRouter = Router();


LoanRouter.get('/banks', authenticateWithJwt, getBanks);

LoanRouter.get('/templates', authenticateWithJwt, getLoanTemplates);

LoanRouter.get('/', authenticateWithJwt, getLoan);
LoanRouter.get('/all', authenticateWithJwt, getLoanAdminAll);

LoanRouter.get('/admin', authenticateWithJwt, getLoanAdmin);

LoanRouter.post('/', authenticateWithJwt, validateRequestPayload(createLoanSchema), createLoan);
LoanRouter.put('/', authenticateWithJwt, validateRequestPayload(updateLoanStatusSchema), updateLoanStatus);

// LoanRouter.get('/elections/:electionId', authenticateWithJwt, getElection);

// LoanRouter.get('/elections/:electionId/vote', authenticateWithJwt, getVote);

// LoanRouter.post('/elections', authenticateWithJwt,authenticateAdmin,validateRequestPayload(createElectionSchema), createElection);

// LoanRouter.post('/elections/vote', authenticateWithJwt,validateRequestPayload(createVoteSchema), registerVote);

// LoanRouter.put('/elections/:electionId', authenticateWithJwt,authenticateAdmin, validateRequestPayload(updateElectionSchema), updateElection);

// LoanRouter.delete('/elections/options/:optionId', authenticateWithJwt,authenticateAdmin, deleteOption);
