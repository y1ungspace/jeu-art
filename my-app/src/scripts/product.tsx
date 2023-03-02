import { Footer } from "./layouts/footer";
import { Header } from "./layouts/header";
import starIcon from "../assets/icons/star.svg"
import wishlistIcon from "../assets/icons/wishlist.svg";
import mailIcon from "../assets/icons/mail.svg";
import facebookIcon from "../assets/icons/facebook.svg";
import instgramIcon from "../assets/icons/inst.svg";
import twitterIcon from "../assets/icons/twitter.svg";
import { Product } from "./abstracts/interfaces"
import { useEffect, useRef, useState } from "react";

export function ProductPage(props: {product: Product}) {

  const [selectedImg, setSelectedImg] = useState(props.product.image[0]);
  const [navigatorBarIndicator, setNavigatorBarIndicator] = useState(1);
  const [isInFullMode, setIsInFullMode] = useState(false);
  const [isFullModeDisabled, setIsFullModeDisabled] = useState(false)

  const selectedImgRef = useRef<HTMLImageElement | null>(null);

  const percentOnOneImage = 100 / props.product.image.length
 
  const imageWrapper = props.product.image.map(img => (
    <img className={`product_frontbar_img ${img === selectedImg ? 'selected' : ''}`} 
         key={props.product.image.indexOf(img)}
         alt="product" 
         src={img} 
         onClick={() => {
          setSelectedImg(img);
          setNavigatorBarIndicator(props.product.image.indexOf(img) + 1)
        }} />
  ))

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  },[selectedImg, navigatorBarIndicator])

  function fullMode() {
    if (isFullModeDisabled) return;
    const elem = selectedImgRef.current!
    if (isInFullMode) {
      setIsFullModeDisabled(true)
      elem.style.width = '540px';
      elem.style.scale = '1';
      elem.style.left = '257px';
      elem.style.top = '172px';
      document.body.style.overflow = 'visible';
      setIsInFullMode(false)
      setTimeout(() => {
        elem.setAttribute('style', '')
        setIsFullModeDisabled(false)
      }, 500)
    } else {
      elem.style.width = '100vh';
      elem.style.scale = '1.1';
      elem.style.top = `${elem.offsetTop}px`;
      elem.style.left = `${elem.offsetLeft}px`;
      elem.style.position = 'absolute';
      elem.style.zIndex = '105'
      document.body.style.overflow = 'hidden';

      setTimeout(() => {
        const newTop = (window.outerHeight - elem.offsetHeight) /  2;
        const newLeft = (window.outerWidth - Number(elem.style.width)) /  2;
        elem.style.top = `${newTop}px`;
        elem.style.left = `${newLeft}px`
      }, 1)
      setIsInFullMode(true)
    }
  }

  function handleKeyDown(event: KeyboardEvent) {
    event.preventDefault()
    const imageWrapper = document.getElementsByClassName('product_frontbar_images_wrapper')[0]
    const index = props.product.image.indexOf(selectedImg);
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      if (index >= 0 && index < props.product.image.length - 1) {
        const newSelectedImg = props.product.image[index + 1]
        imageWrapper.scrollBy({top: 160, left: 0, behavior: 'smooth'});
        setSelectedImg(newSelectedImg)
        setNavigatorBarIndicator(index + 2)
      } else {
        const newSelectedImg = props.product.image[0]
        imageWrapper.scrollBy({top: -999, left: 0, behavior: 'smooth'}); //999px expected to be more than wrapper height
        setSelectedImg(newSelectedImg)
        setNavigatorBarIndicator(1)
      }
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      if (index > 0 && index <= props.product.image.length - 1) {
        const newSelectedImg = props.product.image[index - 1]
        imageWrapper.scrollBy({top: -160, left: 0, behavior: 'smooth'});
        setNavigatorBarIndicator(index)
        setSelectedImg(newSelectedImg)
      } else {
        const newSelectedImg = props.product.image[props.product.image.length - 1]
        imageWrapper.scrollBy({top: 999, left: 0, behavior: 'smooth'});
        setSelectedImg(newSelectedImg)
        setNavigatorBarIndicator(props.product.image.length)
      }
    }
  }

  return(
    <> 
    <Header isBottomLineOn={true} />
    <section className="product_frontbar"> 
      <div className="product_frontbar_images">
        <div className="product_frontbar_images_wrapper">
          {imageWrapper}
        </div>
          <img className="product_frontbar_img--selected" 
               alt="product" 
               src={selectedImg} 
               ref={selectedImgRef}
               onClick={() => fullMode()}/>
        <div className="product_frontbar_images_navigator" style={{ background: `linear-gradient(90deg, #707070 ${navigatorBarIndicator * percentOnOneImage}%, #D8D8D8 0px)` }}></div>
        <div className={isInFullMode ? "product_fullmode--on" : "product_fullmode--off"} onClick={() => fullMode()}></div>
      </div>
      <div className="product_frontbar_description">
        <h2 className="h2--black" style={{marginBottom: "23px"}}>{
        props.product.type.slice(0, 1).toUpperCase() + props.product.type.slice(1) + ' ' + props.product.name
        }</h2>
        <h4 className="h4" style={{marginBottom: "64px"}}>{`€ ${props.product.cost}`}</h4>
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
        <div style={{display: 'flex', gap: '16px', marginBottom: "6px"}}>
          <p>SKU:</p><p style={{color: '#707070'}}> {props.product.id}</p>
          </div>
        <div style={{display: 'flex', gap: '16px'}}>
          <p>Categories:</p><p style={{color: '#707070'}}>{props.product.type.slice(0, 1).toUpperCase() + props.product.type.slice(1)}{props.product.popularity > 100 ? ', Popular' : ''}</p>
        </div>
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