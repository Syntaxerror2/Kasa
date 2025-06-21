import '../styles/Home.scss'
import properties from '../data/properties.json'
import Card from '../components/Card'
import Banner from '../components/Banner'

export default function Home() {

  return (
      <main className="main">

        <Banner />
       
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