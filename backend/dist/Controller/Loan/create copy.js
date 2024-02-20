"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var create_copy_exports = {};
__export(create_copy_exports, {
  createLoan: () => createLoan
});
module.exports = __toCommonJS(create_copy_exports);
var import_DB = require("../../DB");
async function createLoan(request, response, next) {
  try {
    const newRequest = request;
    const { user } = newRequest;
    const { amount, duration, installments, interestRate, attachments, address, bank, loan_name, name } = newRequest.body;
    const newLoan = await import_DB.LoanRepository.create({
      data: {
        //@ts-ignore
        address,
        bank,
        loan_name,
        name,
        amount: Number(amount),
        duration: Number(duration),
        installments: Number(installments),
        interestRate: Number(interestRate),
        user_id: user.id
      }
    });
    const newAttachments = attachments.map((attachment) => import_DB.LoanAttachmentRepository.create({ data: { ...attachment, loan_id: newLoan.id } }));
    await Promise.all(newAttachments);
    response.json(newLoan);
  } catch (err) {
    next(err);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createLoan
});
