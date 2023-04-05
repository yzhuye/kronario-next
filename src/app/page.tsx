"use client";

import Menu from "@/components/molecules/menu";
import ColoredProgressBar from "@/components/atoms/progress_bar";

import ArrowNav from "@/components/molecules/arrow_nav";

const Home = () => {

  return (
    <><Menu type="search"  text="Busca tu/s carrera/s..."  /><ColoredProgressBar progress={1} />
    <ArrowNav direction="left" rightUrl="/subjects" centerText="Selecciona tu/s carrera/s" /> 
    </>
  );
};

export default Home;
