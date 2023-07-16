//Styles
import './BookCard.css'

//Assets
//import cero from '../assets/cero.png'

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
                <h2>comming soon</h2>
                <p>{books[1].info}</p>
            </div>
            <div className="bookcard-categories-container">
                <span className='bookcard-categorie'>mosterio</span>
                <span className='bookcard-categorie'>acción</span>
                <span className='bookcard-categorie'>deportes</span>
            </div>
        </div>
    </div>
  )
}

export default BookCard
