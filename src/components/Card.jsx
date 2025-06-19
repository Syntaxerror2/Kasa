


export default function Card({title, cover, description}) {
    return (
        <div className="card">
        <img src={cover} alt={description} className="card__img" />
        <h2 className={title}>{title}</h2>
        </div>
    )
}