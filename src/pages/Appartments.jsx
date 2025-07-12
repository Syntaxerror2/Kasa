import Collapse from '../components/Collapse'
import Slideshow from '../components/Slideshow'
import Tags from '../components/Tags'
import properties from '../data/properties.json'
import '../styles/Appartements.scss'
import { useParams, Navigate } from 'react-router-dom'
import { useState, useMemo } from 'react'


export default function Appartments() {
    const { id } = useParams()
    const [index, setIndex] = useState(0)
    const property =  properties.find((item) => item.id === id)
    if (!property) {
        return <Navigate to='../pages/NotFound.jsx' />
    }
    const pictures = useMemo(() => { 
        if(property.pictures.includes(property.cover)) {
            return property.pictures
        }
        return [property.cover, ...property.pictures] 
    
    }, [property] ) 
    // Je crée un tableau réunissant la cover et les pictures. UseMemo évite la duplication de la cover
    // lors d'une itération complète à travers le tableau
    const prevIndex = () => setIndex((index) => (index + 1) % pictures.length)
    const lastIndex = () => setIndex((index) => (index - 1 + pictures.length) % pictures.length);
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
                
            <Tags 
            id={property.id}
            key= {property.id}
            location={property.location}
            tags={property.tags}
            title={property.title}
         
            />
            
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
                            {property.equipments.map((item, index) =>
                                <li style={{ listStyleType: 'none', width: '30%', whiteSpace: 'nowrap' }} key={index}>{item}</li>)}
                        </ul>
                    }

                />
            </div>


        </main>)
}