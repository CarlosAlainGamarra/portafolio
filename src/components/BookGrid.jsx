//Styles
import "./BookGrid.css";

//Assets
import { books } from "../content/content";

//Components
import NavBar from '../components/NavBar'
import Card from '../components/Card'

export const BookGrid = () => {

    const favBooks = localStorage.getItem('favs')
    let tempBooksInFavs;
       if(favBooks === null) {
        tempBooksInFavs = []
      }else{
        tempBooksInFavs = JSON.parse(favBooks)
      }

    const addFavs = (e) => {
        const title = e.currentTarget.id
        const cover = e.currentTarget.firstChild.src
        console.log(cover)
        const bookData = {
            title, cover
        }
       
        tempBooksInFavs.push(bookData)
        localStorage.setItem('favs', JSON.stringify(tempBooksInFavs))

        /*let isBook = tempBooksInFavs.find(oneBook => oneBook.id === bookData.id)
        if(!isBook){
         tempBooksInFavs.push(bookData)
            localStorage.setItem('favs', JSON.stringify(tempBooksInFavs))
        }else{
            //Es probable que el problema esté aquí
            let booksLeft = tempBooksInFavs.filter(oneBook => oneBook.id === bookData.id)
            localStorage.setItem('favs', JSON.stringify(booksLeft))
        }*/
    }



  return (
    
    <div >
        <NavBar />
        <div className="grid-container">
            <div className="grid-title">
                LIBRERÍA
            </div>
            <div className="grid">
                <ul className="grid-list">
                    {books.map((book) => (
                       
                        <li key={book.id} className="grid-item">
                            <Card book={book}/>
                            <button id={book.title} onClick={addFavs} >
                                
                                <img src={book.cover} alt="cover" style={{display : 'none'}}/>
                                fav
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}


export default BookGrid