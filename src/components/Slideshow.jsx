import '../styles/Slideshow.scss'


export default function Slideshow( {id, title, cover, description}) {
   return (
   <div key={id}>
        <img className="slideshow" src={cover} alt={description}  title={title} />
          
        
        <h2 className="slideshow__title">{title}</h2>


    </div>
    )
}