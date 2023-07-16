//Styles
import './Dropdown.css'


export const Dropdown = () => {
  return (
    <div className="dropdown-container" id='box'>
      <ul className="dropdown-list">
        <li className="dropdown-item a1">
          <a href="#">FELIKA</a>
        </li>
        <li className="dropdown-item a2">
          <a href="#">ESTACIONES</a>
        </li>
        <li className="dropdown-item a3">
          <a href="#">RELATOS</a>
        </li>
        <li className="dropdown-item a4">
          <a href="#">EXTRAS</a>
        </li>
      </ul>
    </div> 
  )
}

export default Dropdown