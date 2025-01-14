export interface Item {
  No: string;
  Description: string;
  SearchDescription: string;
  BaseUnitOfMeasure: string;
  UnitPrice: number;
  UnitCost: number;
  StandardCost: number;
  QuantityOnHand: number;
  MaximumInventory: number;
  PresentNegativeInventory: string;
  ReorderPoint: number;
  ReorderQuantity: number;
  UnitListPrice: number;
  GrossWeight: number;
  NetWeight: number;
  MinimumOrderQuantity: number;
  MaximumOrderQuantity: number;
  SafetyStockQuantity: number;
}
