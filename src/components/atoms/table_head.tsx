import React from "react";

type TableHeaderProps = {
    children: React.ReactNode;
  };
  
  const TableHeader = ({ children }: TableHeaderProps) => (
    <th className="py-2 text-center">{children}</th>
  );

export default TableHeader;