import { GLAccount } from "../types";
import { ACCOUNT_CONSTANTS } from "../constants/account.constants";
import { getRandomElement, padNumber } from "../utils/common.utils";

export class AccountGenerator {
  static generate(count: number): GLAccount[] {
    const accounts: GLAccount[] = [];

    for (let i = 1; i <= count; i++) {
      const account: GLAccount = {
        No: i,
        Name: `Account-${padNumber(i, 4)}`,
        SearchName: `ACCT-${padNumber(i, 4)}`,
        AccountType: getRandomElement(ACCOUNT_CONSTANTS.TYPES),
        AccountCategory: getRandomElement(ACCOUNT_CONSTANTS.CATEGORIES),
        IncomeBalance:
          Math.random() < 0.7
            ? Number((Math.random() * 1000000).toFixed(2))
            : 0,
        DebitCredit: Math.random() < 0.5 ? "Debit" : "Credit",
        Blocked: Math.random() < 0.1 ? "Yes" : "No",
        GenPostingType: getRandomElement(ACCOUNT_CONSTANTS.POSTING_TYPES),
        GenBusPostingGroup: getRandomElement(ACCOUNT_CONSTANTS.BUSINESS_GROUPS),
        GenProdPostingGroup: getRandomElement(ACCOUNT_CONSTANTS.PRODUCT_GROUPS),
        AccountSubcategoryEntryNo: Math.floor(Math.random() * 100),
      };
      accounts.push(account);
    }

    return accounts;
  }
}
