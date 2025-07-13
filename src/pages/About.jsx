import Collapse from "../components/Collapse";
import Banner from "../components/Banner";
import "../styles/About.scss";
import aboutImg from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash-2.webp";

export default function About() {
  const altAbout = "Chaîne de montagnes";
  const valeurs = [
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      content:
        "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <main className="about">
      <Banner bannerImg={aboutImg} alt={altAbout} bannerText={""} />

      {valeurs.map((valeur, index) => (
        <Collapse key={index} title={valeur.title} content={valeur.content} />
      ))}
    </main>
  );
}
