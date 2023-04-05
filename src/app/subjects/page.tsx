"use client";

import Menu from "@/components/molecules/menu";
import ColoredProgressBar from "@/components/atoms/progress_bar";
import ArrowNav from "@/components/molecules/arrow_nav";
import BadgeList from "@/components/molecules/badge_list";
import ItemList from "@/components/organisms/item_list";

const Page = () => {

  return (
    <div className="flex flex-col h-screen ">
      <div>
        <Menu type="search" text="Busca tus asignaturas..." />
        <ColoredProgressBar progress={2} />
        <ArrowNav leftUrl="/" rightUrl="/restrictions" centerText="Selecciona tus asignaturas" /> 
        <BadgeList color="green" badges={["Carrera 1","Carrera 2"]} />
      </div>
      
      <div className="flex-1 overflow-y-auto">
      <ItemList items={[{title: "Asignatura 1", subTitle: "Carrera 1"}, {title: "Asignatura 2", subTitle: "Carrera 1"},
      {title: "Asignatura 3", subTitle: "Carrera 1"}, {title: "Asignatura 4", subTitle: "Carrera 1"},
      {title: "Asignatura 5", subTitle: "Carrera 1"}, {title: "Asignatura 6", subTitle: "Carrera 2"},
      {title: "Asignatura 7", subTitle: "Carrera 2"}, {title: "Asignatura 8", subTitle: "Carrera 2"},
      {title: "Asignatura 9", subTitle: "Carrera 2"}, {title: "Asignatura 10", subTitle: "Carrera 2"},
      {title: "Asignatura 7", subTitle: "Carrera 2"}, {title: "Asignatura 8", subTitle: "Carrera 2"},
      {title: "Asignatura 9", subTitle: "Carrera 2"}, {title: "Asignatura 10", subTitle: "Carrera 2"},
    ]} />
      </div>
    </div>
  );
};

export default Page;

