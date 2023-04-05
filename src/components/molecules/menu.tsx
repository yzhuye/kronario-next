"use client";

import React from 'react';
import Image from '@/components/atoms/image';

interface MenuProps {
  type?: 'search' | 'button' | 'none';
  buttonLink?: string;
  text?: string;
}

export default function Menu({ type = "none", buttonLink, text }: MenuProps) {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white border-b-10 border-blue-500 py-3 px-6">
      <div className="flex items-center flex-shrink-0 text-customGray mr-6">
        <Image src="/kronario.svg" alt="logo kronario" type="logo" />
      </div>
      <div className="relative">
        {type === 'search' ? (
          <div className="flex">
            <input
              className="block w-full max-w-xs px-4 py-2 text-gray-900 placeholder-gray-500 border border-none bg-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              type="search"
              name="search"
              placeholder={text || 'Buscar'}
            />
            <button type="submit" className="bg-gray-100 p-2">
              <Image
                src="/search.svg"
                alt="logo kronario"
                type="icono"
              />
            </button>
          </div>
        ) : type === 'button' ? (
          <button className="bg-gray-100 p-2">
            <a href={buttonLink || '#'}>{text || 'Botón'}</a>
          </button>
        ) : null}
      </div>
    </nav>
  );
}
