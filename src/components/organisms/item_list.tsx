import React from "react";
import Item from "@/components/molecules/item";

interface ItemProps {
    name: string;
    category: string;
}

interface ItemListProps {
    items: ItemProps[];
    type?: 1 | 2 ;
}

const ItemList: React.FC<ItemListProps> = ({ items, type }) => {
    let className = " grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    if (type == 2) {
        className = "grid-cols-2 md:grid-cols-3  lg:grid-cols-5";
    }
  return (
    <ul className={`grid ${className} gap-4 p-2 bg-white`}>
        {items.map((item, index) => (
            <Item key={index} name={item.name} category={item.category} />
        ))}
    </ul>
  );
};

export default ItemList;
