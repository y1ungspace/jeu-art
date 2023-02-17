import { useEffect, useRef } from "react";
import { products } from "../abstracts/products-list"

const mockSliderList = products.slice(0, 5);

export function Slider() {

  const sliderRef = useRef<null | HTMLDivElement>(null);
  let isClicked = false;
  let sliderNumber = 1

  useEffect(() => {
    const sliderTimer = setInterval(() => {
      timer()
    }, 4000)
    return () => clearInterval(sliderTimer);
  })

  function timer() {
   if (isClicked) {
    return
   }
    uncheckDot(sliderNumber - 1); // sliderNumber is a previous number

    if (sliderNumber < mockSliderList.length) {
      checkDot(sliderNumber);
      sliderNumber++;          // now it's current number
    } else { 
      checkDot(0);
      sliderNumber = 1
    }
    changeSliderPosition(sliderNumber)
  }

  function handleClick(e: number) {
    isClicked = true;
    uncheckDot(sliderNumber - 1);
    checkDot(e - 1);
    changeSliderPosition(e);
    sliderNumber = e;
    setTimeout(() => isClicked = false, 3000)
  }

  function changeSliderPosition(e: number) {
    const sliderDiv = sliderRef.current;
    const classList = sliderDiv?.classList.value.split(" ");
    sliderDiv?.classList.remove(classList![1]);
    sliderDiv?.classList.add(`home_slider_transition-${e}`)
  }

  function checkDot(e: number) {
    const newDot = document.getElementsByClassName("home_navigation_dot")[e]
    newDot.classList.toggle("dot_checked-animation1");
    setTimeout(() => {
      newDot.classList.toggle("dot_checked-animation1");
      newDot.classList.toggle("dot_checked");
    }, 350)
    
  }

  function uncheckDot(e: number) {
    const oldDot = document.getElementsByClassName("home_navigation_dot")[e]
    oldDot.className = "home_navigation_dot";
  }

  function SliderList() {
    
    const homeSlider = mockSliderList.map(product => 
     
      <div className="home_slider_elem" style={{backgroundImage: `url("${product.image}")`,  backgroundSize: "cover"}}>
        <h1 className="h1 home_title">{product.name}</h1>
        <h2 className="h2 home_cost">{'€ ' + product.cost}</h2>
        <button className="home_button">View Product</button>
      </div>
     
      )
  
    return(
      <div className="home_slider" ref={sliderRef}>
        {homeSlider}
      </div>
    )
  }

  function NavigationButtons() {
    return (
      <div className="home_navigation">
       {(() => {
            let td = [];
            let checkedDotClass = "dot_checked";
            for (let i = 1; i <= mockSliderList.length; i++) {
              if (i > 1) {
                checkedDotClass = ""
              }
              td.push(
              <label key={i} htmlFor={`button-${i}`} onClick={() => handleClick(i)}>
               <div className={`home_navigation_dot ${checkedDotClass}`}></div>
             </label>
             );
            }
            return td;
          })()}
      </div>
    )
  }

  return(
    <>
      <input type="radio" name="radio" id="button-1" checked></input>
      <input type="radio" name="radio" id="button-2"></input>
      <input type="radio" name="radio" id="button-3"></input>
      <input type="radio" name="radio" id="button-4"></input>
      <input type="radio" name="radio" id="button-5"></input>
      <section className="home_tab">
        <SliderList />
        <NavigationButtons />
      </section>
    </>
  )
}
