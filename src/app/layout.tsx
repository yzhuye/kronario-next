"use client";

import './globals.css'
import SplashScreen from "@/components/molecules/splash_screen";
import { useState, useEffect } from "react";

export const metadata = {
  title: 'Kronario',
  description: 'Kronario es una aplicación para seleccionar tu horario universitario en la universidad del norte.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mostrarSplash, setMostrarSplash] = useState(true);

  useEffect(() => {
    // Lógica para mostrar u ocultar el splash
    setTimeout(() => {
      setMostrarSplash(false);
    }, 2000);
  }, []);

  return (
    <html lang="en">
      <body className='font-roboto'>
        {mostrarSplash && <SplashScreen /> }
        {!mostrarSplash && children }
      </body>
    </html>
  )
}
