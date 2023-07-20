//Styles
import './PopC.css'

//Assets
import underConstruction from '../assets/underConstruction.png'

//Router
import { Link } from 'react-router-dom'

export const PopC = () => {
  return (
    <div className="Pop-C-container">
        Sorry. I'm working on this.
        <img src={underConstruction} alt="under construction" />
        <Link to='/main'>← Home</Link>
    </div>
  )
}

export default PopC
