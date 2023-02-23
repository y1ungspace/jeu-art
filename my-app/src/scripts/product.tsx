import { Footer } from "./layouts/footer";
import { Header } from "./layouts/header";
import starIcon from "../assets/icons/star.svg"
import wishlistIcon from "../assets/icons/wishlist.svg";
import mailIcon from "../assets/icons/mail.svg";
import facebookIcon from "../assets/icons/facebook.svg";
import instgramIcon from "../assets/icons/inst.svg";
import twitterIcon from "../assets/icons/twitter.svg";

export function ProductPage() {
  return(
    <>
    <Header isBottomLineOn={true} />
    <section className="product_frontbar">
      <div className="product_frontbar_images">
        <div className="product_frontbar_images_wrapper">
          <img className="product_frontbar_img" alt="product" />
          <img className="product_frontbar_img" alt="product" />
          <img className="product_frontbar_img" alt="product" />
          <img className="product_frontbar_img" alt="product" />
        </div>
          <img className="product_frontbar_img--selected" alt="product" />
        <div className="product_frontbar_images_navigator"></div>
      </div>
      <div className="product_frontbar_description">
        <h2 className="h2--black" style={{marginBottom: "23px"}}>Product Name</h2>
        <h4 className="h4" style={{marginBottom: "64px"}}>COST</h4>
        <div className="product_frontbar_rating-box">
         <img className="icon" alt="star" src={starIcon} />
         <img className="icon" alt="star" src={starIcon} />
         <img className="icon" alt="star" src={starIcon} />
         <img className="icon" alt="star" src={starIcon} />
         <img className="icon" alt="star" src={starIcon} />
         <h5 className="h5--dark-grey" style={{marginLeft: "14px"}}>1 customer review</h5>
        </div>
        <h5 className="h5--dark-grey" style={{marginBottom: "48px"}}>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. 
        </h5>
        <div className="product_frontbar_buttons-box">
          <div className="counter-box">
            <button className="counter-box_button">-</button>
            <p className="counter-box_count">1</p>
            <button className="counter-box_button">+</button>
          </div>
          <div className="product_button">ADD TO CART</div> 
        </div>
        <div className="product_frontbar_icons">
          <img className="icon" alt="wishlist" src={wishlistIcon} />
          <div className="divider"></div>
          <img className="icon" alt="mail" src={mailIcon} />
          <img className="icon" alt="facebook" src={facebookIcon} />
          <img className="icon" alt="instagram" src={instgramIcon} />
          <img className="icon" alt="twitter" src={twitterIcon} />
        </div>
        <div style={{display: 'flex', gap: '16px', marginBottom: "6px"}}><p>SKU:</p><p style={{color: '#707070'}}> 12</p></div>
        <div style={{display: 'flex', gap: '16px'}}><p>Categories:</p><p style={{color: '#707070'}}>Chair, Popular</p></div>
      </div>
    </section>
    <section className="product_information">
      <div className="product_information_switch">
        <button className="product_information_button">Description</button>
        <button className="product_information_button">Aditional information</button>
        <button className="product_information_button">Reviews(0)</button>
      </div>
      <h5 className="h5--dark-grey" style={{lineHeight: "27px", marginTop: "39px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.</h5>
    </section>
    <section className="similar_items">
      <h2 className="h2--black" style={{marginBottom: "47px"}}>Similar Items</h2>
      <div style={{display: "flex", gap: "54px"}}>
        <div className="product">
          <div className="product_img">
          <div className="product_add">
            <p className="pruduct_add_text">ADD TO CART</p>
            </div>
          </div>
          <div className="product_inf">
            <h3 className="h3 product_name">Product Name</h3>
            <h4 className="h4">€ 0</h4>
          </div>
        </div>
        <div className="product">
          <div className="product_img">
          <div className="product_add">
            <p className="pruduct_add_text">ADD TO CART</p>
            </div>
          </div>
          <div className="product_inf">
            <h3 className="h3 product_name">Product Name</h3>
            <h4 className="h4">€ 0</h4>
          </div>
        </div>
        <div className="product">
          <div className="product_img">
          <div className="product_add">
            <p className="pruduct_add_text">ADD TO CART</p>
            </div>
          </div>
          <div className="product_inf">
            <h3 className="h3 product_name">Product Name</h3>
            <h4 className="h4">€ 0</h4>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}