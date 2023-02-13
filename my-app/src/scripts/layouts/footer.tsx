import arrowIcon from '../../assets/icons/arrow.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import githubIcon from '../../assets/icons/github.svg';
import instIcon from '../../assets/icons/inst.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import inIcon from '../../assets/icons/in.svg'
import { Link } from 'react-router-dom';

export function Footer() {
  return(
    <footer>
    <div className="footer_top">
      <Link className="footer_link h5" to='/contact'>CONTACT</Link>
      <Link className="footer_link h5" to='/terms-of-services'>TERMS OF SERVICES</Link>
      <Link className="footer_link h5" to="/shipping-and-returnings">SHIPPING AND RETURNS</Link>
      <div className="footer_email">
        <h5 className="footer_link h5">Give an email, get the newsletter.</h5>
        <img className="footer_icon-arrow footer_icon" src={arrowIcon} alt="arrow"></img>
      </div>
    </div>
    <div className="footer_bottom">
      <h5 className="h5">© 2022 Jeu d'Art. <Link className="footer_link" to='/terms-of-use'>
        Terms of use</Link> and <Link className="footer_link" to="/privacy-policy">privacy policy.</Link></h5>
      <div className="footer_icons">
        <img className="footer_icon" src={githubIcon} alt="github"></img>
        <img className="footer_icon" src={twitterIcon} alt="twitter"></img>
        <img className="footer_icon" src={facebookIcon} alt="facebook"></img>
        <img className="footer_icon" src={instIcon} alt="inst"></img>
        <img className="footer_icon" src={inIcon} alt="in"></img>
      </div>
    </div>
  </footer>
  )
}