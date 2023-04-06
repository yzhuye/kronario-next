"use client";

import Menu from "../molecules/menu";
import ArrowNav from "../molecules/arrow_nav";
import ColoredProgressBar from "../atoms/progress_bar";

const HeaderBar= () => {
    return (
        <header>
            <Menu type="button" text="Guardar"/>
            <ColoredProgressBar progress={3} />
            <ArrowNav direction="right" leftUrl="/restrictions" centerText="Elige tu horario" />
        </header>
      );
    };


export default HeaderBar;