"use client";

import Menu from "@/components/molecules/menu";
import ProgressBar from "@/components/atoms/progress_bar";
import BadgeList from "@/components/molecules/badge_list";
import ItemList from "@/components/organisms/item_list";
import ArrowNav from "@/components/molecules/arrow_nav";
import { useMajorContext } from "@/context/majorContext";
import { pagina_carreras as data} from '@/assets/data.json';
import { useEffect, useState } from "react";

import SplashScreen from "@/components/molecules/splash_screen";

const Page = () => {
  let { menu, arrow_nav, progress_bar, badge_list } = data;
  const { selectedMajors, toggleMajorSelection, categories, filterMajors, filteredMajors } = useMajorContext();
  const selectedMajor = (major: any) => {
    return selectedMajors.includes(major);
  }

  const [ splash_screen, setSplashScreen ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 3000);
  }, []);

  if (splash_screen) {
    return <SplashScreen />;
  }
  
  return (
    <div className="flex flex-col h-screen ">
      <Menu type={menu.type} text={menu.text} inputChange={filterMajors} />
      <ProgressBar progress={progress_bar.progress} />
      <ArrowNav block={arrow_nav.block} rightUrl={arrow_nav.rightUrl} text={arrow_nav.text} />
      <BadgeList color={badge_list.color} badges={categories} />
      <div className="flex-1 overflow-y-auto">
        <ItemList items={filteredMajors} selectedItems={selectedMajor} onClick={toggleMajorSelection} />
      </div>
    </div>
  );
}

export default Page;

