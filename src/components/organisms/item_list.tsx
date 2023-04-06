import React from "react";
import Item from "@/components/molecules/item";

interface ItemProps {
    name: string;
    category: string[] | string;
    id: string;
}

interface ItemListProps {
  items: ItemProps[];
  type?: 1 | 2;
  selectedItems: (item: ItemProps) => boolean;
  onClick: any;
}

const ItemList: React.FC<ItemListProps> = ({ items, type, selectedItems, onClick }) => {

  let className = " grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  if (type == 2) {
    className = "grid-cols-2 md:grid-cols-3  lg:grid-cols-4";
  }

  const stringCategoryConverter = (category: string[] | string) => {
    if (typeof category === "string") {
      return category;
    }
    return category.join(" / ");
  };

  return (
    <ul className={`grid ${className} gap-4 p-2 bg-white`}>
      {items.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          category={stringCategoryConverter(item.category)}
          id={item.id}
          onClick={() => onClick(item)}
          selected={selectedItems(item)}
        />
      ))}
    </ul>
  );
};

export default ItemList;

