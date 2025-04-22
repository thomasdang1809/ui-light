// components/DataTable.tsx
import React from "react";

type Column<T> = {
  header: string;
  accessor: keyof T;
  renderHeader?: () => React.ReactNode;
  renderCell?: (value: T[keyof T], row: T) => React.ReactNode;
};

type DataTableProps<T> = {
  data: T[];
  columns: Column<T>[];
};

export function DataTable<T>({ data, columns }: DataTableProps<T>) {
  return (
    <div className="overflow-x-auto">
      <table className="table border border-gray-300 rounded">
        <thead className="bg-gray-100 text-left">
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="p-2 border-b font-semibold">
                {col.renderHeader ? col.renderHeader() : col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50">
              {columns.map((col, j) => (
                <td key={j} className="p-2 border-b">
                  {col.renderCell
                    ? col.renderCell(row[col.accessor], row)
                    : String(row[col.accessor])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
