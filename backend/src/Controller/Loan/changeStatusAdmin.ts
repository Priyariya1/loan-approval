import { NextFunction, Request, Response } from 'express';
import { LoanAttachmentRepository, LoanRepository } from '../../DB';


export async function updateLoanStatus(request: Request, response: Response, next: NextFunction) {

    try {
        const newRequest = request as unknown as AuthRequest<Request, { status: string, loanId: number }>

        const { loanId, status } = newRequest.body
        const newLoan = await LoanRepository.update({
            where: {
                id: Number(loanId)
            },
            data: { status }
        })

        response.json(newLoan);
    } catch (err) {
        next(err)
    }

}