import arrowIcon from './assets/icons/arrow.svg';
import facebookIcon from './assets/icons/facebook.svg';
import githubIcon from './assets/icons/github.svg';
import instIcon from './assets/icons/inst.svg';
import twitterIcon from './assets/icons/twitter.svg';
import inIcon from './assets/icons/in.svg'

export function Footer() {
  return(
    <footer>
    <div className="footer_top">
      <h5 className="footer_link h5">CONTACT</h5>
      <h5 className="footer_link h5">TERMS OF SERVICES</h5>
      <h5 className="footer_link h5">SHIPPING AND RETURNS</h5>
      <div className="footer_email">
        <h5 className="footer_link h5">Give an email, get the newsletter.</h5>
        <img className="footer_icon-arrow footer_icon" src={arrowIcon}></img>
      </div>
    </div>
    <div className="footer_bottom">
      <h5 className="h5">© 2022 Jeu d'Art. <a className="footer_link">Terms of use</a> and <a className="footer_link">privacy policy.</a></h5>
      <div className="footer_icons">
        <img className="footer_icon" src={githubIcon}></img>
        <img className="footer_icon" src={twitterIcon}></img>
        <img className="footer_icon" src={facebookIcon}></img>
        <img className="footer_icon" src={instIcon}></img>
        <img className="footer_icon" src={inIcon}></img>
      </div>
    </div>
  </footer>
  )
}