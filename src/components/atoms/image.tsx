"use client";

import React from 'react';
import ImageNext from 'next/image';

type ImageProps = {
  src: string;
  alt: string;
  type: 'logo' | 'avatar' | 'logo_full' | 'icono';
};

const Image = ({ src, alt, type }: ImageProps) => {
    let width = 0;
    let height = 0;
    let className = '';
    switch (type) {
      case 'logo':
        width = 40;
        height = 40;
        break;
      case 'avatar':
        width = 400;
        height = 400;
        className = 'relative top-[-35px] ';
        break;
      case 'logo_full':
        width = 170;
        height = 100;
        className = 'mx-auto';
        break;

        case 'icono':
            width = 20;
            height = 20;
            className = 'text-gray-500';
            break;
    }
    return (
      <ImageNext
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
};

  

export default Image;
