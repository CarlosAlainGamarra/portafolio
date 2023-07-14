//Styles
import './Footer.css'

//Assets
import logo from '../assets/logo.png'
import youtube from '../assets/youtube.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import tiktok from '../assets/tiktok.svg'
import twitch from '../assets/twitch.svg'

const icons = [instagram, twitter, twitch, tiktok]

export const Footer = () => {
  return (
    <footer className="footer-container">
        <div className='footer-content'>
            <div className="footer-content-logo">
                <img src={logo} alt="logo" />
            </div>

            <div className='footer-content-social'>
                <div className="social-network">
                    <ul className='social-list'>
                        {icons.map((icon) => (
                            <li key={icon}>
                                <img src={icon} alt={icon} className='social-image'/>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="social-contact">
                    contact
                </div>
            </div>

            <div className="footer-content-channels">
                <img src={youtube} alt="youtube" />
            </div>
        </div>

        <div className="footer-copyright">
            Xcoix | Alain Gamarov 2023 all rights reserved ©
        </div>
    </footer>
  )
}

export default Footer