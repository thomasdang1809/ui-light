// components/DataTable.tsx
import React from 'react'

interface IColumn<T> {
  key: keyof T
  label: string
  render?: (item: T) => React.ReactNode
}

interface IDataTable<T> {
  data: T[]
  columns: IColumn<T>[]
  onEdit?: (item: T) => void
  onDelete?: (item: T) => void
  onView?: (item: T) => void
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  onSort: (key: keyof T, direction: 'asc' | 'desc') => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

const DataTable: React.FC<IDataTable<any>> = ({
  data,
  columns,
  onEdit,
  onDelete,
  onView,
  currentPage,
  totalPages,
  onPageChange,
  onSort,
  searchQuery,
  onSearchChange,
}) => {
  const handleSort = (key: keyof any) => {
    onSort(key, 'asc') // Mặc định là 'asc', có thể thay đổi
  }

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Tìm kiếm..."
      />
      <table border={1} cellPadding={8} cellSpacing={0}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key.toString()} onClick={() => handleSort(col.key)}>
                {col.label}
              </th>
            ))}
            {(onEdit || onDelete || onView) && <th>Hành động</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx}>
              {columns.map((col) => (
                <td key={col.key.toString()}>
                  {col.render ? col.render(item) : (item[col.key] as any)}
                </td>
              ))}
              {(onEdit || onDelete || onView) && (
                <td>
                  {onView && <button onClick={() => onView(item)}>Xem</button>}
                  {onEdit && <button onClick={() => onEdit(item)}>Sửa</button>}
                  {onDelete && (
                    <button onClick={() => onDelete(item)}>Xoá</button>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  )
}

export default DataTable
