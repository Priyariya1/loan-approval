"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Loan_exports = {};
__export(Loan_exports, {
  attachmentItemsSchema: () => attachmentItemsSchema,
  createBankSchema: () => createBankSchema,
  createLoanSchema: () => createLoanSchema,
  updateLoanStatusSchema: () => updateLoanStatusSchema
});
module.exports = __toCommonJS(Loan_exports);
var import_joi = __toESM(require("joi"));
const attachmentItemsSchema = import_joi.default.object({
  file: import_joi.default.string().required(),
  title: import_joi.default.string().min(4).required()
});
const createLoanSchema = import_joi.default.object({
  bank: import_joi.default.string().min(1).required(),
  jobDescription: import_joi.default.string().min(1).required(),
  loan_name: import_joi.default.string().min(1).required(),
  name: import_joi.default.string().min(1).required(),
  address: import_joi.default.string().min(1).required(),
  amount: import_joi.default.number().min(100).required(),
  duration: import_joi.default.number().min(3).required(),
  interestRate: import_joi.default.number().min(1).required(),
  installments: import_joi.default.number().min(1).required(),
  attachments: import_joi.default.array().items(attachmentItemsSchema).min(1).required()
});
const createBankSchema = import_joi.default.object({
  name: import_joi.default.string().min(1).required()
});
const updateLoanStatusSchema = import_joi.default.object({
  status: import_joi.default.string().valid("pending", "approved", "rejected").required(),
  loanId: import_joi.default.number().min(1).required()
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  attachmentItemsSchema,
  createBankSchema,
  createLoanSchema,
  updateLoanStatusSchema
});
