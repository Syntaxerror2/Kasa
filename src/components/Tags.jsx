import '../styles/Tags.scss'


export default function Tags({title, tags, location}) {
    return (
   <div>
        <h2 className="tag__title">{title}</h2>
        <h3 className="tag__location">{location}</h3>
        <div className="tag__wrapper">
        {tags.map((tag, index) =>
        
        <span className="tag" key={index}>{tag}</span>
        )}
        </div>
    </div>


    )
}