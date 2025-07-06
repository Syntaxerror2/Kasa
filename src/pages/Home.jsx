import '../styles/Home.scss'
import properties from '../data/properties.json'
import coastImg from '../assets/coast_img.webp';
import Card from '../components/Card'
import Banner from '../components/Banner'

export default function Home() {
  let altHome = 'Photographie montrant une côte océanique'
  let text = 'Chez vous, partout et ailleurs'


  return (
      <main className="main">
        

        <Banner bannerImg={coastImg} alt={altHome} bannerText={text} />
       
        <div className="main__container">
          {properties.map((property) => 
          
        
          <Card 
          key={property.id}
          id={property.id}
          title={property.title}
          cover={property.cover}
        
          /> 
    
          )}



        </div>

    </main>



  )
  
}