//Styles
import './Author.css'

//Assets
import picture from '../assets/picture.jpg'
import down from '../assets/down.svg'
import up from '../assets/up.svg'

//Content
import { authorContent } from '../content/content'

//Hooks
import { useRef } from 'react'


export const Author = () => {
    const scrollArticle = useRef(null)

    const handleScrollUp = () => {
        scrollArticle.current.scrollTop -= 100;
      };
    
      const handleScrollDown = () => {
        scrollArticle.current.scrollTop += 100;
      };

 
  return (
    <div >
        <div className='author-title'>EDITORIAL</div>
    <div className="author-container">
        
        <div className="author-content">
            <div onClick={handleScrollUp}>
                <img src={up} alt="up" width={20} className='scroll-button'/>
            </div>
            <div ref={scrollArticle}
                style={{ height: "200px", overflow: "hidden" }}>
                    {authorContent}
            </div>
            <div onClick={handleScrollDown}>
                <img src={down} alt="down" width={20} className='scroll-button'/>
            </div>
        </div>
        
        <img src={picture} alt="author" className="author-image"/>
    </div></div>
  )
}

export default Author