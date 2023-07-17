//Styles
import "./ModalBook.css";

export const ModalBook = ({ book }) => {
  return (
    <div className='modal-container'>
      <div className='modal-image-container'>
        <img src={book.cover} alt={book.title} />
      </div>
      <div className='modal-content-container'>
        <div className='modal-content'>{book.title}</div>
        <div className='modal-categories-container'>
          <div className='modal-category'>Ficción</div>
          <div className='modal-category'>Aventura</div>
        </div>
        <div className='modal-button'>Leer</div>
      </div>
    </div>
  );
};

export default ModalBook;
