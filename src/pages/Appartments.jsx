import Collapse from '../components/Collapse'
import Slideshow from '../components/Slideshow'
import properties from '../data/properties.json'
import '../styles/Appartements.scss'
import { useParams, Navigate } from 'react-router-dom'


export default function Appartments() {
const {id} = useParams()
console.log(id)
const property = properties.find((item) => item.id === id)
if(!property) {
 return <Navigate to='../pages/NotFound.jsx'/>
}
    return (
    
  <main className="appartements">
 <Slideshow 
 key={property.id} 
 id={property.id} 
 cover={property.cover} 
 description={property.description}
 title={property.title}
 /> 
  <div class="appartements__collapse-container">
 <Collapse 
 id={property.id} 
 title="Description" 
 content={property.description }

    
 
   
     />

      <Collapse 
 id={property.id} 
 title="Equipement" 
 content={    
    <ul>
    {property.equipments.map((item, index) =>  
        <li style={{listStyleType: 'none', width: '30%'}} key={index}>{item}</li>  )}
    </ul>
     }
   
     />
</div>

        
    </main>)
}