import '../styles/Card.scss'


export default function Card({title, cover, description}) {
    return (
    
        <div className="card" style={{ backgroundImage: `url(${cover})` }}
      aria-label={description}>
        <a className="card__overlay">
        <h2 className="card__title" alt={title}>{title}</h2>
        </a>
        
        </div>
    
    )
}