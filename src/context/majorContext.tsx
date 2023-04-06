"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { pagina_carreras as data } from "@/assets/data.json";

interface MajorProps {
  id: string;
  name: string;
  category: string;
}

interface MajorContextValue {
  majors: MajorProps[];
  selectedMajors: MajorProps[];
  toggleMajorSelection: (major: MajorProps) => void;
  categories: string[];
  filterMajors: (text: string) => void;
  filteredMajors: MajorProps[];
}

const MajorContext = createContext<MajorContextValue>({
  majors: [],
  selectedMajors: [],
  toggleMajorSelection: () => {},
  categories: [],
  filteredMajors: [],
  filterMajors: () => {}
});

export const useMajorContext = () => useContext(MajorContext);

interface MajorProviderProps {
  children: React.ReactNode;
}

const MajorProvider = ({ children }: MajorProviderProps) => {
  const [selectedMajors, setSelectedMajors] = useState<MajorProps[]>([]);
  const [majors, setMajors] = useState<MajorProps[]>([]);
  const [filteredMajors, setFilteredMajors] = useState<MajorProps[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const filterMajors = (text: string) => {
    if(text === ''){
      setFilteredMajors(majors);
    }else{
      setFilteredMajors(
        majors.filter((major) => major.name.toLowerCase().includes(text.toLowerCase())
      ));
    }
    
  };

  const toggleMajorSelection = (major: MajorProps) => {
    setSelectedMajors((prevSelectedMajors) => {
      const index = prevSelectedMajors.findIndex((selectedMajor) => selectedMajor.id === major.id);
      if (index === -1) {
        return [...prevSelectedMajors, major];
      } else {
        const newSelectedMajors = [...prevSelectedMajors];
        newSelectedMajors.splice(index, 1);
        return newSelectedMajors;
      }
    });
  };

  useEffect(() => {
    setMajors(data.item_list);
    setFilteredMajors(data.item_list);
    setCategories(["Pregrado", "Posgrado"]);
  }, []);

  const value = {
    majors,
    selectedMajors,
    toggleMajorSelection,
    categories,
    filteredMajors,
    filterMajors
  };

  return <MajorContext.Provider value={value}>{children}</MajorContext.Provider>;
};

export { MajorContext, MajorProvider };