import { NextFunction, Request, Response } from 'express';


export async function getLoanTemplates(request: Request, response: Response, next: NextFunction) {

    const loans = {
        "housingLoan": [
            {
                name: 'Happy family', description: "", duration: [
                    { duration: 100, interestRate: 14 },
                    { duration: 150, interestRate: 15 },
                    { duration: 200, interestRate: 16 },
                    { duration: 250, interestRate: 18 },
                ],
                type: 'housingLoan',
            },
            {
                name: 'Retirement Home', description: "", duration: [
                    { duration: 100, interestRate: 14 },
                    { duration: 150, interestRate: 15 },
                    { duration: 200, interestRate: 16 },
                    { duration: 250, interestRate: 18 },
                ],
                type: 'housingLoan',

            },
            {
                name: 'Sweet home', description: "", duration: [
                    { duration: 100, interestRate: 14 },
                    { duration: 150, interestRate: 15 },
                    { duration: 200, interestRate: 16 },
                    { duration: 250, interestRate: 18 },
                ],
                type: 'housingLoan',

            },
        ],
        "carLoan": [
            {
                name: 'Happy family', description: "", duration: [
                    { duration: 100, interestRate: 14 },
                    { duration: 150, interestRate: 15 },
                    { duration: 200, interestRate: 16 },
                    { duration: 250, interestRate: 18 },
                ],
                type: 'carLoan',

            },
            {
                name: 'Dream Car', description: "", duration: [
                    { duration: 100, interestRate: 14 },
                    { duration: 150, interestRate: 15 },
                    { duration: 200, interestRate: 16 },
                    { duration: 250, interestRate: 18 },
                ],
                type: 'carLoan',

            },
            {
                name: "Children's Pappa", description: "", duration: [
                    { duration: 100, interestRate: 14 },
                    { duration: 150, interestRate: 15 },
                    { duration: 200, interestRate: 16 },
                    { duration: 250, interestRate: 18 },
                ],
                type: 'carLoan',

            },
        ]

    } as {
        [ key: string ]: {
            name: string,
            description: string,
            duration: { duration: number, interestRate: number }[],
            type: string
        }[]
    }


    response.json(loans);


}