import Collapse from "../components/Collapse";
import Banner from "../components/Banner";
import valors from "../data/valors.json"
import "../styles/About.scss";
import aboutImg from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash-2_2_11zon.webp";

export default function About() {
  const altAbout = "Chaîne de montagnes";


  return (
    <main className="about">
      <div className="about__banner">
        <Banner
          className="bubu"
          bannerImg={aboutImg}
          alt={altAbout}
          bannerText={""}
        />
      </div>
      {valors.map((valeur, index) => (
        <Collapse key={index} title={valeur.title} content={valeur.content} />
      ))}
    </main>
  );
}
