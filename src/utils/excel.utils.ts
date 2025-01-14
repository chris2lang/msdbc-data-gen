import { utils, writeFile } from 'xlsx';
import * as path from 'path';
import * as fs from 'fs';
import type { WorksheetPrivate, WorkbookPrivate } from '../types/xlsx.types';
import { addXMLMapping } from './xml.utils';

export function generateExcelFile<T>(
    data: T[],
    entityName: string,
    fileName: string,
    columnWidths: Record<string, number>
): void {
    // Create workbook and worksheet with proper typing
    const wb = utils.book_new() as WorkbookPrivate;
    const ws = utils.json_to_sheet(data) as WorksheetPrivate;

    // Add column widths
    ws['!cols'] = Object.values(columnWidths).map(width => ({ width }));
    
    // Add XML mapping
    addXMLMapping(ws, entityName);

    // Add worksheet to workbook
    utils.book_append_sheet(wb, ws, entityName);

    // Initialize Workbook structure if needed
    if (!wb.Workbook) {
        wb.Workbook = {
            WBProps: {},
            Sheets: [],
            XMLMaps: []
        };
    }

      // Path to the sibling directory
      const genDataDir = path.resolve(__dirname, '..', '..', 'excel_files');

      // Create the sibling directory if it doesn't exist
      if (!fs.existsSync(genDataDir)) {
          fs.mkdirSync(genDataDir);
      }
  
      // Full path for the Excel file
      const filePath = path.join(genDataDir, fileName);

    // Write the file
    writeFile(wb, filePath, {
        bookType: 'xlsx',
        bookSST: false,
        type: 'buffer'
    });
}