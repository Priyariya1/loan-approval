declare module Loan {

    interface createPayload {
        name:string,
        address:string,
        loan_name:string,
        bank:string
        amount: number,
        duration: number,
        interestRate: number,
        installments: number,
        attachments: { file: string, title: string }[]
    }

    interface createBankPayload {
        name : string,
    }
}