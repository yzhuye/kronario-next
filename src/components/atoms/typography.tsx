"use client";

import React from 'react';

type TypographyProps = {
  children: React.ReactNode;
  color: 'blue' | 'gray';
  type: 'h1' | 'h2' | 'p' | 'subtext' | 'text';
};

const Typography = ({ children, color, type }: TypographyProps) => {
  const getColorClass = () => {
    if (color === 'blue') {
      return 'text-blue-950';
    }
    if (color === 'gray') {
      return 'text-gray-500';
    }
    return '';
  };
  const getTypeComponent = () => {
    switch (type) {
      case 'h1':
        return (
          <h1 className={`text-2xl font-medium text-center mb-2 ${getColorClass()}`}>
            {children}
          </h1>
        );
      case 'h2':
        return (
          <h2 className={`text-2xl font-thin ${getColorClass()}`}>{children}</h2>
        );
      case 'p':
        return (
          <p className={`text-lg font-light text-center ${getColorClass()}`}>
            {children}
          </p>
        );
      case 'text':
        return (
          <p className={`text-md font-semibold ${getColorClass()}`}>{children}</p>
        );
      case 'subtext':
        return (
          <p className={`text-sm ${getColorClass()}`}>{children}</p>
        );
      default:
        return null;
    }
  };

  return getTypeComponent();
};

export default Typography;
