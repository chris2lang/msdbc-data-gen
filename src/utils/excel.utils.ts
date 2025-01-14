import { utils, writeFile } from 'xlsx';
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

    // Write the file
    writeFile(wb, fileName, {
        bookType: 'xlsx',
        bookSST: false,
        type: 'buffer'
    });
}