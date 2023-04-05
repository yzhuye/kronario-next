"use client";

import Menu from "@/components/molecules/menu";
import ColoredProgressBar from "@/components/atoms/progress_bar";
import BadgeList from "@/components/molecules/badge_list";
import ItemList from "@/components/organisms/item_list";
import ArrowNav from "@/components/molecules/arrow_nav";
import SplashScreen from "@/components/molecules/splash_screen";
import { useEffect, useState } from "react";

const Page = () => {
  const [splashState, setSplashState] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplashState(false);
    }, 2000);
  }, []);

  if (splashState) {
    return <SplashScreen />;
  }

  if(!splashState){
  return (
    <div className="flex flex-col h-screen ">
      <div >
      <Menu type="search"  text="Busca tu/s carrera/s..." />
      <ColoredProgressBar progress={1} />
      <ArrowNav direction="left" rightUrl="/subjects" centerText="Selecciona tu/s carrera/s" />    
      <BadgeList color="blue" badges={["Pregrado", "Postgrado", "Cursos Extras"]} />
      </div>
      <div className="flex-1 overflow-y-auto">
      <ItemList items={[{title: "Carrera 1", subTitle: "Pregrado"}, {title: "Carrera 2", subTitle: "Pregrado"}, 
      {title: "Carrera 3", subTitle: "Postgrado"}, {title: "Carrera 4", subTitle: "Postgrado"},
      {title: "Carrera 5", subTitle: "Cursos Extras"}, {title: "Carrera 6", subTitle: "Cursos Extras"},
      {title: "Carrera 7", subTitle: "Cursos Extras"}, {title: "Carrera 8", subTitle: "Cursos Extras"},
      {title: "Carrera 9", subTitle: "Cursos Extras"}, {title: "Carrera 10", subTitle: "Cursos Extras"},
      {title: "Carrera 7", subTitle: "Cursos Extras"}, {title: "Carrera 8", subTitle: "Cursos Extras"},
      {title: "Carrera 9", subTitle: "Cursos Extras"}, {title: "Carrera 10", subTitle: "Cursos Extras"},
    ]} />
      </div>
    </div>
  );
  }
};

export default Page;
