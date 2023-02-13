import { Footer } from "../layouts/footer";
import { Header } from "../layouts/header";

export function Home() {
  return(
    <body>
      <Header isBottomLineOn={false}/>
      <main>
        <input type="radio" name="radio" id="button-1" checked></input>
        <input type="radio" name="radio" id="button-2"></input>
        <input type="radio" name="radio" id="button-3"></input>
        <input type="radio" name="radio" id="button-4"></input>
        <input type="radio" name="radio" id="button-5"></input>
        <section className="home_tab">
          <h1 className="h1 home_title">Product name</h1>
          <h2 className="h2 home_cost">cost</h2>
          <button className="home_button">View Product</button>
          <div className="home_navigation">
            <label htmlFor="button-1">
                <div className="home_navigarion_dot"></div>
            </label>
            <label htmlFor="button-2">
                <div className="home_navigarion_dot"></div>
            </label>
            <label htmlFor="button-3">
                <div className="home_navigarion_dot"></div>
            </label>
            <label htmlFor="button-4">
                <div className="home_navigarion_dot"></div>
            </label>
            <label htmlFor="button-5">
                <div className="home_navigarion_dot"></div>
            </label>
          </div>
        </section>
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