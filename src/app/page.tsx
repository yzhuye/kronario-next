"use client";

import Menu from "@/components/molecules/menu";
import ProgressBar from "@/components/atoms/progress_bar";
import BadgeList from "@/components/molecules/badge_list";
import ItemList from "@/components/organisms/item_list";
import ArrowNav from "@/components/molecules/arrow_nav";
import SplashScreen from "@/components/molecules/splash_screen";
import { useEffect, useState } from "react";

import { pagina_carreras as data} from '@/assets/data.json';

const Page = () => {
  let { menu, arrow_nav, progress_bar, badge_list, item_list } = data;

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
      <Menu type={menu.type} text={menu.text} /> 
      <ProgressBar progress={progress_bar.progress} />
      <ArrowNav block={arrow_nav.block} rightUrl={arrow_nav.rightUrl} text={arrow_nav.text} />
      <BadgeList color={badge_list.color} badges={badge_list.badges} />
      <div className="flex-1 overflow-y-auto">
        <ItemList items={item_list} />
      </div>
    </div>
  );
  }
};

export default Page;

