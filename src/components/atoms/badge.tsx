import React, { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  color: string; // Prop for setting the background color
}

const Badge: React.FC<BadgeProps> = ({ children, color }) => {

    let colorClass = "";
    if (color === "blue") {
        colorClass = "hover:bg-blue-500";
    } else if (color === "green") {
        colorClass = "hover:bg-green-500";
    } else if (color === "yellow") {
        colorClass = "hover:bg-yellow-500";
    }

  return (
    <a
      className={`inline-flex bg-gray-100 items-center mx-2 text-sm font-medium text-gray-600 hover:text-white badge rounded-2xl py-2 px-5 ${colorClass} hover:text-white focus:outline-none hover:cursor-pointer`}
    >
      {children}
    </a>
  );
};

export default Badge;

