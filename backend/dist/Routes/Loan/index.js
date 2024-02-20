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
var Loan_exports = {};
__export(Loan_exports, {
  LoanRouter: () => LoanRouter
});
module.exports = __toCommonJS(Loan_exports);
var import_express = require("express");
var import_changeStatusAdmin = require("../../Controller/Loan/changeStatusAdmin");
var import_create = require("../../Controller/Loan/create");
var import_getBanks = require("../../Controller/Loan/getBanks");
var import_getLoan = require("../../Controller/Loan/getLoan");
var import_getLoanAdmin = require("../../Controller/Loan/getLoanAdmin");
var import_getLoanAdminAll = require("../../Controller/Loan/getLoanAdminAll");
var import_loanTemplates = require("../../Controller/Loan/loanTemplates");
var import_jwtAuth = require("../../Middlewares/jwtAuth");
var import_validateRequestPayload = require("../../Middlewares/validateRequestPayload");
var import_Loan = require("../../Schemas/Loan");
const LoanRouter = (0, import_express.Router)();
LoanRouter.get("/banks", import_jwtAuth.authenticateWithJwt, import_getBanks.getBanks);
LoanRouter.get("/templates", import_jwtAuth.authenticateWithJwt, import_loanTemplates.getLoanTemplates);
LoanRouter.get("/", import_jwtAuth.authenticateWithJwt, import_getLoan.getLoan);
LoanRouter.get("/all", import_jwtAuth.authenticateWithJwt, import_getLoanAdminAll.getLoanAdminAll);
LoanRouter.get("/admin", import_jwtAuth.authenticateWithJwt, import_getLoanAdmin.getLoanAdmin);
LoanRouter.post("/", import_jwtAuth.authenticateWithJwt, (0, import_validateRequestPayload.validateRequestPayload)(import_Loan.createLoanSchema), import_create.createLoan);
LoanRouter.put("/", import_jwtAuth.authenticateWithJwt, (0, import_validateRequestPayload.validateRequestPayload)(import_Loan.updateLoanStatusSchema), import_changeStatusAdmin.updateLoanStatus);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LoanRouter
});
