import {createContext,useContext,useState} from "react";

let categorycontext=createContext()

export function Categoryprovider({ children }) {
    const [category, setcategory] = useState('book');
  
    const value = {
      category,
      setcategory,
    };
  
    return (
      <categorycontext.Provider value={value}>
        {children}
      </categorycontext.Provider>
    );
}
  
export function useCategory() {
const context = useContext(categorycontext);
if (context === undefined) {
    throw new Error('useCategory must be used within a CategoryProvider');
}
return context;
}