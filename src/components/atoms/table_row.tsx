import React from "react";

interface TableRowProps {
    children: React.ReactNode;
    isEven: boolean;
  }  
   
  const TableRow = ({ children, isEven }: TableRowProps) => (
    <tr className={`${isEven ? "bg-gray-100" : "bg-white"} text-center`}>{children}</tr>
  );

export default TableRow;