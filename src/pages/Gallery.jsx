import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
import Tags from "../components/Tags";
import properties from "../data/properties.json";
import Ratings from "../components/Ratings";
import "../styles/Gallery.scss";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

export default function Appartments() {
  const { id } = useParams();
  const property = properties.find((item) => String(item.id) === id);

  if (!property) {
    return <NotFound />;
  }

  const cleanText = property.description.replace(/\s+/g, " ").trim();

  return (
    <main className="appartements">
      <section className="appartements__slideshow">
        <Slideshow property={property} />
      </section>

      <section className="appartements__section">
        <div className="appartements__title--wrapper">
          <div>
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