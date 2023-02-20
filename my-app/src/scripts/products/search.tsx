import { ChangeEvent, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
import closeIcon from '../../assets/icons/close.svg';
import listIcon from '../../assets/icons/list-arrow.svg';

export let searchQuery = {
  search: "",
  sortBy: 'Popular First',
}

export function SearchInput() {
  const [value, setValue] = useState('');

  function handleUpdate(input: React.ChangeEvent<HTMLInputElement>) {
    setValue(input.target.value);
    searchQuery.search = input.target.value;
    reloadEvent('searchUpdated')
  }

 return(
  <div className="search">
  <input type="search" className="filter_search" value={value} placeholder="Search..." autoFocus onChange={(e) => handleUpdate(e)}></input>
  <button className="filter_search_button" type="button" style={{ backgroundImage: `url(${ closeIcon })` }}></button>
  </div>
 )
}

function reloadEvent(eventName: string) {
  const event = new Event(eventName);
  document.dispatchEvent(event);
}

function ShopBy() {

}

export function SortBy() {
  const [isOpened, setOpened] = useState(false);
  const [nameAsc, setNameAsc] = useState(true);
  const [yearAsc, setYearAsc] = useState(true);

  // const filterRef = useRef<null | HTMLDivElement>(null);

  function handleClick(e: EventTarget & HTMLButtonElement) {
    const buttons = document.getElementsByClassName('filter_select-box_item');
    const arr = Array.from(buttons)

    arr.forEach(e => e.classList.remove('select-box_item--checked'))
    e.classList.add('select-box_item--checked');

    if (e.id === 'popular') {
      searchQuery.sortBy = 'Popular First';
      setNameAsc(true);
      setYearAsc(true);
    } else if (e.id === 'name') {
      setYearAsc(true);
      if (nameAsc) {
        setNameAsc(false)
        searchQuery.sortBy = 'Alphabetic: Ascending';
      } else {
        setNameAsc(true)
        searchQuery.sortBy = 'Alphabetic: Descending';
      }
    } else {
       setNameAsc(true);
      if (yearAsc) {
        setYearAsc(false)
        searchQuery.sortBy = 'Year: Ascending';
      } else {
        setYearAsc(true)
        searchQuery.sortBy = 'Year: Descending';
      }
    }
    reloadEvent('searchUpdated');
  }

  function handleClose() {
    isOpened ? setOpened(false) : setOpened(true);
    // filterRef.current?.classList.toggle('filter_select-box_items--closed')
    
  }

  return(
    <div className="filter_select-box"> 
      <div className="filter_select-box_top">
        <p className="filer_heading">Shop by</p>
        <button className="filter_select-box_icon" 
                type="button" 
                style={{
                  backgroundImage: `url(${listIcon})`,
                  transform: `scaleY(${isOpened ? -1 : 1})`    
                }} 
                onClick={() => handleClose()}></button>
      </div>
      <Transition in={isOpened} timeout={1}>
        {(state: string) => (
           <div className={`filter_select-box_items ${state}`}>
           <button id="popular" type="button" className='filter_select-box_item select-box_item--checked' onClick={(e) => 
             handleClick(e.currentTarget)}>Popular first</button>
           <button id="name" type="button" className='filter_select-box_item' onClick={(e) => 
             handleClick(e.currentTarget)}>{nameAsc ? '↑ Name' : '↓ Name'}</button>
           <button id="year" type="button" className='filter_select-box_item' onClick={(e) => 
             handleClick(e.currentTarget)}>{yearAsc ? '↑ Year' : '↓ Year'}</button>
           </div>
        )}
      </Transition>
    </div>
  )
}



// function searchPannelHandler(result: string) {
//   const newArrOfProducts: Product[] = [];  
//   products.map(product => {
//     product.name.toLowerCase().includes(result.toLocaleLowerCase()) ? 
//     newArrOfProducts.push(product) :
//     void(0)
//   })
//   console.log(newArrOfProducts)
// }
// export function searchFilter() { 
//   const arr = [];
//   shopBy();
//   const result = sortBy();
//   for (let i = 0; i < result.length; i++) {
//     if (result[i][0].toLocaleLowerCase().includes(`${(document.querySelector(".filter_search"
//     ) as HTMLInputElement).value.toLowerCase()}`))   {
//       arr.push(result[i]);
//     }
//   }
//   return products
// }

// function shopBy() {
//   let value = (document.querySelector(".filter_shop-by") as HTMLInputElement).value;

//   if (localStorage.getItem("shopBy") !== null) {
//     value = JSON.parse(localStorage.shopBy);
//   }

//   if ((document.querySelector(".filter_shop-by") as HTMLInputElement).value !== 'Shop By') {
//     value = (document.querySelector(".filter_shop-by") as HTMLInputElement).value;
//   }

//   switch (value) {
//     case 'Alphabetic: Ascending': products.sort((a: string[], b: string[]) => a[0].localeCompare(b[0]));
//       break;
//     case 'Alphabetic: Descending': products.sort((b: string[], a: string[]) => a[0].localeCompare(b[0]));
//       break;
//     case 'Year: Ascending': products.sort((a: number[], b: number[]) => a[2] - b[2]);
//       break;
//     case 'Year: Descending': products.sort((b: number[], a: number[]) => a[2] - b[2]);
//   }
//   localStorage.shopBy = JSON.stringify(value);
// }

// const inputsRy = {
//   sliderWidth: 200,
//   minRange: 0,
//   maxRange: 8560, 
//   outputWidth:30, // output width
//   thumbWidth: 10, // thumb width
//   thumbBorderWidth: 0,
//   trackHeight: 2,
//   theValue: [0, 8560] // theValue[0] < theValue[1]
// };

// if (localStorage.getItem("theValue") !== null) {
//   inputsRy.theValue = JSON.parse(localStorage.theValue);
//   (document.querySelector('.price-range') as HTMLElement).textContent = `${inputsRy.theValue[0]}€ - ${inputsRy.theValue[1]}€`;
// }

// let isDragging0 = false;
// let isDragging1 = false;

// const range = inputsRy.maxRange - inputsRy.minRange;
// const rangeK = inputsRy.sliderWidth / range;
// const container = document.querySelector(".container");
// const thumbRealWidth = inputsRy.thumbWidth + 2 * inputsRy.thumbBorderWidth;

// // styles
// const slider = document.querySelector(".slider") as HTMLElement;
// slider.style.height = inputsRy.trackHeight + "px";
// slider.style.width = inputsRy.sliderWidth + "px";
// slider.style.paddingLeft = (inputsRy.theValue[0] - inputsRy.minRange) * rangeK + "px";
// slider.style.paddingRight = inputsRy.sliderWidth - inputsRy.theValue[1] * rangeK + "px";

// const track = document.querySelector(".track") as HTMLElement;
// track.style.width = inputsRy.theValue[1] * rangeK - inputsRy.theValue[0] * rangeK + "px";

// const thumbs = document.querySelectorAll(".thumb") as unknown as HTMLElement[];
// for (let i = 0; i < thumbs.length; i++) {
//   thumbs[i].style.top = -(inputsRy.thumbWidth / 2 + inputsRy.thumbBorderWidth - inputsRy.trackHeight / 2) + "px";
//   thumbs[i].style.left = (inputsRy.theValue[i] - inputsRy.minRange) * rangeK - (thumbRealWidth / 2) + "px";

// }

// //events

// thumbs[0].addEventListener("mousedown", function() {
//   isDragging0 = true;
// }, false);
// thumbs[1].addEventListener("mousedown", function() {
//   isDragging1 = true;
// }, false);
// (container as HTMLElement).addEventListener("mouseup", function() {
//   isDragging0 = false;
//   isDragging1 = false;
// }, false);
// (container as HTMLElement).addEventListener("mouseout", function() {
//   isDragging0 = false;
//   isDragging1 = false;
// }, false);


// (container as HTMLElement).addEventListener("mousemove", function(evt) {
//   const mousePos = oMousePos(this, evt);
//   const theValue0 = (isDragging0) ? Math.round(mousePos.x / rangeK) + inputsRy.minRange : inputsRy.theValue[0];
//   const theValue1 = (isDragging1) ? Math.round(mousePos.x / rangeK) + inputsRy.minRange : inputsRy.theValue[1];
//   (document.querySelector('.price-range') as HTMLElement).textContent = `${theValue0}€ - ${theValue1}€`;
//   localStorage.theValue = JSON.stringify(inputsRy.theValue);

//   if (isDragging0) {

//     if (theValue0 < theValue1 - (thumbRealWidth / 2) &&
//       theValue0 >= inputsRy.minRange) {
//       inputsRy.theValue[0] = theValue0;
//       thumbs[0].style.left = (theValue0 - inputsRy.minRange) * rangeK - (thumbRealWidth / 2) + "px";
//       slider.style.paddingLeft = (theValue0 - inputsRy.minRange) * rangeK + "px";
//       track.style.width = (theValue1 - theValue0) * rangeK + "px";

//     }
//   } else if (isDragging1) {

//     if (theValue1 > theValue0 + (thumbRealWidth / 2) &&
//       theValue1 <= inputsRy.maxRange) {
//       inputsRy.theValue[1] = theValue1;
//       thumbs[1].style.left = (theValue1 - inputsRy.minRange) * rangeK - (thumbRealWidth / 2) + "px";
//       slider.style.paddingRight = (inputsRy.maxRange - theValue1) * rangeK + "px";
//       track.style.width = (theValue1 - theValue0) * rangeK + "px";

//     }
//   }

// }, false);

// // helpers

// function oMousePos(elmt: HTMLElement, evt: MouseEvent) {
//   const ClientRect = elmt.getBoundingClientRect();
//   return { //objeto
//     x: Math.round(evt.clientX - ClientRect.left),
//     y: Math.round(evt.clientY - ClientRect.top)
//   }
// }



// const inputs = {
//   sliderWidth: 200,
//   minRange: 1950,
//   maxRange: 1990, 
//   outputWidth:30, // output width
//   thumbWidth: 10, // thumb width
//   thumbBorderWidth: 0,
//   trackHeight: 2,
//   theValue: [1950, 1990] // theValue[0] < theValue[1]
// };

// if (localStorage.getItem("theValue1") !== null) {
//   inputs.theValue = JSON.parse(localStorage.theValue1);
//   (document.querySelector('.year-range') as HTMLElement).textContent = `${inputs.theValue[0]}€ - ${inputs.theValue[1]}€`;
// }

// let isDragging2 = false;
// let isDragging3 = false;

// const range1 = inputs.maxRange - inputs.minRange;
// const rangeK1 = inputs.sliderWidth / range1;
// const container1 = document.querySelector(".container1");
// const thumbRealWidth1 = inputs.thumbWidth + 2 * inputs.thumbBorderWidth;

// // styles
// const slider1 = document.querySelector(".slider1") as HTMLElement;
// slider1.style.height = inputs.trackHeight + "px";
// slider1.style.width = inputs.sliderWidth + "px";
// slider1.style.paddingLeft = (inputs.theValue[0] - inputs.minRange) * range1 + "px";
// slider1.style.paddingRight = inputs.sliderWidth - inputs.theValue[1] * range1 + "px";

// const track1 = document.querySelector(".track1") as HTMLElement;
// track1.style.width = inputs.theValue[1] * rangeK1 - inputs.theValue[0] * rangeK1 + "px";

// const thumbs1 = document.querySelectorAll(".thumb1") as unknown as HTMLElement[];
// for (let i = 0; i < thumbs1.length; i++) {
//   thumbs1[i].style.top = -(inputs.thumbWidth / 2 + inputs.thumbBorderWidth - inputs.trackHeight / 2) + "px";
//   thumbs1[i].style.left = (inputs.theValue[i] - inputs.minRange) * rangeK1 - (thumbRealWidth1 / 2) + "px";
// }

// //events

// thumbs1[0].addEventListener("mousedown", function() {
//   isDragging2 = true;
// }, false);
// thumbs1[1].addEventListener("mousedown", function() {
//   isDragging3 = true;
// }, false);
// (container1 as HTMLElement).addEventListener("mouseup", function() {
//   isDragging2 = false;
//   isDragging3 = false;
// }, false);
// (container1 as HTMLElement).addEventListener("mouseout", function() {
//   isDragging2 = false;
//   isDragging3 = false;
// }, false);

// (container1 as HTMLElement).addEventListener("mousemove", function(evt) {
//   const mousePos = oMousePos(this, evt);
//   const theValue0 = (isDragging2) ? Math.round(mousePos.x / rangeK1) + inputs.minRange : inputs.theValue[0];
//   const theValue1 = (isDragging3) ? Math.round(mousePos.x / rangeK1) + inputs.minRange : inputs.theValue[1];
//   (document.querySelector('.year-range') as HTMLElement).textContent = `${theValue0} - ${theValue1}`;
//   localStorage.theValue1 = JSON.stringify(inputs.theValue);

//   if (isDragging2) {

//     if (theValue0 < theValue1 - (thumbRealWidth1 / 2) &&
//       theValue0 >= inputs.minRange) {
//       inputs.theValue[0] = theValue0;
//       thumbs1[0].style.left = (theValue0 - inputs.minRange) * rangeK1 - (thumbRealWidth1 / 2) + "px";
//       slider1.style.paddingLeft = (theValue0 - inputs.minRange) * rangeK1 + "px";
//       track1.style.width = (theValue1 - theValue0) * rangeK1 + "px";

//     }
//   } else if (isDragging3) {

//     if (theValue1 > theValue0 + (thumbRealWidth1 / 2) &&
//       theValue1 <= inputs.maxRange) {
//       inputs.theValue[1] = theValue1;
//       thumbs1[1].style.left = (theValue1 - inputs.minRange) * rangeK1 - (thumbRealWidth1 / 2) + "px";
//       slider1.style.paddingRight = (inputs.maxRange - theValue1) * rangeK1 + "px";
//       track1.style.width = (theValue1 - theValue0) * rangeK1 + "px";

//     }
//   }

// }, false);

// function sortBy(): [string, number, number, string, string, string, string, string, string, boolean, boolean][] {
//   const arr: [string, number, number, string, string, string, string, string, string, boolean, boolean][] = [];
//   const arr1: [string, number, number, string, string, string, string, string, string, boolean, boolean][] = [];
//   const colorConditions: string[] = [];
//   const producerConditions: string[] = [];
//   const typeConditions: string[] = [];
//   const inputsChecked = document.querySelectorAll("input")
//   const saveChecked: string[] = [];
//   inputsChecked.forEach(e => {
//     if (e.type === "checkbox" && e.checked) {
//       saveChecked.push(e.id)
//       console.log(inputsChecked)
//       localStorage.saveChecked = JSON.stringify(saveChecked);
//       switch (e.value) {
//         case 'color': colorConditions.push(e.id);
//         break;
//         case 'producer': producerConditions.push(e.id);
//         break;
//         case 'type': typeConditions.push(e.id);
//       }
//     }
//   });

//   products.forEach((e: [string, number, number, string, string, string, string, string, string, boolean, boolean]) => {
//     if ((colorConditions.includes(e[4]) || colorConditions.length < 1) && 
//     (producerConditions.includes(e[5]) || producerConditions.length < 1) && 
//     (typeConditions.includes(e[8]) || typeConditions.length < 1)) {
//       arr.push(e)
//     }
//   })

  // const priceRange = ((document.querySelector('.price-range') as HTMLElement).textContent as unknown as string).split('-');
  // const yearRange = ((document.querySelector('.year-range') as HTMLElement).textContent as unknown as string).split('-');
  // arr.forEach(e => {
  //   if (parseInt(e[3].slice(0, -1)) >= parseInt((priceRange[0].slice(0, -1))) && 
  //   parseInt(e[3].slice(0, -1)) <= parseInt(priceRange[1].slice(0, -1)) &&
  //   e[2] >= parseInt(yearRange[0]) &&
  //   e[2] <= parseInt(yearRange[1])) {
  //     arr1.push(e)
  //   }
  // })

//   if ((document.querySelector('.slider-click') as HTMLInputElement).classList.contains('checked')) {
//     return arr1.filter(e => e[9] === true);
//   }

//   return arr1;
// }

