/* inciso b */
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import "../styles/Navbar.css";
import CategoriaCard from "./CategoriaCard";
import { useState } from "react";
import { NavLink } from "react-router-dom";



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
   const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <div className="switchers">
  <ThemeSwitcher />
  <LanguageSwitcher />
</div>
      <div className="barra">
        <div className="iconos">
          <img src="img/correo.jpg" alt=""/>
          <img src="img/insta.jpg" alt=""/>
          <img src="img/face.jpg" alt=""/>
          <img src="img/tiktok.jpg" alt=""/>
          <img src="img/tube.png" alt=""></img>
        </div>
      </div>

      <header>
        <div className="header-content">
          <div className="search-container">
            <input type="text" placeholder="⌕ Buscar..." />
          </div>
          
          <p className="titulo">TOLSEN</p>
          <div style={{ width: "250px" }}></div>

          <div className="search-container mobile-search">
            <button className="hamburger-btn" onClick={toggleMenu}>
             ☰
           </button>
          </div>

        </div>

        <nav>
          <a className="activo" href="/">Inicio</a>
          <div className={`menu-derecha ${menuOpen ? "active" : ""}`}>
            <NavLink 
               to="/destacado"
               className={({ isActive }) => isActive ? "activo" : ""}
             >
              回 Destacados
             </NavLink>

             <NavLink 
                 to="/nuevos"
                 className={({ isActive }) => isActive ? "activo" : ""}
             >
                 ✻ Nuevos
             </NavLink>

             <NavLink 
                to="/mostrar"
                className={({ isActive }) => isActive ? "activo" : ""}
             >
                👁️ Registra tu herramienta
            </NavLink>

            <NavLink 
               to="/contacto"
                className={({ isActive }) => isActive ? "activo" : ""}
             >
               📄 Contacto
              </NavLink>
          </div>
        </nav>
      </header>

      </div>   
  );
};

export default Navbar;



