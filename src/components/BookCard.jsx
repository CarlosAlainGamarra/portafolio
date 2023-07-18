//Styles
import './BookCard.css'

//Router
import { Link } from 'react-router-dom'


//Content
import { books } from '../content/content'

export const BookCard = () => {
  return (
    <div className="bookcard-container">
        <div className="bookcard-image-container">
            <img src={books[1].cover} alt={books[1].title} className='bookcard-image'/>
        </div>
        <div className="bookcard-content-container">
            <div className="bookcard-content">
                <div className='soon'>—ESTRENO!</div>
                <p>{books[1].info}</p>
            </div>
            <div className="bookcard-categories-container">
            <Link to={`/book/${books[1].id}`}>
              <div className='bookcard-button'>Leer</div>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default BookCard
