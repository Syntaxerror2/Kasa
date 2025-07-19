
import "../styles/Slideshow.scss";
import VectorLeft from "../assets/Vector_left.svg";
import VectorRight from "../assets/Vector_right.svg";
import { useState } from "react";

export default function Slideshow({ property }) {
  const pictures = property.pictures.includes(property.cover)
    ? property.pictures
    : [property.cover, ...property.pictures];

  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % pictures.length);
  const last = () => setIndex((i) => (i - 1 + pictures.length) % pictures.length);

  return (
    <div key={property.id}>
      <div className="slideshow__container">
        <span className="slideshow__vector slideshow__vector--left">
          <img
            alt="flèche allant vers la gauche"
            className={pictures.length === 1 ? "hidden" : "slideshow__vector--img"}
            onClick={last}
            src={VectorLeft}
          />
        </span>
        <span className="slideshow">
          <img
            className="slideshow__cover"
            src={pictures[index]}
            alt={property.description}
            title={property.title}
          />
        </span>
        <span className="slideshow__vector slideshow__vector--right" onClick={next}>
          <img
            className={pictures.length === 1 ? "hidden" : "slideshow__vector--img"}
            alt="flèche allant vers la droite"
            src={VectorRight}
          />
        </span>
      </div>
    </div>
  );
}
  