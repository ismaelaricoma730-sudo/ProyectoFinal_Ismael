
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { idioma, cambiarIdioma } = useContext(LanguageContext);

  return (
    <button onClick={cambiarIdioma}>
      {idioma === "es" ? "EN" : "ES"}
    </button>
  );
};

export default LanguageSwitcher;


