import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
import Tags from "../components/Tags";
import properties from "../data/properties.json";
import Ratings from "../components/Ratings";
import "../styles/Gallery.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import NotFound from "./NotFound";

export default function Appartments() {
  const { id } = useParams();
  const property = properties.find((item) => String(item.id) === id);

  if (!property) {
    return <NotFound />;
  }

  const pictures = property.pictures.includes(property.cover)
    ? property.pictures
    : [property.cover, ...property.pictures];
  //Si l'on arrive à la cover, cet opérateur évite le doublon
  /* eslint-disable react-hooks/rules-of-hooks */
  const [index, setIndex] = useState(0);
  /* eslint-enable react-hooks/rules-of-hooks */
  const prevIndex = () => setIndex((i) => (i + 1) % pictures.length);
  const lastIndex = () => setIndex((i) => (i - 1 + pictures.length) % pictures.length);

  const cleanText = property.description.replace(/\s+/g, " ").trim();

  return (
    <main className="appartements">
      <section className="appartements__slideshow">
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
      </section>

      <section className="appartements__section">
        <div className="appartements__title--wrapper">
          <div className="">
            <h1 className="appartements__title">{property.title}</h1>
            <h2 className="appartements__location">{property.location}</h2>
            <Tags id={property.id} key={property.id} tags={property.tags} />
          </div>
        </div>

        <div className="appartements__property--wrapper">
          <div className="appartements__ratings">
            <Ratings id={property.id} rating={property.rating} />
          </div>
          <div className="appartements__host--container">
            <p className="appartements__host--name">{property.host.name}</p>
            <img
              className="appartements__host--photo"
              src={property.host.picture}
              alt={property.host.name}
            />
          </div>
        </div>
      </section>

      <section className="appartements__collapse-container">
        <Collapse id={property.id} title="Description" content={cleanText} />
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
      </section>
    </main>
  );
}

/*
import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
import Tags from "../components/Tags";
import properties from "../data/properties.json";
import Ratings from "../components/Ratings";
import "../styles/Gallery.scss";
import { useParams, Navigate } from "react-router-dom";
import { useMemo, useState } from "react";

export default function Appartments() {
  const { id } = useParams();
  const property = properties.find((item) => item.id === id);
   if (!property) {
    return <NotFound />;
  }
   const [index, setIndex] = useState(0);
    const pictures = useMemo(() => {
  //useMemo "mémorise" le résultat (l'index du tableau)
  //ainsi, il n'exécute la fonction que si la valeur de property change
  //cela évite d'avoir deux fois de suite mon image cover
    if (property.pictures.includes(property.cover)) {
      return property.pictures;
    }
    return [property.cover, ...property.pictures];
  }, [property]);
 
 
  const collapseContent = property.description;
  const cleanText = collapseContent.replace(/\s+/g, " ").trim();
 
  // Je crée un tableau réunissant la cover et les pictures. UseMemo évite la duplication de la cover
  // lors d'une itération complète à travers le tableau

  const prevIndex = () => setIndex((index) => (index + 1) % pictures.length);
  const lastIndex = () =>
    setIndex((index) => (index - 1 + pictures.length) % pictures.length);
  // En javascript, le modulo d'un nombre négatif reste négatif. Il est donc nécessaire
  // d'ajouter "+ pictures.length" pour décrémenter, en remontant toujours dans la boucle
  return (
    <main className="appartements">
    <section className="appartements__slideshow">
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
      </section>
    <section className="appartements__section">
      <div className="appartements__title--wrapper">
        <div class>
          <h1 className="appartements__title">{property.title}</h1>
          <h2 className="appartements__location">{property.location}</h2>
           <Tags id={property.id} key={property.id} tags={property.tags} />
        </div>
        
      </div>
      <div className="appartements__property--wrapper">
         <div className="appartements__ratings">
        <Ratings id={property.id} rating={property.rating} />
        </div>
        <div className="appartements__host--container">
          <p className="appartements__host--name">{property.host.name}</p>
          <img
            className="appartements__host--photo"
            src={property.host.picture}
          />
        </div>
       
      </div>
      </section>
      <section className="appartements__collapse-container">
        <Collapse id={property.id} title="Description" content={cleanText} />

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
      </section>
    </main>
  );
}
*/
