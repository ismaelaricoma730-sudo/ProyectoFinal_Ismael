import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CategoriaCard from "../component/CategoriaCard";
import "../styles/Contacto.css";
import { useRef } from "react";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import Footer from "../component/Footer";


const Contacto = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    pais: "",
    empresa: "",
    asunto: "",
    mensaje: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();

    // Guardamos en localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    usuarios.push(form);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    navigate("/mostrar"); // vamos a la página de usuarios
  };


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

<main className="pagina-contacto">
  <div className="contacto-contenedor">
   
    <div className="contenido-izquierdo">
     <h1>Contacto</h1>
      <p className="texto-intro">
         Contacta con nuestro equipo y en muy breve te daremos respuesta.<br />
         Gracias por tu tiempo.
     </p>
    

   <div className="fila-formulario-imagen">
     <div className="imagen-derecha">
      <img src="img/presentaciones0_4512.jpg" alt="Herramientas Tolsen" />
    </div>

    <div className="formulario-contacto">
      <form onSubmit={enviar}>
        <div className="titulo-form">
                <label htmlFor="nombre">Formulario de contacto</label>
        </div>
        <div className="columnas-formulario">
          <div className="columna-derecha">
  
              <div className="form-group">
                <label htmlFor="nombre">Nombre y apellido *</label>
                <input
                 type="text"
                 id="nombre"
                 value={form.nombre}
                 onChange={handleChange}
                 required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="telefono">Teléfono *</label>
                <input
                     type="tel"
                     id="telefono"
                   value={form.telefono}
                   onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                 type="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                required
               />
              </div>
              
              <div className="form-group">
                <label htmlFor="pais">País</label>
                <select
                    id="pais"
                    value={form.pais}
                    onChange={handleChange}
                   >
                  <option value="bolivia">Bolivia</option>
                   <option value="argentina">Argentina</option>
                    <option value="peru">Peru</option>
                     <option value="eeuu">EEUU</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="empresa">Empresa</label>
                <input
                    type="text"
                    id="empresa"
                      value={form.empresa}
                    onChange={handleChange}
                  />
              </div>
            </div>
            
            <div className="columna-izquierda">
              <div className="form-group">
                <label htmlFor="asunto">Asunto</label>
                <input
                  type="text"
                  id="asunto"
                  value={form.asunto}
                onChange={handleChange}
              />
              </div>
              
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje *</label>
                <textarea
                   id="mensaje"
                   value={form.mensaje}
                   onChange={handleChange}
                   required
                  ></textarea>
              </div>
            </div>
        </div>
        <div className="boton-container">
            <button type="submit" className="boton-enviar">
              Enviar
            </button>
        </div>
        <p className="confidencialidad">
        Los datos suministrados son confidenciales y serán tratados como privados.<br />
        Gracias por el interés.
      </p>

      </form>
    </div>
     
  </div>
   
  </div>
  </div>
</main>
<Footer/>

    </div>
  );
};

export default Contacto;

