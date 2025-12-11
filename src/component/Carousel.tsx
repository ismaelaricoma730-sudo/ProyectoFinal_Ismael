
import { useState } from "react";
import "../styles/Carousel.css";

type Props = {
  imagenes: string[];
};

const Carousel = ({ imagenes }: Props) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % imagenes.length);
  const prev = () => setIndex((index - 1 + imagenes.length) % imagenes.length);

  return (
    <div className="carousel">
      <button onClick={prev}>◀</button>
      <img src={imagenes[index]} />
      <button onClick={next}>▶</button>
    </div>
  );
};

export default Carousel;
