import '../styles/Card.scss'
import {Link} from 'react-router-dom'


export default function Card({title, cover, description}) {
    return (
    
        <Link className="card" to="/appartements" style={{ backgroundImage: `url(${cover})` }}
      aria-label={description}>
        <div className="card__overlay">
        <h2 className="card__title">{title}</h2>
      </div>
        
        </Link>
    
    )
}