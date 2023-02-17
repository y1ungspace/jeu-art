import { Footer } from "../layouts/footer";
import { Header } from "../layouts/header";
import { Slider } from "./slider";

export function Home() {
  return(
    <body>
      <Header isBottomLineOn={false}/>
      <main>
        <Slider />
        <section>
          <div className="popular_header">
              <h1 className="popular_title">Shop the most popular</h1>
              <a className="popular_link-all"href="./products.html">Aiew All</a>
          </div>
          <div className="popular_container">
            <div className="product">
              <div className="product_img">
                <div className="product_add">
                  <p className="pruduct_add_text">ADD TO CART</p>
                </div>
              </div>
              <div className="product_inf">
                <h3 className="h3 product_name">Product Name</h3>
                <h4 className="h4">COST</h4>
              </div>
            </div>
            <div className="product">
              <div className="product_img"></div>
              <div className="product_inf">
                <h3 className="h3 product_name">Product Name</h3>
                <h4 className="h4">COST</h4>
              </div>
            </div>
            <div className="product">
              <div className="product_img"></div>
              <div className="product_inf">
                <h3 className="h3 product_name">Product Name</h3>
                <h4 className="h4">COST</h4>
              </div>
            </div>
            <div className="product">
              <div className="product_img"></div>
              <div className="product_inf">
                <h3 className="h3 product_name">Product Name</h3>
                <h4 className="h4">COST</h4>
              </div>
            </div>
            <div className="product">
              <div className="product_img"></div>
              <div className="product_inf">
                <h3 className="h3 product_name">Product Name</h3>
                <h4 className="h4">COST</h4>
              </div>
            </div>
            <div className="product">
              <div className="product_img"></div>
              <div className="product_inf">
                <h3 className="h3 product_name">Product Name</h3>
                <h4 className="h4">COST</h4>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </body>
  )
}