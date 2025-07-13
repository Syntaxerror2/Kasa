import "../styles/Tags.scss";

export default function Tags({tags}) {
  return (
    <div className="tag__section">
      <div className="tag__wrapper">
        {tags.map((tag, index) => (
          <span className="tag" key={index}>
            {tag}
          </span>
      
        ))}
      </div>
    </div>
  );
}
