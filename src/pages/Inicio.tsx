import React from "react";
import "../styles/Inicio.css";
import Carousel from "../component/Carousel";
import CategoriaCard from "../component/CategoriaCard";
import Banner from "../component/Banner";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import Footer from "../component/Footer";



const Inicio = () => {
 
  return (
    <div>
      <div className="banner">
        <Banner />
      </div>

      <div className="categorias">
        <div><CategoriaCard img="img/productos3_6538.jpg" texto="Categoria 1" /><p>CONSUMIBLES</p></div>
        <div><CategoriaCard img="img/productos3_6538.jpg" texto="Categoria 2" /><p>HERRAMIENTAS ELÉCTRICAS</p></div>
        <div><CategoriaCard img="img/productos3_6520.jpg" texto="Categoria 3" /><p>GENERADORES</p></div>
        <div><CategoriaCard img="img/productos3_6533.jpg" texto="Categoria 4" /><p>HERRAMIENTAS A BATERÍA</p></div>
        <div><CategoriaCard img="img/productos3_6547.jpg" texto="Categoria 5" /><p>HERRAMIENTAS A COMBUSTIÓN</p></div>
        <div><CategoriaCard img="img/productos3_6255.jpg" texto="Categoria 6" /><p>HERRAMIENTAS DE MANO</p></div>
        <div><CategoriaCard img="img/productos3_7714.jpg" texto="Categoria 7" /><p>HERRAMIENTAS DE JARDÍN</p></div>
        <div><CategoriaCard img="img/productos3_6567.jpg" texto="Categoria 8" /><p>ACCESORIOS</p></div>
        <div><CategoriaCard img="img/productos3_6255.jpg" texto="Categoria 9" /><p>AUTOMOTRIZ</p></div>
      </div>

      <div className="nuevos-productos">
        <h2>Nuevos Productos</h2>

        <div className="carrusel-container">
          <button className="carrusel-btn" id="prev">◀</button>

          <div className="carrusel">
            <div className="producto">
              <img src="img/productos3_7749.jpg" />
              <p>SET DE 26 LLAVES COMBINADAS</p>
              <p className="codigo">015-15884</p>
            </div>
            <div className="producto">
              <img src="img/productos3_7706.jpg" />
              <p>CUCHILLO DESMONTAJE AISLADO</p>
              <p className="codigo">015-51416</p>
            </div>
            <div className="producto">
              <img src="img/productos3_7718.jpg" />
              <p>MEZCLADOR DE PINTURA</p>
              <p className="codigo">015-40104</p>
            </div>
             <div className="producto">
              <img src="img/productos3_7731.jpg" />
              <p>SET DESTORNILLADORES VDE</p>
              <p className="codigo">015-38017</p>
            </div>
          </div>

          <button className="carrusel-btn" id="next">▶</button>
        </div>
      </div>

      <div className="recomendados">
        <h2>☰Recomendados</h2>
        <div className="recomendados-grid">

          <div className="producto-recomendado">
            <img src="img/productos3_6255.jpg" />
            <h3>GATO CARRO 2 TON</h3>
            <p className="precio">USD <span className="num">74</span>,40</p>
            <p className="codigo">015-65462</p>
          </div>

          <div className="producto-recomendado">
            <img src="img/productos3_6437.jpg" />
            <h3>AMOLADORA 125 mm 1200W</h3>
            <p className="precio">USD <span className="num">83</span>,56</p>
            <p className="codigo">015-79527</p>
          </div>
            <div className="producto-recomendado">
            <img src="img/productos3_6567.jpg" />
            <h3>AMOLADORA 950W</h3>
            <p className="precio">USD <span className="num">65</span>,48</p>
            <p className="codigo">015-86850</p>
          </div>
            <div className="producto-recomendado">
            <img src="img/productos3_6520.jpg" />
            <h3>CARRO HERRAMIENTAS 175 Pcs</h3>
            <p className="precio">USD <span className="num">1.130</span></p>
            <p className="codigo">015-85410</p>
          </div>

        </div>
      </div>

      <div className="marca-section">
        <h2 className="marca-titulo">HERRAMIENTAS MANUALES, ELÉCTRICAS A BATERÍA, COMBUSTIÓN</h2>

        <div className="marca-imagenes">
          <div className="marca-imagen"><img src="img/filename476.jpg" alt="Imagen de marca 1"/></div>
          <div className="marca-imagen"><img src="img/filename510.jpg" alt="Imagen de marca 2"/></div>
          <div className="marca-imagen"><img src="img/filename479.jpg" alt="Imagen de marca 3" /></div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Inicio;


