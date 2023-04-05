import React, { ReactNode } from "react";
import Typography from "@/components/atoms/typography";
import { type } from "os";

interface ItemProps {
    title: string;
    subTitle: string;
}

const Item: React.FC<ItemProps> = ({ title, subTitle }) => {

  return (
    <li className="bg-gray-100 rounded-lg p-4 flex flex-col cursor-pointer hover:bg-gray-200">
        <Typography type="text" color="blue" >{title}</Typography>
        <Typography type="subtext" color="gray">{subTitle}</Typography>
    </li>
  );
};

export default Item;

