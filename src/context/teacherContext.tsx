"use client"
import { createContext, useContext, useState, useEffect } from "react";
import { useSubjectContext } from "@/context/subjectContext";
import { pagina_restricciones as data} from '@/assets/data.json';

interface teacherProps {
  id: string;
  name: string;
  category: string;
}

interface TeacherContextValue {
  teachers: teacherProps[];
  selectedTeachers: teacherProps[];
  toggleTeacherSelection: (teacher: teacherProps) => void;
  filterTeachers: (text: string) => void;
  categories: string[];
  filteredTeachers: teacherProps[];
}

const TeacherContext = createContext<TeacherContextValue>({
    teachers: [],
    selectedTeachers: [],
    toggleTeacherSelection: () => {},
    filterTeachers: () => {},
    categories: [],
    filteredTeachers: [],
});

export const useTeacherContext = () => useContext(TeacherContext);

interface TeacherContextProps {
    children: React.ReactNode;
}

const TeacherProvider = ({ children }: TeacherContextProps) => {
    const { selectedSubjects } = useSubjectContext();
    const [selectedTeachers, setSelectedTeachers] = useState<teacherProps[]>([]);
    const [teachers, setTeachers] = useState<teacherProps[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [filteredTeachers, setFilteredTeachers] = useState<teacherProps[]>([]);
    

    const toggleTeacherSelection = (teacher: teacherProps) => {
        setSelectedTeachers((prevSelectedTeachers) => {
            const index = prevSelectedTeachers.findIndex((selectedTeacher) => selectedTeacher.id === teacher.id);
            if (index === -1) {
                return [...prevSelectedTeachers, teacher];
            } else {
                const newSelectedTeachers = [...prevSelectedTeachers];
                newSelectedTeachers.splice(index, 1);
                return newSelectedTeachers;
            }
        });
    }; // Agrega llave de cierre aquí

    const filterTeachers = (Category: string) => {
        setFilteredTeachers(teachers.filter((teacher) => teacher.category === Category));
    };

    useEffect(() => {
        setSelectedTeachers([]);
        setTeachers(data.primera_seccion.profesor_list);
        setFilteredTeachers(data.primera_seccion.profesor_list);
        setCategories(selectedSubjects.map((subject) => subject.name));
    }, [selectedSubjects]);

    const value = {
        teachers,
        selectedTeachers,
        toggleTeacherSelection,
        filterTeachers,
        categories,
        filteredTeachers,
    };

    return <TeacherContext.Provider value={value}>{children}</TeacherContext.Provider>;
};

export {TeacherContext, TeacherProvider};
