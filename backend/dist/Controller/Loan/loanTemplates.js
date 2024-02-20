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
var loanTemplates_exports = {};
__export(loanTemplates_exports, {
  getLoanTemplates: () => getLoanTemplates
});
module.exports = __toCommonJS(loanTemplates_exports);
async function getLoanTemplates(request, response, next) {
  const loans = {
    "housingLoan": [
      {
        name: "Happy family",
        description: "",
        duration: [
          { duration: 100, interestRate: 14 },
          { duration: 150, interestRate: 15 },
          { duration: 200, interestRate: 16 },
          { duration: 250, interestRate: 18 }
        ],
        type: "housingLoan"
      },
      {
        name: "Retirement Home",
        description: "",
        duration: [
          { duration: 100, interestRate: 14 },
          { duration: 150, interestRate: 15 },
          { duration: 200, interestRate: 16 },
          { duration: 250, interestRate: 18 }
        ],
        type: "housingLoan"
      },
      {
        name: "Sweet home",
        description: "",
        duration: [
          { duration: 100, interestRate: 14 },
          { duration: 150, interestRate: 15 },
          { duration: 200, interestRate: 16 },
          { duration: 250, interestRate: 18 }
        ],
        type: "housingLoan"
      }
    ],
    "carLoan": [
      {
        name: "Happy family",
        description: "",
        duration: [
          { duration: 100, interestRate: 14 },
          { duration: 150, interestRate: 15 },
          { duration: 200, interestRate: 16 },
          { duration: 250, interestRate: 18 }
        ],
        type: "carLoan"
      },
      {
        name: "Dream Car",
        description: "",
        duration: [
          { duration: 100, interestRate: 14 },
          { duration: 150, interestRate: 15 },
          { duration: 200, interestRate: 16 },
          { duration: 250, interestRate: 18 }
        ],
        type: "carLoan"
      },
      {
        name: "Children's Pappa",
        description: "",
        duration: [
          { duration: 100, interestRate: 14 },
          { duration: 150, interestRate: 15 },
          { duration: 200, interestRate: 16 },
          { duration: 250, interestRate: 18 }
        ],
        type: "carLoan"
      }
    ]
  };
  response.json(loans);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getLoanTemplates
});
