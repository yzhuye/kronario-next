"use client";

import Menu from "@/components/molecules/menu";
import ColoredProgressBar from "@/components/atoms/progress_bar";
import { useEffect, useState } from "react";
import SplashScreen from "@/components/molecules/splash_screen";


import ArrowNav from "@/components/molecules/arrow_nav";

const Home = () => {
  const [splashState, setSplashState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashState(false);
    }, 3000);
  }, []);

  return (

    <>{splashState ? <SplashScreen /> : <>
    <Menu type="search"  text="Busca tu/s carrera/s..."  /><ColoredProgressBar progress={1} />
    <ArrowNav direction="left" rightUrl="/subjects" centerText="Selecciona tu/s carrera/s" /></> }
    </>
  );
};

export default Home;
