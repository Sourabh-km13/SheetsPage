import React, { useMemo, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import EditableCell from './Cell';
import type {ColumnDef,
  ColumnResizeMode,} from "@tanstack/react-table"


const defaultColumns = [
  'Job Request',
  'Submitted',
  'Status',
  'Submitter',
  'URL',
  'Assigned',
  'Priority',
  'Due Date',
  'Est. Value',
];

const defaultData = [
  ['Launch social media campaign for product A', '15-11-2024', 'In-process', 'Aisha Patel', 'www.aishapatel.com', 'Sophie Choudhury', 'Medium', '20-11-2024', '6,200,000 ₹'],
  ['Update press kit for company redesign', '28-10-2024', 'Need to start', 'Irfan Khan', 'www.irfankhan.dev', 'Tejas Pandey', 'High', '30-10-2024', '3,500,000 ₹'],
  ['Finalize user testing feedback for app V2', '05-12-2024', 'In-process', 'Mark Johnson', 'www.markjohnson.com', 'Rachel Lee', 'Medium', '10-12-2024', '4,750,000 ₹'],
  ['Design new features for the website', '10-01-2025', 'Complete', 'Emily Green', 'www.emilygreen.com', 'Tom Wright', 'Low', '15-01-2025', '5,900,000 ₹'],
  ['Prepare financial report for Q4', '25-01-2025', 'Blocked', 'Jessica Brown', 'www.jessicabrown.com', 'Kevin Smith', 'Low', '30-01-2025', '2,800,000 ₹'],
];

const generateEmptyRows = (count: number, cols: number) =>
  Array.from({ length: count }, () => Array(cols).fill(''));

const SpreadsheetTable: React.FC = () => {
  const [columns, setColumns] = useState<string[]>(defaultColumns);
  const [data, setData] = useState<string[][]>([
    ...defaultData,
    ...generateEmptyRows(50 - defaultData.length, defaultColumns.length),
  ]);
  const [columnResizeMode] = useState<ColumnResizeMode>('onChange');

  const updateData = (rowIndex: number, columnId: string, value: string) => {
    const colIndex = parseInt(columnId);
    setData((prev) =>
      prev.map((row, i) => {
        if (i === rowIndex) {
          const updated = [...row];
          updated[colIndex] = value;
          return updated;
        }
        return row;
      })
    );
  };

  const addColumn = () => {
    const newLabel = `Column ${columns.length + 1}`;
    setColumns((prev) => [...prev, newLabel]);
    setData((prev) => prev.map((row) => [...row, '']));
  };
  type tagType = 'Status' | 'Priority'
  const getTagStyle = (type: tagType, value: string):string=> {
    const map:Record<tagType,Record<string,string>> = {
      Status: {
        Complete: 'bg-green-200 text-green-800',
        'In-process': 'bg-yellow-200 text-yellow-800',
        'Need to start': 'bg-blue-200 text-blue-800',
        Blocked: 'bg-red-200 text-red-800',
      },
      Priority: {
        High: 'bg-red-200 text-red-800',
        Medium: 'bg-orange-200 text-orange-800',
        Low: 'bg-blue-200 text-blue-800',
      },
    };
    return map[type]?.[value] || '';
  };

  const tableColumns = useMemo<ColumnDef<string[]>[]>(() => {
    const baseCols: ColumnDef<string[]>[] = [
      {
        id: '#',
        header: '#',
        size: 50,
        cell: ({ row }) => row.index + 1,
      },
    ];

    const dynamicCols = columns.map((col, index): ColumnDef<string[]> => ({
      id: index.toString(),
      header: col,
      size: 180,
      enableResizing: true,
      cell: ({ row }) => {
        const val = row.original[index];
        if (col === 'URL') {
          return (
            <a
              href={`https://${val}`}
              className="text-blue-600 underline truncate block"
              target="_blank"
              rel="noreferrer"
            >
              {val}
            </a>
          );
        }
        if (col === 'Status' || col === 'Priority') {
          return (
            <span className={`px-2 py-1 rounded-full text-sm ${getTagStyle(col, val)}`}>
              {val}
            </span>
          );
        }
        return (
          <EditableCell
            value={val}
            rowIndex={row.index}
            columnId={index.toString()}
            updateData={updateData}
          />
        );
      },
    }));

    return [...baseCols, ...dynamicCols];
  }, [columns]);

  const table = useReactTable({
    data,
    columns: tableColumns,
    columnResizeMode,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Q3 Financial Overview</h2>
        <button
          onClick={addColumn}
          className="px-3 py-1 text-sm bg-gray-100 border rounded hover:bg-gray-200"
        >
          ➕ Add Column
        </button>
      </div>

      <div className="border rounded overflow-x-auto">
        <div className="min-w-full">
          {/* Header */}
          <div className="flex bg-gray-100 text-sm font-medium select-none">
            {table.getHeaderGroups().map((headerGroup) =>
              headerGroup.headers.map((header) => (
                <div
                  key={header.id}
                  className="relative border-r border-gray-200 px-2 py-2"
                  style={{ width: header.getSize() }}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {header.column.getCanResize() && (
                    <div
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className="absolute right-0 top-0 h-full w-1 cursor-col-resize bg-blue-400 opacity-0 hover:opacity-100"
                    />
                  )}
                </div>
              ))
            )}
          </div>

          {/* Rows */}
          {table.getRowModel().rows.map((row) => (
            <div key={row.id} className="flex border-t hover:bg-gray-50 text-sm">
              {row.getVisibleCells().map((cell) => (
                <div
                  key={cell.id}
                  className="border-r border-gray-200 px-2 py-2 truncate"
                  style={{ width: cell.column.getSize() }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpreadsheetTable;
