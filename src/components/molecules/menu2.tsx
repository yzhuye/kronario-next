import React from 'react';
import Image from '@/components/atoms/image';

export default function Menu() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white border-b-10 border-blue-500 py-3 px-6">
    <div className="flex items-center flex-shrink-0 text-customGray mr-6">
      <Image src="/kronario.svg" alt="logo kronario" type="logo" />
    </div>
  </nav>
  
  );
}

