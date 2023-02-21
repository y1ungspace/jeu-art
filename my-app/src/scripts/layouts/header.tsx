import cartIcon from '../../assets/icons/shopping-cart 1.svg';
import personIcon from '../../assets/icons/Icon color-1.svg';
import lupeIcon from '../../assets/icons/Icon color.svg';
import { Link } from 'react-router-dom';

export function Header(props: {isBottomLineOn: boolean}) {
  const isBottomLineOn = props.isBottomLineOn
  let bottomLine;
  let styleAddition = {borderBottom: "0px"};
  if (isBottomLineOn) {
    bottomLine = <div className='header_bottom-line'></div>
    styleAddition = {borderBottom: "1px solid #D8D8D8"};
  }
  return ( 
    <>
    <header className="header_wrapper">
      <section className="header" style={styleAddition}>
        <h1 className="title"><Link to="/home">Jeu d'Art</Link></h1>
        <nav className="header_nav">
          <div className="header_text-links">
            <h5 className="header_link"><Link to="/products">Shop</Link></h5>
            <h5 className="header_link"><Link to="/blog">Blog</Link></h5>
            <h5 className="header_link"><Link to="/product-1">Our Story</Link></h5>
          </div>
          <div className='header_line'></div>
          <div className="header_image-links">
            <img className="header_icon" src={lupeIcon} alt="Logo" onClick = {() => (document.querySelector('.filter_search') as HTMLInputElement).focus()} />
            <img className="header_icon" src={cartIcon} alt="Logo" />
            <img className="header_icon" src={personIcon} alt="Logo" />
          </div>
        </nav>
      </section>
    </header>
    {bottomLine}
    </>
  )
}