import React from "react";
import TableRow from "../atoms/table_row";
import TableCell from "../atoms/table_cell";
import TableHeaderRow from "../molecules/table_head_row";


type miHorario = {
    hora: string;
    lunes: string;
    martes: string;
    miercoles: string;
    jueves: string;
    viernes: string;
    sabado: string;
  };
  
  type TableProps = {
    headers: string[];
    rows: miHorario[];
  };
  
  const Table = ({ headers, rows }: TableProps) => (
    <div className="m-2">
      <table className="w-full border text-xs sm:text-sm md:text-base table-fixed">
        <thead>
          <TableHeaderRow headers={headers} />
        </thead>
        <tbody className="py-3">
          {rows.map((row, index) => (
            <TableRow key={index} isEven={index % 2 === 0} >
              <TableCell>{row.hora}</TableCell>
              <TableCell>{row.lunes}</TableCell>
              <TableCell>{row.martes}</TableCell>
              <TableCell>{row.miercoles}</TableCell>
              <TableCell>{row.jueves}</TableCell>
              <TableCell>{row.viernes}</TableCell>
              <TableCell>{row.sabado}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  export default Table;