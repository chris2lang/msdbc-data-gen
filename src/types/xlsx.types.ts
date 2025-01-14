import type * as XLSX from "xlsx";
import { XMLMap } from "./xml.types";

export interface WorksheetPrivate extends XLSX.WorkSheet {
  "!xmlmaps"?: XMLMap[];
}

export interface WBProps extends XLSX.WorkbookProperties {
  XMLMaps?: unknown[];
}

export interface WorkbookPrivate extends XLSX.WorkBook {
  Workbook?: {
    WBProps?: WBProps;
    Sheets: XLSX.SheetProps[];
    XMLMaps?: unknown[];
  };
}
