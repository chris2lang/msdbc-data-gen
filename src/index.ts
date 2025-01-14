import { AccountGenerator } from "./generators/account.generator";
import { ItemGenerator } from "./generators/item.generator";
import { generateExcelFile } from "./utils/excel.utils";
import { ACCOUNT_CONSTANTS } from "./constants/account.constants";
import { ITEM_CONSTANTS } from "./constants/item.constants";

const generateData = async () => {
  try {
      // Generate Items
      console.log('Generating Items...');
      const items = ItemGenerator.generate(1100);
      generateExcelFile(
          items,
          'Item',  // Changed from 'Items' to 'Item' to match BC entity name
          'BusinessCentral_Items.xlsx',
          ITEM_CONSTANTS.COLUMN_WIDTHS
      );
      console.log('Items generated successfully!');

      // Generate GL Accounts
      console.log('Generating GL Accounts...');
      const accounts = AccountGenerator.generate(1100);
      generateExcelFile(
          accounts,
          'GL Account',  // Changed to match BC entity name
          'BusinessCentral_GLAccounts.xlsx',
          ACCOUNT_CONSTANTS.COLUMN_WIDTHS
      );
      console.log('GL Accounts generated successfully!');

  } catch (error) {
      console.error('Error generating data:', error);
      process.exit(1);
  }
};

generateData();
