import React from "react";
import TableHeader from "../atoms/table_head";

type TableHeaderRowProps = {
    headers: string[];
  };
  
  const TableHeaderRow = ({ headers }: TableHeaderRowProps) => (
    <tr className="bg-blue-500">
      {headers.map((header, index) => (
        <TableHeader key={index}>{header}</TableHeader>
      ))}
    </tr>
  );
  

export default TableHeaderRow;