//Styles
import './BookCard.css'

//Assets
import cero from '../assets/cero.png'

//Content
import { cardInfo } from '../content/content.js'

export const BookCard = () => {
  return (
    <div className="bookcard-container">
        <div className="bookcard-image-container">
            <img src={cero} alt="cero" className='bookcard-image'/>
        </div>
        <div className="bookcard-content-container">
            <div className="bookcard-content">
                <h2>Title</h2>
                <p>{cardInfo}</p>
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
