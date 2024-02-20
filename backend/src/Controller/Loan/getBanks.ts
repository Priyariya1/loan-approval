import { NextFunction, Request, Response } from 'express';


export async function getBanks(request: Request, response: Response, next: NextFunction) {

    const banks = [
        { name: 'HDFC' },
        { name: 'Federal Bank' },
        { name: 'SBI' },
        { name: 'ICICI' },
        { name: 'Kotak Mahindra' },

    ] as { name: string }[]


    response.json(banks);


}