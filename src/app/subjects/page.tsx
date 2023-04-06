"use client";

import Menu from "@/components/molecules/menu";
import ProgressBar from "@/components/atoms/progress_bar";
import BadgeList from "@/components/molecules/badge_list";
import ItemList from "@/components/organisms/item_list";
import ArrowNav from "@/components/molecules/arrow_nav";

import { useSubjectContext } from "@/context/subjectContext";
import { useMajorContext } from "@/context/majorContext";

import { pagina_asignaturas as data} from '@/assets/data.json';

const Page = () => {
  let { menu, arrow_nav, progress_bar, badge_list } = data;

  const { selectedSubjects, toggleSubjectSelection, categories, filterSubjects, filteredSubjects } = useSubjectContext();

  const selectedSubject = (major: any) => {
    return selectedSubjects.includes(major);
  }

  return (
    <div className="flex flex-col h-screen ">
      <Menu type={menu.type} text={menu.text} inputChange={filterSubjects} />
      <ProgressBar progress={progress_bar.progress} />
      <ArrowNav block={arrow_nav.block} rightUrl={arrow_nav.rightUrl} text={arrow_nav.text} />
      <BadgeList color={badge_list.color} badges={categories} />
      <div className="flex-1 overflow-y-auto">
        <ItemList items={filteredSubjects} selectedItems={selectedSubject} onClick={toggleSubjectSelection} />
      </div>
    </div>
  );
};

export default Page;