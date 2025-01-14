import { Item } from "../types";
import { ITEM_CONSTANTS } from "../constants/item.constants";
import {
  getRandomElement,
  padNumber,
  generateRandomPrice,
  generateRandomInteger,
} from "../utils/common.utils";

export class ItemGenerator {
  static generate(count: number): Item[] {
    const items: Item[] = [];

    for (let i = 1; i <= count; i++) {
      const baseDescription = getRandomElement(ITEM_CONSTANTS.DESCRIPTIONS);
      const unitPrice = generateRandomPrice(10, 1000);

      const item: Item = {
        No: `ITEM${padNumber(i, 5)}`,
        Description: `${baseDescription} ${padNumber(i, 3)}`,
        SearchDescription: `${baseDescription} ${padNumber(
          i,
          3
        )}`.toUpperCase(),
        BaseUnitOfMeasure: getRandomElement(ITEM_CONSTANTS.UNITS_OF_MEASURE),
        UnitPrice: unitPrice,
        UnitCost: Number((unitPrice * 0.7).toFixed(2)),
        StandardCost: Number((unitPrice * 0.65).toFixed(2)),
        QuantityOnHand: generateRandomInteger(0, 1000),
        MaximumInventory: generateRandomInteger(1000, 2000),
        PresentNegativeInventory: Math.random() < 0.1 ? "Yes" : "No",
        ReorderPoint: generateRandomInteger(50, 200),
        ReorderQuantity: generateRandomInteger(100, 500),
        UnitListPrice: Number((unitPrice * 1.2).toFixed(2)),
        GrossWeight: Number((Math.random() * 100).toFixed(2)),
        NetWeight: Number((Math.random() * 90).toFixed(2)),
        MinimumOrderQuantity: generateRandomInteger(1, 10) * 5,
        MaximumOrderQuantity: generateRandomInteger(20, 100) * 5,
        SafetyStockQuantity: generateRandomInteger(20, 100),
      };
      items.push(item);
    }

    return items;
  }
}
