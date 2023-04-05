"use client";

import React from 'react';
import Typography from '@/components/atoms/typography';
import Image from '@/components/atoms/image';
import { splash_screen as data} from '@/assets/data.json';

export default function SplashScreen() {
  return (
    <section className={`flex flex-col justify-center items-center w-screen h-screen p-3 overflow-hidden`}>
      <article className="py-3 text-center">
        <Image src={data.logoSrc} alt={data.logoAlt} type="logo_full" />
      </article>
      <article className="text-center mx-auto h-96">
        <Image src={data.avatarSrc} alt={data.avatarAlt} type="avatar" />
      </article>
      <article className="mx-auto py-3 text-center">
        <Typography type="h1" color="blue">{data.title}</Typography>
        <Typography type="p" color="gray">{data.subtitle}</Typography>
      </article>
    </section>
  );
}

