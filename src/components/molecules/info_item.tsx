import React, { ReactNode } from "react";
import Typography from "@/components/atoms/typography";
import { type } from "os";

interface InfoItemProps {
    colorClass: string;
    name: string;
    nrc: string;
    teacher: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ name, nrc, teacher, colorClass}) => {
  return (
    <li className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200">
        <div className={`h-4 w-4 rounded-full float-left mr-2 ${colorClass}`}></div>
        <p className="font-medium text-sm">{name}</p>
        <p className="text-xs text-gray-500">NRC: {nrc}</p>
        <p className="text-xs text-gray-500">Profesor: {teacher}</p>
    </li>
  );
};

export default InfoItem;
