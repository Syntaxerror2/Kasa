import "../styles/Slideshow.scss";
import VectorLeft from "../assets/Vector_left.svg";
import VectorRight from "../assets/Vector_right.svg";

export default function Slideshow({id,title,cover,description,last,next,}) {
  return (
    <div key={id}>
      <div className="slideshow__container">
        <span className="slideshow__vector slideshow__vector--left">
          <img
            alt="flèche allant vers la gauche"
            className="slideshow__vector--img"
            onClick={last}
            src={VectorLeft}
          />
        </span>
        <span className="slideshow">
          <img
            className="slideshow__cover"
            src={cover}
            alt={description}
            title={title}
          />
        </span>
        <span
          className="slideshow__vector slideshow__vector--right"
          onClick={next}
        >
          <img className="slideshow__vector--img" alt="flèche allant vers la droite" src={VectorRight} />
        </span>
      </div>
    </div>
  );
}
