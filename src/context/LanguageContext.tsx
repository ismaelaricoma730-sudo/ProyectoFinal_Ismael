/* inciso e idioma*/
import { createContext, useState, ReactNode } from "react";

interface LanguageContextProps {
  idioma: string;
  cambiarIdioma: () => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  idioma: "es",
  cambiarIdioma: () => {}
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [idioma, setIdioma] = useState("es");

  const cambiarIdioma = () =>
    setIdioma((prev) => (prev === "es" ? "en" : "es"));

  return (
    <LanguageContext.Provider value={{ idioma, cambiarIdioma }}>
      {children}
    </LanguageContext.Provider>
  );
};



