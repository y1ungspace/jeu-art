import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';

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
        <div className="header_image-links">
          <a className="header_icon" style = {{backgroundImage: "url('./assets/Icon color.svg')"}} onClick = {() => (document.querySelector('.filter_search') as HTMLInputElement).focus()}></a>
          <a className="header_icon" style= {{backgroundImage: "url('./assets/shopping-cart 1.svg')"}}></a>
          <a className="header_icon" style= {{backgroundImage: "url('./assets/Icon color-1.svg')"}}></a>
        </div>
      </nav>
    </section>
  )
}