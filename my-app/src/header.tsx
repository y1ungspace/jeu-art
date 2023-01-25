import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';

import cartIcon from './assets/icons/shopping-cart 1.svg';
import personIcon from './assets/icons/Icon color-1.svg';
import lupeIcon from './assets/icons/Icon color.svg';

export function Header() {
  return ( 
    <section className="home_header header">
      <h1 className="title"><a href="home.html">Jeu d'Art</a></h1>
      <nav className="header_nav">
        <div className="header_text-links">
          <h5 className="header_link"><a href="./products.html">Shop</a></h5>
          <h5 className="header_link"><a>Blog</a></h5>
          <h5 className="header_link"><a>Our Story</a></h5>
        </div>
        {/* <img src={cartIcon} alt="Logo" /> */}
        <div className="header_image-links">
          <img className="header_icon" src={lupeIcon} alt="Logo" onClick = {() => (document.querySelector('.filter_search') as HTMLInputElement).focus()} />
          <img className="header_icon" src={cartIcon} alt="Logo" />
          <img className="header_icon" src={personIcon} alt="Logo" />
        </div>
      </nav>
    </section>
  )
}