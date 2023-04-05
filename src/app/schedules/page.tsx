"use client";

import Menu from "@/components/molecules/menu";
import ColoredProgressBar from "@/components/atoms/progress_bar";
import ArrowNav from "@/components/molecules/arrow_nav";

const Page = () => {

  return (
    <>
      <Menu type="button"  text="Guardar" />
      <ColoredProgressBar progress={3} />
      <ArrowNav direction="right" leftUrl="/restrictions" centerText="Elige tu horario" />
    </>
  );
};

export default Page;
