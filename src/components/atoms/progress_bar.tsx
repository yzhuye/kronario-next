import React from "react";

interface ColoredProgressBarProps {
  progress: number;
}

const ColoredProgressBar: React.FC<ColoredProgressBarProps> = ({ progress }) => {
  return (
    <div className="flex">
      <div
        className={`flex w-1/3 h-[5px] ${
          progress >= 1 ? "bg-blue-500" : "bg-gray-500"
        } h-5`}
      ></div>
      <div
        className={`flex w-1/3 h-[5px] ${
          progress >= 2 ? "bg-green-500" : "bg-gray-500"
        } h-5`}
      ></div>
      <div
        className={`flex h-[5px] w-1/3 ${
          progress >= 3 ? "bg-yellow-500" : "bg-gray-500"
        } h-5`}
      ></div>
    </div>
  );
};

export default ColoredProgressBar;
