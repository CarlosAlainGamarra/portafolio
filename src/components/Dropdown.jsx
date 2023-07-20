//Styles
import './Dropdown.css'

//Router
import { Link } from 'react-router-dom'


export const Dropdown = () => {
  return (
    <div className="dropdown-container" id='box'>
      <ul className="dropdown-list">
        <li className="dropdown-item a1">
          <Link to='/popculture'>FELIKA</Link>
        </li>
        <li className="dropdown-item a2">
          <Link to='/popculture'>ESTACIONES</Link>
        </li>
        <li className="dropdown-item a3">
          <Link to='/popculture'>RELATOS</Link>
        </li>
        <li className="dropdown-item a4">
          <Link to='/popculture'>EXTRAS</Link>
        </li>
      </ul>
    </div> 
  )
}

export default Dropdown