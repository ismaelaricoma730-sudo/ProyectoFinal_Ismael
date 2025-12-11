/* inciso f*/
import { useState, useEffect } from "react";
import "../styles/Banner.css";

const imagenes = [
  "/img/presentaciones0_8071.jpg",
  "/img/presentaciones0_4512.jpg",
  "/img/presentaciones0_4521.jpg"
];

const Banner = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % imagenes.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);
  const img1 = imagenes[index];
  const img2 = imagenes[(index + 1) % imagenes.length];
  const img3 = imagenes[(index + 2) % imagenes.length];

  return (
    <div className="banner">
      <img src={img1} className="banner-img" alt="Banner 1" />
      <img src={img2} className="banner-img" alt="Banner 2" />
      <img src={img3} className="banner-img" alt="Banner 3" />
    </div>
  );
};

export default Banner;



