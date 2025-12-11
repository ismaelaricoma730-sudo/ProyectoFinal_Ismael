import { useEffect, useState } from "react";
import "../styles/Registro.css";


// Definimos la interfaz para tipar los datos
interface Usuario {
  nombre: string;
  telefono: string;
  email: string;
  pais: string;
  empresa: string;
  asunto: string;
  mensaje: string;
}

const Registro = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    // Obtenemos los usuarios guardados en localStorage
    const data: Usuario[] = JSON.parse(localStorage.getItem("usuarios") || "[]");
    setUsuarios(data);
  }, []);

  return (
    <div style={{ maxWidth: "800px", margin: "50px auto" }}>
      <h1>Usuarios Registrados</h1>

      {usuarios.length === 0 ? (
        <p>No hay usuarios registrados.</p>
      ) : (
        usuarios.map((u, i) => (
          <div key={i} className="usuario-card">
            <p><strong>Nombre:</strong> {u.nombre}</p>
            <p><strong>Teléfono:</strong> {u.telefono}</p>
            <p><strong>Email:</strong> {u.email}</p>
            <p><strong>País:</strong> {u.pais}</p>
            <p><strong>Empresa:</strong> {u.empresa}</p>
            <p><strong>Asunto:</strong> {u.asunto}</p>
            <p><strong>Mensaje:</strong> {u.mensaje}</p>
          </div>
        ))
      )}
   
     
  
    </div>
   
  
  );
};

export default Registro;


