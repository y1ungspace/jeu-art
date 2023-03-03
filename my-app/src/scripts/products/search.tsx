import { useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
import closeIcon from '../../assets/icons/close.svg';
import listIcon from '../../assets/icons/list-arrow.svg';
import { products } from '../abstracts/products-list';
import { TPannel } from '../abstracts/interfaces';
import { colorList } from '../abstracts/color-list';

export let searchQuery = {
  search: "",
  shopBy: {
    color: [],
    type: [],
    producer: [],
    designer: [],
  },
  sortBy: 'Popular First',
  range: {
    price: {
      min: 0,
      max: defineMaxCost(),
    }
  }
}

export function defineMaxCost() {
  const arrOfCosts: number[] =[]
  products.forEach(product => {
    arrOfCosts.push(product.cost)
  })
  arrOfCosts.sort((a, b) => b - a);
  const maxCostValue = arrOfCosts[0]
  return maxCostValue
}

export function SearchInput() {

  const searchInputRef = useRef<HTMLInputElement>(null);

  function handleUpdate() {
    const newValue = searchInputRef?.current?.value!;
    searchQuery.search = newValue;
    reloadEvent('searchUpdated')
  }

  function handleRemoving() {
    searchQuery.search = '';
    searchInputRef?.current?.focus();
    reloadEvent('searchUpdated');
  }
 
 return(
  <div className="search">
  <input type="search" 
         className="filter_search" 
         value={searchQuery.search} 
         placeholder="Search..." 
         ref={searchInputRef} 
         autoFocus 
         onChange={() => handleUpdate()}></input>
  <button className="filter_search_button" 
          type="button" 
          style={{ backgroundImage: `url(${ closeIcon })` }} 
          onClick={() => handleRemoving()}></button>
  </div>
 )
}

export function reloadEvent(eventName: string) {
  const event = new Event(eventName);
  document.dispatchEvent(event);
}

export function ShopBy() {

  const [isOpened, setIsOpened] = useState(false);

  function handleClose() {
    isOpened ? setIsOpened(false) : setIsOpened(true);
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
          <div className={`filter_categories_wrapper ${state}`}>
            <div className="filter_categories_selected-box"></div>
            <CategoryPannel pannelType="color"/>
            <CategoryPannel pannelType="type"/>
            <CategoryPannel pannelType="producer"/>
            <CategoryPannel pannelType="designer"/>
          </div>
        )}
       
      </Transition>
    </div>
  )
}

let isSomethingSelected = false;
let lastSelectedPosition = {top: 0, left: 0};

export function CategoryPannel(props: TPannel) {
  const productsArr = products;
  let typeCheck: string = props.pannelType;
  const arrOfTypes: string[] = []
  const filteredArr: string[] = []
  productsArr.forEach(product => {
    if (product[typeCheck as keyof typeof product] !== '') {
      arrOfTypes.push(`${product[typeCheck as keyof typeof product]}`);
    }
  })
  arrOfTypes.forEach(elem => {
    let counts = 0;
    for (let i = 0; i < arrOfTypes.length; i++) {
      if (elem === arrOfTypes[i]) {
        counts++
      }
    }
    if (counts >= 3 && !filteredArr.includes(elem)) {
      filteredArr.push(elem)
    }
  })
  const categoryButtons = filteredArr.map(name => 
    <CategotyButton name={name} key={name} id={typeCheck} />
  )
  return (
    <div className="filter_categories">
     <h5 className="filter_categories_title">{typeCheck.slice(0, 1).toUpperCase() + typeCheck.slice(1)}</h5>
     <div className="filter_categories-box" id={`${typeCheck}-box`}>
       {categoryButtons}
     </div>
  </div>
  )
} 

function CategotyButton(props: {name: string, id: string}) {
  
  function handleCategoryClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const selectedDiv = document.getElementsByClassName('filter_categories_selected-box')[0];
    const elem = e.currentTarget;
    elem.classList.toggle('selected');

    if (!isSomethingSelected){
      lastSelectedPosition = {
        top: (selectedDiv as HTMLDivElement).offsetTop + 12,
        left: (selectedDiv as HTMLDivElement).offsetLeft,
      };
    }

    if (lastSelectedPosition.left + elem.offsetWidth > 
      (selectedDiv as HTMLDivElement).offsetLeft + (selectedDiv as HTMLDivElement).offsetWidth) {
        lastSelectedPosition = {
          top: lastSelectedPosition.top + elem.offsetHeight + 2,
          left: (selectedDiv as HTMLDivElement).offsetLeft,
        };
      }
  
    if (elem.classList.contains('selected')) {
      elem.setAttribute('style', `position: relative; transform: translate(${lastSelectedPosition.left - elem.offsetLeft}px, ${lastSelectedPosition.top - elem.offsetTop}px);`);
      setTimeout(() =>  {
        lastSelectedPosition.left = lastSelectedPosition.left + (elem.offsetWidth + 2);
        console.log(lastSelectedPosition.left, elem.offsetWidth)
        elem.setAttribute('style', '')
        selectedDiv.append(elem)
      }, 300)
      isSomethingSelected = true;
      (searchQuery.shopBy[props.id as keyof typeof searchQuery.shopBy] as string[]).push(props.name);
      reloadEvent('searchUpdated');
    } else {
      lastSelectedPosition = {
        top: elem.offsetTop,
        left: elem.offsetLeft,
      }
      const selectedDiv = document.getElementById(`${elem.id}-box`);
      selectedDiv!.append(elem);
      const undesirebleCategory = (searchQuery.shopBy[props.id as keyof typeof searchQuery.shopBy] as string[]).indexOf(props.name);
      (searchQuery.shopBy[props.id as keyof typeof searchQuery.shopBy] as string[]).splice(undesirebleCategory, 1)
      reloadEvent('searchUpdated');
    }
  }

  const nameBig = props.name.slice(0, 1).toUpperCase() + props.name.slice(1)
  const backgroundColor = props.name as keyof typeof colorList ? 
    {backgroundColor: colorList[props.name as keyof typeof colorList]} : 
    {display: "none"};

  return (
   <button type="button" className="circled_button" id={props.id} onClick={(e) => handleCategoryClick(e)}>
    <div className="circled_button_color-index" 
         style={backgroundColor}></div>
    <p>{nameBig}</p>
   </button>
  )
}


export function SortBy() {
  const [isOpened, setOpened] = useState(false);
  const [nameAsc, setNameAsc] = useState(true);
  const [yearAsc, setYearAsc] = useState(true);

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
  }

  return(
    <div className="filter_select-box"> 
      <div className="filter_select-box_top">
        <p className="filer_heading">Sort by</p>
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

