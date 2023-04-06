"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useMajorContext } from "@/context/majorContext";
import { pagina_asignaturas as data} from '@/assets/data.json';


interface SubjectProps {
  id: string;
  name: string;
  category: string[];
}

interface SubjectContextValue {
  subjects: SubjectProps[];
  selectedSubjects: SubjectProps[];
  toggleSubjectSelection: (subject: SubjectProps) => void;
  filterSubjects: (text: string) => void;
  categories: string[];
  filteredSubjects: SubjectProps[];
}

const SubjectContext = createContext<SubjectContextValue>({
    subjects: [],
    selectedSubjects: [],
    toggleSubjectSelection: () => {},
    filterSubjects: () => {},
    categories: [],
    filteredSubjects: [],
});

export const useSubjectContext = () => useContext(SubjectContext);

interface SubjectProviderProps {
  children: React.ReactNode;
}

const SubjectProvider = ({ children }: SubjectProviderProps) => {
  const { selectedMajors } = useMajorContext();
  const [selectedSubjects, setSelectedSubjects] = useState<SubjectProps[]>([]);
  const [subjects, setSubjects] = useState<SubjectProps[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredSubjects, setFilteredSubjects] = useState<SubjectProps[]>([]);

  const toggleSubjectSelection = (subject: SubjectProps) => {
    setSelectedSubjects((prevSelectedSubjects) => {
      const index = prevSelectedSubjects.findIndex((selectedSubject) => selectedSubject.id === subject.id);
      if (index === -1) {
        return [...prevSelectedSubjects, subject];
      } else {
        const newSelectedSubjects = [...prevSelectedSubjects];
        newSelectedSubjects.splice(index, 1);
        return newSelectedSubjects;
      }
    });
  };

  const toggleCategorySelection = (category: string) => {
    setSelectedCategories([category]); 
  };

  const filterSubjects = (text: string) => {
    if (text === "") {
      setFilteredSubjects(subjects);
    } else {
      setFilteredSubjects(
        subjects.filter((subject) =>
          subject.name.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
        const response = `https://api.example.com/subjects?majors=${selectedMajors.map((major) => major.id).join(",")}`;
        setSelectedSubjects([]);
        setSubjects(data.item_list);
        setFilteredSubjects(data.item_list);
        setCategories(selectedMajors.map((major) => major.name));
  }, [selectedMajors]);

  const value = {
    subjects,
    selectedSubjects,
    toggleSubjectSelection,
    filterSubjects,
    categories,
    filteredSubjects,
  };

  return <SubjectContext.Provider value={value}>{children}</SubjectContext.Provider>;
};

export { SubjectContext, SubjectProvider };
