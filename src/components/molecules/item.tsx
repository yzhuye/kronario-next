import React, { ReactNode } from "react";
import Typography from "@/components/atoms/typography";
import { type } from "os";

interface ItemProps {
    name: string;
    category: string;
}

const Item: React.FC<ItemProps> = ({ name, category }) => {

  return (
    <li className="bg-gray-100 rounded-lg p-4 flex flex-col cursor-pointer hover:bg-gray-200">
        
        <div className="truncate line-clamp-2">
        <Typography type="text" color="blue" >{name}</Typography>
        <Typography type="subtext" color="gray">{category}</Typography>
        </div>
    </li>
  );
};

export default Item;

