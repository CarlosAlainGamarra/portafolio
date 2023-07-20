//Styles
import "./Wellcome.css";

//Assets
import logo3 from "./assets/logo3.png";

//Router
import { useNavigate } from 'react-router-dom'

export const Wellcome = () => {
  const navigate = useNavigate()

  const redirect = setTimeout(() => {
    navigate('/main', { replace: true, })
  }, 3000)

  redirect
  return (
    <div className='wellcome-container'>
      <div className='progress-bar'>
        <div className='fill'>
          
        </div>
      </div><img src={logo3} alt='logo3' className='sign' />
    </div>
  );
};

export default Wellcome;
