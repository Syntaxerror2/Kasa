import '../styles/Slideshow.scss'
import VectorLeft from '../assets/Vector_left.svg'
import VectorRight from '../assets/Vector_right.svg'



export default function Slideshow( {id, title, cover, description, location, tags, change}) {
   return (
   <div key={id}>
    <div className="slideshow__container">
  <span className="slideshow__vector slideshow__vector--left">
     <img alt="flèche allant vers la gauche" src={VectorLeft} />
  </span>
      <span className="slideshow">
        <img 
        className="slideshow__cover"  
        src={cover} 
        alt={description}  
        title={title}
        
         />
       </span>
     <span 
     className="slideshow__vector slideshow__vector--right"
     onClick={change} 
     >
     <img alt="flèche allant vers la droite"  src={VectorRight}/>
     </span>  
        </div> 
    <div>
        <h2 className="slideshow__title">{title}</h2>
        <h3 className="slideshow__location">{location}</h3>
        <div className="slideshow__tag">
        {tags.map((tag, index) =>
        <span className="tag" key={index}>{tag}</span>
        )}
        </div>
    </div>


    </div>
    )
}


