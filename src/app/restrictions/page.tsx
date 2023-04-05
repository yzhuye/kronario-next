"use client";

import Menu from "@/components/molecules/menu";
import ColoredProgressBar from "@/components/atoms/progress_bar";
import ArrowNav from "@/components/molecules/arrow_nav";

const Page = () => {

  return (
    <>
      <Menu />
      <ColoredProgressBar progress={3} />
      <ArrowNav rightUrl="/schedules" leftUrl="/subjects" centerText="Ajusta tu horario" />
    </>
  );
};

export default Page;
