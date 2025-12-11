import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">

        <div className="footer-section">
          <h3>Empresa</h3>
          <ul>
            <li>❂ Contacto</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Tienda</h3>
          <ul>
            <li>回 Destacados</li>
            <li>🔌 Categorías</li>
            <li>✻ Nuevos</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Unete</h3>
          <div className="social-icons">
            <img src="img/correo.jpg" alt="Correo"/>
            <img src="img/insta.jpg" alt="Instagram"/>
            <img src="img/face.jpg" alt="Facebook"/>
            <img src="img/tiktok.jpg" alt="TikTok"/>
            <img src="img/tube.png" alt="YouTube"/>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>¡Gracias por tu visita y regresa pronto!</p>
        <p>&copy; Copyright 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
