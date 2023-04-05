import Menu from "@/components/molecules/menu";
import ColoredProgressBar from "@/components/atoms/progress_bar";
import ArrowNav from "@/components/molecules/arrow_nav";

const Home = () => {

  return (
    <><Menu type="search"  text="Busca tus asignaturas..."  />
    <ColoredProgressBar progress={2} />
    
    <ArrowNav leftUrl="/" rightUrl="/restrictions" centerText="Selecciona tus asignaturas" /> 
    </>
  );
};

export default Home;

