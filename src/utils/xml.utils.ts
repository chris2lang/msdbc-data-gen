import * as XLSX from "xlsx";
import { utils } from "xlsx";
import { XMLMap, XMLColumnMap } from "../types/xml.types";

export const addXMLMapping = (
  worksheet: XLSX.WorkSheet,
  entityName: string
): void => {
  // Create the XML schema map that Business Central expects
  const xmlMap: XMLMap = {
    SchemaRef: {
      Namespace: `urn:microsoft-dynamics-nav/${entityName.toLowerCase()}`,
      ElementName: entityName,
    },
    Map: {},
  };

  // Get all columns from the worksheet
  const range = XLSX.utils.decode_range(worksheet["!ref"] || "A1");
  const columns: string[] = [];

  // Get header row
  for (let C = range.s.c; C <= range.e.c; ++C) {
    const cell = worksheet[utils.encode_cell({ r: 0, c: C })];
    if (cell && cell.v) columns.push(cell.v.toString());
  }

  // Create mapping for each column
  columns.forEach((col) => {
    const columnMap: XMLColumnMap = {
      DataBinding: {
        ElementPath: `//${entityName}/${col}`,
      },
    };
    xmlMap.Map[col] = columnMap;
  });

  // Add the XML mapping to the worksheet
  if (!worksheet["!xmlmaps"]) worksheet["!xmlmaps"] = [];
  worksheet["!xmlmaps"].push(xmlMap);
};
