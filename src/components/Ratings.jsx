import '../styles/Ratings.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Ratings() {
  return <div className="ratings">

 <span className='ratings__wrapper'>
<FontAwesomeIcon icon={faStar} className='ratings__star' />
<FontAwesomeIcon icon={faStar} className='ratings__star' />
<FontAwesomeIcon icon={faStar} className='ratings__star' />
<FontAwesomeIcon icon={faStar} className='ratings__star' />
<FontAwesomeIcon icon={faStar} className='ratings__star' />
</span>
  </div>;
}
