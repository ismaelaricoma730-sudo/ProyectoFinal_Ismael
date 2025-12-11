
import React from "react";
import Navbar from "./component/Navbar";
import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <AppRouter />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
