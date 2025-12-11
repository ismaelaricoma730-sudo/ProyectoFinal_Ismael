/* Cumple rutas (inciso c) */
import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Destacados from "../pages/Destacados";
import Nuevos from "../pages/Nuevos";
import Contacto from "../pages/Contacto";
import ShowData from "../pages/Registro";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/destacado" element={<Destacados />} />
      <Route path="/nuevos" element={<Nuevos />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/mostrar" element={<ShowData />} />
    </Routes>
  );
};

export default AppRouter;


