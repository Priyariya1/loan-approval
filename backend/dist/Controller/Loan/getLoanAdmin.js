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
var getLoanAdmin_exports = {};
__export(getLoanAdmin_exports, {
  getLoanAdmin: () => getLoanAdmin
});
module.exports = __toCommonJS(getLoanAdmin_exports);
var import_DB = require("../../DB");
async function getLoanAdmin(request, response, next) {
  try {
    const newLoan = await import_DB.LoanRepository.findMany({
      where: {
        status: "pending"
      },
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
    });
    response.json(newLoan);
  } catch (err) {
    next(err);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getLoanAdmin
});
