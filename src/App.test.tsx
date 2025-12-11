
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./component/Navbar";
import AppRouter from "./router/AppRouter";
import { useEffect } from "react";
import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";

const App: React.FC = () => {
  const { idioma } = useContext(LanguageContext);

  useEffect(() => {
    document.documentElement.lang = idioma; 
  }, [idioma]);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;

