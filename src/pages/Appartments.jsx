import Collapse from '../components/Collapse'
import Slideshow from '../components/Slideshow'
import properties from '../data/properties.json'
import '../styles/Appartements.scss'
import { useParams, Navigate } from 'react-router-dom'
import {useState} from 'react'


export default function Appartments() {
const {id} = useParams()
const [index, setIndex] = useState(0)
const property = properties.find((item) => item.id === id)
if(!property) {
 return <Navigate to='../pages/NotFound.jsx'/>
}
const pictures = [property.cover, ...property.pictures] // Je crée un tableau réunissant la cover et les pictures
const changeIndex = () => setIndex((index) => (index +1) % pictures.length)
return (
    
  <main className="appartements">
 <Slideshow 
 key={property.id} 
 change ={changeIndex}
 id={property.id} 
 cover={pictures[index]} 
 description={property.description}
 title={property.title}
 location={property.location}
 tags={property.tags}
 index={index}
 /> 
  <div className="appartements__collapse-container">
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
        <li style={{listStyleType: 'none', width: '30%', whiteSpace: 'nowrap'}} key={index}>{item}</li>  )}
    </ul>
     }
   
     />
</div>

        
    </main>)
}