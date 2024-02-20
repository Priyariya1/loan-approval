import { NextFunction, Request, Response } from 'express';
import { LoanAttachmentRepository, LoanRepository, BankRepository } from '../../DB';


export async function createBank(request: Request, response: Response, next: NextFunction) {

    try {
        const newRequest = request as unknown as AuthRequest<Request, Loan.createBankPayload>

        const { name } = newRequest.body;

        const newBank = await BankRepository.create({
            data: {
                name
            }
        })

        response.json(newBank);
    } catch (err) {
        next(err)
    }

}