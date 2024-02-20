import { NextFunction, Request, Response } from 'express';
import { LoanAttachmentRepository, LoanRepository } from '../../DB';


export async function createLoan(request: Request, response: Response, next: NextFunction) {

    try {
        const newRequest = request as unknown as AuthRequest<Request, Loan.createPayload>

        const { user } = newRequest;

        const { amount, duration, installments, interestRate, attachments, address, bank, loan_name, name } = newRequest.body;

        const newLoan = await LoanRepository.create({
            data: {
                //@ts-ignore
                address,
                bank, loan_name, name,
                amount: Number(amount),
                duration: Number(duration),
                installments: Number(installments),
                interestRate: Number(interestRate),
                user_id: user.id
            }
        })

        const newAttachments = attachments.map((attachment) => LoanAttachmentRepository.create({ data: { ...attachment, loan_id: newLoan.id } }))


        await Promise.all(newAttachments);

        response.json(newLoan);
    } catch (err) {
        next(err)
    }

}