"use client";
import Menu from "@/components/molecules/menu";
import ProgressBar from "@/components/atoms/progress_bar";
import ArrowNav from "@/components/molecules/arrow_nav";
import ItemList from "@/components/organisms/item_list";
import Typography from "@/components/atoms/typography";
import QuestionList from "@/components/organisms/question_list";
import BadgeList from "@/components/molecules/badge_list";

import { pagina_restricciones as data} from '@/assets/data.json';

import { useTeacherContext } from "@/context/teacherContext";

const Page = () => {
  let { menu, arrow_nav, progress_bar, primera_seccion} = data;
  let { teachers, filteredTeachers, categories, selectedTeachers, toggleTeacherSelection } = useTeacherContext();

  const selectedTeacher = (teacher: any) => {
    return selectedTeachers.includes(teacher);
  }

  return (
    <>
      <Menu type={menu.type} text={menu.text} /> 
      <ProgressBar progress={progress_bar.progress} />
      <ArrowNav block={arrow_nav.block} leftUrl={arrow_nav.leftUrl} rightUrl={arrow_nav.rightUrl} text={arrow_nav.text} />
      <div className="px-4 py-2 text-center">
        <Typography type="text" color="blue">{primera_seccion.title}</Typography>
      </div>
      <BadgeList color={primera_seccion.subjects_badge.color} badges={categories} />
      <ItemList type={2} items={filteredTeachers} selectedItems={selectedTeacher} onClick={toggleTeacherSelection} />
      <div className="px-4 py-2 text-center">
        <Typography type="text" color="blue">Preguntas de filtracion:</Typography>
      </div>
      <QuestionList questions={[{question: "¿Quieres un horario mas distribuido?", answers: ["Si", "No"]}, {question: "¿Que tipo de ciclo prefieres?", answers: ["Nocturno", "Diurno"]}]} />
      <div className="px-4 py-2 text-center">
        <Typography type="text" color="blue">Bloquea tus Horas</Typography>
      </div>
      <div className="h-[500px] mt-2 mb-4 mx-2 md:mx-auto lg:w-[900px] md:w-[700px]  bg-yellow-500 rounded  flex justify-center items-center">
        <p className="transform rotate-2 animate-spin infinite text-lg md:text-2xl  lg:text-4xl font-bold">Ponte las pilas</p>
      </div>

    </>
  );
};

export default Page;
