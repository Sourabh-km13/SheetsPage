import React, { useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from '@tanstack/react-table';
import type { ColumnDef,ColumnResizeMode } from '@tanstack/react-table';
import EditableCell from './Cell';
import type { Job } from '../../types/type';

const initialData: Job[] = [
  {
    jobRequest: 'Launch social media campaign for product A',
    submitted: '15-11-2024',
    status: 'In-process',
    submitter: 'Aisha Patel',
    url: 'www.aishapatel.com',
    assigned: 'Sophie Choudhury',
    priority: 'Medium',
    dueDate: '20-11-2024',
    estValue: '6,200,000 ₹',
  },
  {
    jobRequest: 'Update press kit for company redesign',
    submitted: '28-10-2024',
    status: 'Need to start',
    submitter: 'Irfan Khan',
    url: 'www.irfankhan.dev',
    assigned: 'Tejas Pandey',
    priority: 'High',
    dueDate: '30-10-2024',
    estValue: '3,500,000 ₹',
  },
  {
    jobRequest: 'Finalize user testing feedback for app V2',
    submitted: '05-12-2024',
    status: 'In-process',
    submitter: 'Mark Johnson',
    url: 'www.markjohnson.com',
    assigned: 'Rachel Lee',
    priority: 'Medium',
    dueDate: '10-12-2024',
    estValue: '4,750,000 ₹',
  },
  {
    jobRequest: 'Design new features for the website',
    submitted: '10-01-2025',
    status: 'Complete',
    submitter: 'Emily Green',
    url: 'www.emilygreen.com',
    assigned: 'Tom Wright',
    priority: 'Low',
    dueDate: '15-01-2025',
    estValue: '5,900,000 ₹',
  },
  {
    jobRequest: 'Prepare financial report for Q4',
    submitted: '25-01-2025',
    status: 'Blocked',
    submitter: 'Jessica Brown',
    url: 'www.jessicabrown.com',
    assigned: 'Kevin Smith',
    priority: 'Low',
    dueDate: '30-01-2025',
    estValue: '2,800,000 ₹',
  },
];

const SpreadsheetTable: React.FC = () => {
  const [data, setData] = useState<Job[]>(initialData);

  const updateData = (rowIndex: number, columnId: string, value: string) => {
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...row,
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  const columns: ColumnDef<Job>[] = [
    {
      accessorKey: 'jobRequest',
      header: 'Job Request',
      enableResizing: true,
      cell: ({ row, column, getValue }) => (
        <EditableCell
          value={getValue() as string}
          rowIndex={row.index}
          columnId={column.id}
          updateData={updateData}
        />
      ),
    },
    {
      accessorKey: 'submitted',
      header: 'Submitted',
      enableResizing: true,
      cell: ({ row, column, getValue }) => (
        <EditableCell
          value={getValue() as string}
          rowIndex={row.index}
          columnId={column.id}
          updateData={updateData}
        />
      ),
    },
    {
      accessorKey: 'status',
      header: 'Status',
      enableResizing: true,
      cell: ({ getValue }) => {
        const value = getValue() as string;
        const map: Record<string, string> = {
          Complete: 'bg-green-200 text-green-800',
          Blocked: 'bg-red-200 text-red-800',
          'In-process': 'bg-yellow-200 text-yellow-800',
          'Need to start': 'bg-blue-200 text-blue-800',
        };
        return (
          <span className={`px-2 py-1 rounded-full text-sm ${map[value] || ''}`}>{value}</span>
        );
      },
    },
    {
      accessorKey: 'submitter',
      header: 'Submitter',
      enableResizing: true,
      cell: ({ row, column, getValue }) => (
        <EditableCell
          value={getValue() as string}
          rowIndex={row.index}
          columnId={column.id}
          updateData={updateData}
        />
      ),
    },
    {
      accessorKey: 'url',
      header: 'URL',
      enableResizing: true,
      cell: ({ getValue }) => {
        const value = getValue() as string;
        return (
          <a
            href={`https://${value}`}
            className="text-blue-600 underline truncate block"
            target="_blank"
            rel="noreferrer"
          >
            {value}
          </a>
        );
      },
    },
    {
      accessorKey: 'assigned',
      header: 'Assigned',
      enableResizing: true,
      cell: ({ row, column, getValue }) => (
        <EditableCell
          value={getValue() as string}
          rowIndex={row.index}
          columnId={column.id}
          updateData={updateData}
        />
      ),
    },
    {
      accessorKey: 'priority',
      header: 'Priority',
      enableResizing: true,
      cell: ({ getValue }) => {
        const value = getValue() as string;
        const map: Record<string, string> = {
          High: 'bg-red-200 text-red-800',
          Medium: 'bg-orange-200 text-orange-800',
          Low: 'bg-blue-200 text-blue-800',
        };
        return (
          <span className={`px-2 py-1 rounded-full text-sm ${map[value]}`}>{value}</span>
        );
      },
    },
    {
      accessorKey: 'dueDate',
      header: 'Due Date',
      enableResizing: true,
      cell: ({ row, column, getValue }) => (
        <EditableCell
          value={getValue() as string}
          rowIndex={row.index}
          columnId={column.id}
          updateData={updateData}
        />
      ),
    },
    {
      accessorKey: 'estValue',
      header: 'Est. Value',
      enableResizing: true,
      cell: ({ row, column, getValue }) => (
        <EditableCell
          value={getValue() as string}
          rowIndex={row.index}
          columnId={column.id}
          updateData={updateData}
        />
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    columnResizeMode: 'onChange',
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="p-6 bg-white">
      <h2 className="text-xl font-semibold mb-4">Q3 Financial Overview</h2>
      <div className="border rounded overflow-x-auto">
        <div className="min-w-full">
          <div className="bg-gray-100 text-sm font-medium flex">
            {table.getHeaderGroups().map((headerGroup) => (
              <React.Fragment key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <div
                    key={header.id}
                    className="px-2 py-3 border-r border-gray-200 relative group"
                    style={{ width: header.getSize() }}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {header.column.getCanResize() && (
                      <div
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                        className="absolute right-0 top-0 h-full w-1 bg-blue-300 opacity-0 group-hover:opacity-100 cursor-col-resize"
                      />
                    )}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>

          {table.getRowModel().rows.map((row) => (
            <div
              key={row.id}
              className="flex border-t border-gray-200 hover:bg-gray-50"
            >
              {row.getVisibleCells().map((cell) => (
                <div
                  key={cell.id}
                  className="px-2 py-2 border-r border-gray-200"
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
