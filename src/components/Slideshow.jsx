import '../styles/Slideshow.scss'
import VectorLeft from '../assets/Vector_left.svg'
import VectorRight from '../assets/Vector_right.svg'



export default function Slideshow( {id, title, cover, description, change}) {
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
  


    </div>
    )
}


