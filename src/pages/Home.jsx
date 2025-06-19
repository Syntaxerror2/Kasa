import '../styles/Home.scss'
import bannerImg from '../assets/IMG.svg'
import properties from '../data/properties.json'
import Card from '../components/Card'

export default function Home() {

  return (
      <main className="main">
        <div className="main__banner">
          <img src={bannerImg} alt="image d'une côte océanique" />
          <div className="main__banner--overlay" />
        <h1 className="main__banner--text">Chez vous, partout et ailleurs</h1>
        </div>
        <div className="main__container">
          {properties.map((property) => 
          
          <Card 
          key={property.id}
          title={property.title}
          cover={property.cover}
          
          /> 
          )}



        </div>

    </main>



  )
  
}