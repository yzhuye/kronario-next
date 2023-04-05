import React from "react";
import Item from "@/components/molecules/item";

interface ItemProps {
    title: string;
    subTitle: string;
}

interface ItemListProps {
    items: ItemProps[];
}

const BadgeList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 p-2">
        {items.map((item, index) => (
            <Item key={index} title={item.title} subTitle={item.subTitle} />
        ))}
    </ul>
  );
};

export default BadgeList;
