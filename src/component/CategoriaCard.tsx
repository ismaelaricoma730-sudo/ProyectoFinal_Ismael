import React from "react";
import "../styles/CategoriaCard.css";

type Props = {
  img: string;
  texto: string;
};

const CategoriaCard: React.FC<Props> = ({ img, texto }) => {
  return (
    <div className="categoria-card">
      <img src={img} alt={texto} className="categoria-img" />
    </div>
  );
};

export default CategoriaCard;
