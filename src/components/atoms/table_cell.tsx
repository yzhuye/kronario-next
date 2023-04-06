import React from "react";

type TableCellProps = {
    children: React.ReactNode;
  };
  
  const TableCell = ({ children }: TableCellProps) => (
    <td className="py-2">{children}</td>
  );

export default TableCell;