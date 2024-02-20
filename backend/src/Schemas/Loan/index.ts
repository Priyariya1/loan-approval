import Joi from "joi";

export const attachmentItemsSchema = Joi.object({
    file: Joi.string().required(),
    title: Joi.string().min(4).required(),
})


export const createLoanSchema = Joi.object({
    bank: Joi.string().min(1).required(),
    jobDescription: Joi.string().min(1).required(),
    loan_name: Joi.string().min(1).required(),
    name: Joi.string().min(1).required(),
    address: Joi.string().min(1).required(),
    amount: Joi.number().min(100).required(),
    duration: Joi.number().min(3).required(),
    interestRate: Joi.number().min(1).required(),
    installments: Joi.number().min(1).required(),
    attachments: Joi.array().items(attachmentItemsSchema).min(1).required(),
})


export const createBankSchema = Joi.object({
    name: Joi.string().min(1).required(),
})
export const updateLoanStatusSchema = Joi.object({
    status: Joi.string().valid('pending','approved','rejected').required(),
    loanId : Joi.number().min(1).required(),
})


