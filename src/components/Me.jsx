//Styles
import './Me.css'

//Hooks
import { useRef } from 'react'

//Assets
import picture from '../assets/picture.jpg'
import down from '../assets/down.svg'
import up from '../assets/up.svg'

//Content
import { author } from '../content/content'


export const Me = () => {
    const scrollArticle = useRef(null)

    const handleScrollUp = () => {
        scrollArticle.current.scrollTop -= 100;
      };
    
      const handleScrollDown = () => {
        scrollArticle.current.scrollTop += 100;
      };


  return (
    <div className='container'>

        <div className='content'>
            <div onClick={handleScrollUp}>
                <img src={up} alt="up" width={20}/>
            </div>
            <div className='caption' ref={scrollArticle}
            style={{ height: "300px", overflow: "hidden" }}>
                {author}
            </div>
            <div onClick={handleScrollDown}>
                <img src={down} alt="down" width={20}/>
            </div>
        </div>
        <div className='image'>
            <img src={picture} alt="picture" />
        </div>
    </div>
  )
}

export default Me
