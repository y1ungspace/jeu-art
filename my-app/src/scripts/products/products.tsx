import { Header } from "../layouts/header";
import { ProductList } from "./loader";
import { useEffect, useState } from "react";
import { Footer } from "../layouts/footer";
import { TPannel, SearchPannelType, Product } from "../abstracts/interfaces";
import { products } from "../abstracts/products-list";
import { SearchInput, SortBy, searchQuery } from "./search";
import listIcon from '../../assets/icons/list-arrow.svg';

function Pannel(props: TPannel) {
  const productsArr = products;
  let typeCheck: string = props.pannelType;
  const arr: string[] = []
  productsArr.forEach(product => {
    if (!arr.includes(`${product[typeCheck as keyof typeof product]}`) && product[typeCheck as keyof typeof product] !== '') {
      arr.push(`${product[typeCheck as keyof typeof product]}`);
    }
  })
  const checkboxes = arr.map(name => 
    <Checkbox name={name} />
  )
  return (
    <div className="filter_sort-by_color">
     <h5 className="h5">{typeCheck.slice(0, 1).toUpperCase() + typeCheck.slice(1)}:</h5>
     {checkboxes}
  </div>
  )
} 

function Checkbox(props: {name: string}) {
  const nameBig = props.name.slice(0, 1).toUpperCase() + props.name.slice(1)
  return (
    <label className="checkbox_label" htmlFor={props.name}>
    <input className="checkbox" type="checkbox" id={props.name} value={props.name}></input>
    {nameBig}</label>
  )
}


function SearchPannel(props: SearchPannelType) {
  return(
    <section className="filter">
        <form>
          <SearchInput />
          <section className="filter-wrapper">
            <div className="filter_select-box">
              <div className="filter_select-box_top">
                <p className="filer_heading">Shop by</p>
                <button className="filter_select-box_icon" type="button" style={{backgroundImage: `url(${listIcon})`}}></button>
              </div>
                {/* <Pannel pannelType="color"/>
                <Pannel pannelType="type"/>
                <Pannel pannelType="producer"/> */}
            </div>
            <SortBy />
          </section>
          {/* <div className="filter_range">
            <div className="filter_range_wrapper">
              <p>Price</p>
              <div className="container">
                <div className="slider">
                  <div className="track"></div>
                </div>
                <div className="thumb t0"></div>
                <div className="thumb t1"></div>
              </div>
            </div>
            <p className="price-range">0€ - 8560€</p>

            <div className="filter_range_wrapper">
              <p>Year</p>
              <div className="container1">
                <div className="slider1">
                  <div className="track1"></div>
                </div>
                <div className="thumb1 t0"></div>
                <div className="thumb1 t1"></div>
              </div>
            </div>
            <p className="year-range price-range">1950 - 1990</p>
          </div> */}
          <div className="filter_switches">
            <p>Popular only</p>
            <label className="switch">
              <input type="checkbox" className="filter_switch" id="switch"></input>
              <span className="slider-click"></span>
            </label>
          </div>
          <button className="filter_reset">Reset</button>
        </form>
      </section>
  )
}

export function Products() {

  const [arrOfProduct, setProducts] = useState<Product[]>(products)
  const [isLoaded, setStatus] = useState(false)

  useEffect(() => {
    setStatus(true)
    setProducts(targetProducts())
  }, []);

  document.addEventListener('searchUpdated', () => {
    const arr = targetProducts()
    setProducts(arr);
  })

  function targetProducts() {
    const newArr: Product[] = [];
    products.forEach(product => {
      if (product.name.toLowerCase().includes(searchQuery.search)) { //search filter
        newArr.push(product)
      }
    })
    switch (searchQuery.sortBy) {
          case 'Popular First': newArr.sort((b: Product, a: Product) => a.popularity - b.popularity);
            break;
          case 'Alphabetic: Ascending': newArr.sort((a: Product, b: Product) => a.name.localeCompare(b.name));
            break;
          case 'Alphabetic: Descending': newArr.sort((b: Product, a: Product) => a.name.localeCompare(b.name));
            break;
          case 'Year: Ascending': newArr.sort((a: Product, b: Product) => a.year - b.year);
            break;
          case 'Year: Descending': newArr.sort((b: Product, a: Product) => a.year - b.year);
        }
    return newArr;
  }

  return(
    <>
    <Header isBottomLineOn={true}/>
    <main>
      <h1 className="products-title h1">Shop The Latest</h1><div className="products-wrapper">
      <SearchPannel arr={products}/>
      <section className="products_list"> 
        {isLoaded ? <ProductList arr={arrOfProduct}/> : <p>Loading...</p>}
      </section>
      </div>
      <Footer />
    </main>
    </>
  )
}

