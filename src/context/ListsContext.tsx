import React, { createContext, FC } from 'react';

interface ListsContextType {
  lists: any[]; // Replace 'any' with the type of your list items
}

const ListsContext = createContext<ListsContextType>({
    lists: []
  });

  
  export const ListProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const lists: any[] = []; 
    return <ListsContext.Provider value={{ lists }}>{children}</ListsContext.Provider>;
  };
  