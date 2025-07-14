import '../styles/Ratings.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Ratings({ id, rating }) {
  const ratings = Number(rating);
  const totalStars = 5;

  return (
    <div key={id} className="ratings">
      <span className="ratings__wrapper">
        {Array.from({ length: totalStars }).map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={`ratings__star ${index < ratings ? 'active' : 'inactive'}`}
          />
        ))}
      </span>
    </div>
  );
}
