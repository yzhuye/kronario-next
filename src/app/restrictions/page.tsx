"use client";

import Menu from "@/components/molecules/menu";
import ColoredProgressBar from "@/components/atoms/progress_bar";
import ArrowNav from "@/components/molecules/arrow_nav";
import ItemList from "@/components/organisms/item_list";
import Typography from "@/components/atoms/typography";
import Question from "@/components/molecules/question";

const Page = () => {

  return (
    <>
      <Menu />
      <ColoredProgressBar progress={3} />
      <ArrowNav rightUrl="/schedules" leftUrl="/subjects" centerText="Ajusta tu horario" />
      <div className="px-4 py-2">
        <Typography type="p" color="blue">Bloquear Profesores</Typography>
      </div>
      <ItemList type={2} items={[{title: "Asignatura 1", subTitle: "Profesores"}, {title: "Asignatura 2", subTitle: "Profesores"},
        {title: "Asignatura 3", subTitle: "Profesores"}, {title: "Asignatura 4", subTitle: "Profesores"},
        {title: "Asignatura 5", subTitle: "Profesores"}
        ]} />

      <Question question="¿Quieres un horario mas distribuido?"  answers={["Si", "No"]} />
      
      <Question question="¿Que tipo de ciclo prefieres?"  answers={["Nocturno", "Diurno"]} />
    </>
  );
};

export default Page;
