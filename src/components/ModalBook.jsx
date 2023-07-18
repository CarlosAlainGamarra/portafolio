//Styles
import "./ModalBook.css";

//Router
import { Link } from "react-router-dom";

//Assets
import close from "../assets/close.svg";

export const ModalBook = ({ book, closeModal }) => {
  return (
    <>
      <div className='overLay'>
        <div className='modal-container'>
          <div className='close-button'>
            <img src={close} alt='close' onClick={closeModal} />
          </div>
          <div className='modal-image-container'>
            <img src={book.cover} alt={book.title} />
          </div>
          <div className='modal-content-container'>
            <div className='modal-content-title'>{book.title}</div>
            <div className='modal-content'>{book.description}</div>
            <div className='modal-categories-container'>
              {book.tags.map((tags) => (
                <div className='modal-category' key={book.id}>
                  {tags}
                </div>
              ))}
            </div>
            <Link to={`/book/${book.id}`}>
              <div className='modal-button'>Leer</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalBook;
