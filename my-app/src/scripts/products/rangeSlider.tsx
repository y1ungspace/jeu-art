import { useEffect, useRef, useState } from "react"
import { defineMaxCost, reloadEvent, searchQuery } from "./search"

const inputsBy = {
  sliderWidth: 200,
  minRange: 0,
  maxRange: 8560, 
  outputWidth:30, // output width
  thumbWidth: 10, // thumb width
  thumbBorderWidth: 0,
  trackHeight: 2,
  theValue: [0, 8560] // theValue[0] < theValue[1]
};

const range = inputsBy.maxRange - inputsBy.minRange;
const rangeK = inputsBy.sliderWidth / range;
const thumbRealWidth = inputsBy.thumbWidth + 2 * inputsBy.thumbBorderWidth;

export function RangeSlider(props: {name: string}) {

  const [isDragging0, setIsDragging0] = useState(false)
  const [isDragging1, setIsDragging1] = useState(false)
  const [endValue0, setEndValue0] = useState(0)
  const [endValue1, setEndValue1] = useState(defineMaxCost())

  const constainerRef = useRef(null);
  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const rangeRef = useRef(null);
  const thumbsRef = useRef<HTMLDivElement[]>([]);
  
  // styles
  useEffect(() => {
    (sliderRef.current! as HTMLDivElement).style.height = inputsBy.trackHeight + "px";
    (sliderRef.current! as HTMLDivElement).style.width = inputsBy.sliderWidth + "px";
    (sliderRef.current! as HTMLDivElement).style.paddingLeft = (inputsBy.theValue[0] - inputsBy.minRange) * rangeK + "px";
    (sliderRef.current! as HTMLDivElement).style.paddingRight = inputsBy.sliderWidth - inputsBy.theValue[1] * rangeK + "px";
    
    (trackRef.current! as HTMLDivElement).style.width = inputsBy.theValue[1] * rangeK - inputsBy.theValue[0] * rangeK + "px";

    for (let i = 0; i < thumbsRef.current.length; i++) {
      thumbsRef.current[i].style.top = -(inputsBy.thumbWidth / 2 + inputsBy.thumbBorderWidth - inputsBy.trackHeight / 2) + "px";
      thumbsRef.current[i].style.left = (inputsBy.theValue[i] - inputsBy.minRange) * rangeK - (thumbRealWidth / 2) + "px";
    
    }

    (rangeRef.current! as HTMLElement).textContent = `0€ - ${inputsBy.maxRange}€`;
  },[])
  
  // //events
  
  function handeleContainerEvents() {
    setIsDragging0(false);
    setIsDragging1(false);
    reloadEvent('searchUpdated');
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const mousePos = oMousePos(e.currentTarget, e);
    let theValue0 = (isDragging0) ? Math.round(mousePos.x / rangeK) + inputsBy.minRange : inputsBy.theValue[0];
    let theValue1 = (isDragging1) ? Math.round(mousePos.x / rangeK) + inputsBy.minRange : inputsBy.theValue[1];
  
    if (isDragging0) {
  
      if (theValue0 < endValue1 - (thumbRealWidth / 2) &&
        theValue0 >= inputsBy.minRange) {
        theValue0 = (theValue0 < 100) ? inputsBy.minRange : theValue0
        inputsBy.theValue[0] = theValue0;
        thumbsRef.current[0].style.left = (theValue0 - inputsBy.minRange) * rangeK - (thumbRealWidth / 2) + "px";
        (sliderRef.current! as HTMLDivElement).style.paddingLeft = (theValue0 - inputsBy.minRange) * rangeK + "px";
        (trackRef.current! as HTMLDivElement).style.width = (endValue1 - theValue0) * rangeK + "px";
        setEndValue0(theValue0);
        searchQuery.range.price.min = theValue0;
      }
    } else if (isDragging1) {
  
      if (theValue1 > endValue0 + (thumbRealWidth / 2 + 400) &&
        theValue1 <= inputsBy.maxRange) {
        theValue1 = (inputsBy.maxRange - theValue1) < 100 ? inputsBy.maxRange : theValue1
        inputsBy.theValue[1] = theValue1;
        thumbsRef.current[1].style.left = (theValue1 - inputsBy.minRange) * rangeK - (thumbRealWidth / 2) + "px";
        (sliderRef.current! as HTMLDivElement).style.paddingRight = (inputsBy.maxRange - theValue1) * rangeK + "px";
        (trackRef.current! as HTMLDivElement).style.width = (theValue1 - endValue0) * rangeK + "px";


        setEndValue1(theValue1);
        searchQuery.range.price.max = theValue1;
      }
    }
    (rangeRef.current! as HTMLElement).textContent = `${endValue0}€ - ${endValue1}€`;
  }
  
  // // helpers
  
  function oMousePos(elmt: HTMLElement, evt: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const ClientRect = elmt.getBoundingClientRect();
    return { //objeto
      x: Math.round(evt.clientX - ClientRect.left),
      y: Math.round(evt.clientY - ClientRect.top)
    }
  }

  return(
    <div className="filter_range">
    <div className="filter_range_wrapper">
      <p>{props.name}</p>
      <div className="container" 
           ref={constainerRef} 
           onMouseUp = { () => handeleContainerEvents() }
           onMouseOut = { () => handeleContainerEvents() }
           onMouseMove = { (e) => handleMouseMove(e) }>
        <div className="slider" ref={sliderRef}>
          <div className="track" ref={trackRef}></div>
        </div>
        <div className="thumb t0" ref={(e) => thumbsRef.current[0] = e as HTMLDivElement} onMouseDown={() => setIsDragging0(true)}></div>
        <div className="thumb t1" ref={(e) => thumbsRef.current[1] = e as HTMLDivElement} onMouseDown={() => setIsDragging1(true)}></div>
      </div>
    </div>
    <p className="range" ref={rangeRef}></p></div>
  )
}