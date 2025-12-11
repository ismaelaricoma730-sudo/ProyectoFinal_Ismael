import CategoriaCard from "../component/CategoriaCard";
import "../styles/Nuevo.css"
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import Footer from "../component/Footer";


const Nuevos = () => {
  return (
    <div>
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

     <main className="pagina-destacados">
       <h2>Nuevos Productos</h2>

        <div className="destacados-contenedor">
    
          <div className="productos-seccion">
            
            <div className="destacados-filtros">
              <div className="destacados-ordenar">
                <span>Orden:</span>
                <select>
                  <option>Precio menor</option>
                  <option>Precio mayor</option>
                  <option>Más vendidos</option>
                  <option>Mejor valorados</option>
                </select>
              </div>
            </div>

            <div className="grid-destacados">
              <div className="producto-destacado-item">
                <div className="destacado-badge">DESTACADO</div>
                <div className="nuevo-badge">NUEVO</div>
                <img src="img/presentaciones0_8067.jpg" alt="DISCO CORTE AC.INOX" className="producto-img"/>
                <h3 className="producto-titulo">DISCO C/METAL AC.INOX 115x1.2x22 mm</h3>
                <p className="producto-precio">USD 0,47</p>
                <p className="producto-codigo">015-76102</p>
              </div>

              <div className="producto-destacado-item">
                <div className="destacado-badge">DESTACADO</div>
                <img src="img/productos3_7749.jpg" alt="SET DESTORNILLADOR" className="producto-img"/>
                <h3 className="producto-titulo">SET DESTORNILLADOR AISLADO 1000V 13 Pcs</h3>
                <p className="producto-precio">USD 34,02</p>
                <p className="producto-codigo">015-38017</p>
              </div>

              <div className="producto-destacado-item">
                <div className="destacado-badge">DESTACADO</div>
                <img src="img/productos3_6567.jpg" alt="SET HERRAMIENTAS" className="producto-img"/>
                <h3 className="producto-titulo">AMOLADORA DE BANCO 6?/150x16x12.7 mm 150W</h3>
                <p className="producto-precio">USD 52,04</p>
                <p className="producto-codigo">015-79646</p>
              </div>

              <div className="producto-destacado-item">
                <div className="destacado-badge">DESTACADO</div>
                <img src="img/productos3_6533.jpg" alt="GENERADOR" className="producto-img"/>
                <h3 className="producto-titulo">TALADRO 10mm 20V 1Bat./Carg</h3>
                <p className="producto-precio">USD 77</p>
                <p className="producto-codigo">015-87211</p>
              </div>
              <div className="producto-destacado-item">
                <div className="destacado-badge">DESTACADO</div>
                <img src="img/productos3_7731.jpg" alt="Nuevo Producto 1" className="producto-img"/>
                <h3 className="producto-titulo">SET HERRAMIENTAS c/TALADRO 710W 13MM 95 P</h3>
                <p className="producto-precio">USD 121,67</p>
                <p className="producto-codigo">015-79685</p>
             </div>

             <div className="producto-destacado-item">
                 <div className="destacado-badge">DESTACADO</div>
                 <img src="img/productos3_6567.jpg" alt="Nuevo Producto 2" className="producto-img"/>
                 <h3 className="producto-titulo">AMOLADORA 230 mm 3000W</h3>
                 <p className="producto-precio">USD 189,44</p>
                 <p className="producto-codigo">015-79526</p>
              </div>

            <div className="producto-destacado-item">
               <div className="destacado-badge">DESTACADO</div>
               <img src="img/productos3_6547.jpg" alt="Nuevo Producto 3" className="producto-img"/>
                <h3 className="producto-titulo">GENERADOR INVERTER MONOFASICO 220V 1 8KW</h3>
               <p className="producto-precio">USD 919,33</p>
               <p className="producto-codigo">015-79986</p>
             </div>

            <div className="producto-destacado-item">
               <div className="destacado-badge">DESTACADO</div>
               <img src="img/productos3_6520.jpg" alt="Nuevo Producto 4" className="producto-img"/>
                <h3 className="producto-titulo">CARRO HERRAMIENTAS C/RUEDA COMPL. 175 Pcs</h3>
               <p className="producto-precio">USD 1.130</p>
               <p className="producto-codigo">015-85410</p>
            </div>
            </div>
          </div>

          
        </div>
      </main>
      <Footer/>

    </div>
  );
};

export default Nuevos;

