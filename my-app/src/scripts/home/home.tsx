import { Link, useNavigate } from "react-router-dom";
import { Product, products } from "../abstracts/products-list";
import { Footer } from "../layouts/footer";
import { Header } from "../layouts/header";
import { Slider } from "./slider";

export function Home() {
  function HomeProductList() {
    
    const popularProducts = products.sort((a, b) => b.popularity - a.popularity).slice(0, 6);

    let navigate = useNavigate(); 
    function routeChange(product: Product) { 
    const pathName = product.type + '-' + product.name.replace(' ', '-').toLowerCase() + '-' + product.id;
    let path = `/products/${pathName}`; 
    navigate(path);
    setTimeout(() => {
      window.scroll(0, 0);
    }, 1)
  }
    const popularProductsList = popularProducts.map(product => (
      <div className="product">
        <div className="product_img" style={{backgroundImage: `url(${product.image[0]})`}} onClick={() => routeChange(product)}>
         <div className="product_add">
           <p className="pruduct_add_text">ADD TO CART</p>
          </div>
        </div>
        <div className="product_inf">
          <h3 className="h3 product_name">{
          product.type.slice(0, 1).toLocaleUpperCase() + product.type.slice(1) + ' ' + product.name
          }</h3>
          <h4 className="h4">{'€ ' + product.cost}</h4>
        </div>
      </div>
    ))
    return(
      <section>
          <div className="popular_header">
              <h1 className="popular_title">Shop the most popular</h1>
              <Link className="popular_link-all" to="/products">Aiew All</Link>
          </div>
          <div className="popular_container">
            {popularProductsList}
          </div>
        </section>
    )
  }

  return(
    <body>
      <Header isBottomLineOn={false}/>
      <main>
        <Slider />
        <HomeProductList/>
      </main>
      <Footer/>
    </body>
  )
}