import { NextFunction, Request, Response } from 'express';
import { LoanAttachmentRepository, LoanRepository } from '../../DB';


export async function getLoan(request: Request, response: Response, next: NextFunction) {

    try {
        const newRequest = request as unknown as AuthRequest<Request, Loan.createPayload>

        const { user } = newRequest;

        const newLoan = await LoanRepository.findMany({
            where: {
                user_id: user.id
            }
        })

        response.json(newLoan);
    } catch (err) {
        next(err)
    }

}