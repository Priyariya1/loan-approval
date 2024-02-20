import { NextFunction, Request, Response } from 'express';
import { LoanAttachmentRepository, LoanRepository } from '../../DB';


export async function getLoanAdminAll(request: Request, response: Response, next: NextFunction) {

    try {
        // const newRequest = request as unknown as AuthRequest<Request, Loan.createPayload>

        const newLoan = await LoanRepository.findMany({
            select: {
                address: true,
                amount: true,
                bank: true,
                createdAt: true,
                duration: true,
                id: true,
                installments: true,
                interestRate: true,
                loan_name: true,
                name: true,
                status: true,
                user_id: true,

                LoanAttachments: true
            }
        })

        response.json(newLoan);
    } catch (err) {
        next(err)
    }

}