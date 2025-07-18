import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
import Tags from "../components/Tags";
import properties from "../data/properties.json";
import Ratings from "../components/Ratings"
import "../styles/Appartements.scss";
import { useParams, Navigate } from "react-router-dom";
import { useMemo, useState } from "react";

export default function Appartments() {
  const { id } = useParams();
  const [index, setIndex] = useState(0);
  const property = properties.find((item) => item.id === id);
  const pictures = useMemo(() => {
    if (property.pictures.includes(property.cover)) {
      return property.pictures;
    }
    return [property.cover, ...property.pictures];
  }, [property]);
  // Je crée un tableau réunissant la cover et les pictures. UseMemo est un hook évitant la duplication de la cover
  // lors d'une itération complète à travers le tableau
  if (!property) {
    return <Navigate to="../pages/NotFound.jsx" />;
  }

  const prevIndex = () => setIndex((index) => (index + 1) % pictures.length);
  const lastIndex = () =>
    setIndex((index) => (index - 1 + pictures.length) % pictures.length);
  // En javascript, le modulo d'un nombre négatif reste négatif. Il est donc nécessaire
  // d'ajouter "+ pictures.length" pour décrémenter, en remontant toujours dans la boucle
  return (
    <main className="appartements">
      <Slideshow
        key={property.id}
        last={lastIndex}
        next={prevIndex}
        id={property.id}
        cover={pictures[index]}
        description={property.description}
        title={property.title}
        index={index}
      />
      <div className="appartements__title--wrapper">

 <div class>
      <h1 className="appartements__title">{property.title}</h1>
      <h2 className="appartements__location">{property.location}</h2>
</div>
<div className="appartements__host--container">
      <p className="appartements__host--name">{property.host.name}</p>
      <img className="appartements__host--photo" src={property.host.picture} />
</div>
      </div>
     <div className="appartements__property--wrapper">
      <Tags
        id={property.id}
        key={property.id}
        tags={property.tags}
      
      />
      <Ratings />
      </div>
      <div className="appartements__collapse-container">
        <Collapse
          id={property.id}
          title="Description"
          content={property.description}
        />

        <Collapse
          id={property.id}
          title="Equipement"
          content={
            <ul>
              {property.equipments.map((item, index) => (
                <li
                  style={{
                    listStyleType: "none",
                    width: "30%",
                    whiteSpace: "nowrap",
                  }}
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          }
        />
      </div>
    </main>
  );
}
