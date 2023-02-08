import { Header } from "./header";
import closeIcon from './assets/icons/close.svg';
import { ProductList } from "./loader";
import { searchFilter } from "./search";
import { useEffect, useState } from "react";
import { products } from "./products-list";

export function Products() {

  const [productsList, setList] = useState("");
  const [isLoaded, setStatus] = useState(false)

  useEffect(() => {setStatus(true)});

  return(
    <div>
    <Header isBottomLineOn={true}/>
    <main>
      <h1 className="products-title h1">Shop The Latest</h1><div className="products-wrapper">
      <section className="filter">
        <form>
          <div className="search">
            <input type="search" className="filter_search" placeholder="Search..." autoFocus></input>
            <button className="filter_search_button" type="button" style={{ backgroundImage: `url(${ closeIcon })` }}></button>
          </div>
          <select name="shop-by" className="filter_shop-by" placeholder="Shop By">
            <option>Shop By</option>
            <option value="Alphabetic: Ascending">Alphabetic: Ascending</option>
            <option value="Alphabetic: Descending">Alphabetic: Descending</option>
            <option value="Year: Ascending">Year: Ascending</option>
            <option value="Year: Descending">Year: Descending</option>
          </select>
          <div className="filter_sort-by">
            <div className="filter_sort-by_wrapper">
              <div className="filter_sort-by_color">
                <h5 className="h5">Color:</h5>
                <label className="checkbox_label" htmlFor="black">
                  <input className="checkbox" type="checkbox" id="black" value="color"></input>Black</label>
                <label className="checkbox_label" htmlFor="blue">
                  <input className="checkbox" type="checkbox" id="blue" value="color"></input>Blue</label>
                <label className="checkbox_label" htmlFor="green">
                  <input className="checkbox" type="checkbox" id="green" value="color"></input>Green</label>
                <label className="checkbox_label" htmlFor="metal">
                  <input className="checkbox" type="checkbox" id="metal" value="color"></input>Metal</label>
                <label className="checkbox_label" htmlFor="red">
                  <input className="checkbox" type="checkbox" id="red" value="color"></input>Red</label>
                <label className="checkbox_label" htmlFor="yellow">
                  <input className="checkbox" type="checkbox" id="yellow" value="color"></input>Yellow</label>
                <label className="checkbox_label" htmlFor="white">
                  <input className="checkbox" type="checkbox" id="white" value="color"></input>White</label>
              </div>
              <div className="filter_sort-by_color">
                <h5 className="h5">Type:</h5>
                <label className="checkbox_label" htmlFor="chair">
                  <input className="checkbox" type="checkbox" id="chair" value="type"></input>Chair</label>
                <label className="checkbox_label" htmlFor="armchair">
                  <input className="checkbox" type="checkbox" id="armchair" value="type"></input>Armchair</label>
                <label className="checkbox_label" htmlFor="lamp">
                  <input className="checkbox" type="checkbox" id="lamp" value="type"></input>Lamp</label>
                <label className="checkbox_label" htmlFor="composition">
                  <input className="checkbox" type="checkbox" id="composition" value="type"></input>Composition</label>
                <label className="checkbox_label" htmlFor="other">
                  <input className="checkbox" type="checkbox" id="other" value="type"></input>Other</label>
              </div>
              <div className="filter_sort-by_color">
                <h5 className="h5">Producer:</h5>
                <label className="checkbox_label" htmlFor="ARTELUCE">
                  <input className="checkbox" type="checkbox" id="ARTELUCE" value="producer"></input>ARTELUCE</label>
                <label className="checkbox_label" htmlFor="CASTELLI">
                  <input className="checkbox" type="checkbox" id="CASTELLI" value="producer"></input>CASTELLI</label>
                <label className="checkbox_label" htmlFor="DANSK">
                  <input className="checkbox" type="checkbox" id="DANSK" value="producer"></input>DANSK</label>
                <label className="checkbox_label" htmlFor="FRITZ HANSEN">
                  <input className="checkbox" type="checkbox" id="FRITZ HANSEN" value="producer"></input>FRITZ HANSEN</label>
                <label className="checkbox_label" htmlFor="GILAC">
                  <input className="checkbox" type="checkbox" id="GILAC" value="producer"></input>GILAC</label>
                <label className="checkbox_label" htmlFor="HOLMEGAARD">
                  <input className="checkbox" type="checkbox" id="HOLMEGAARD" value="producer"></input>HOLMEGAARD</label>
                <label className="checkbox_label" htmlFor="KARTELL">
                  <input className="checkbox" type="checkbox" id="KARTELL" value="producer"></input>KARTELL</label>
                <label className="checkbox_label" htmlFor="KNOLL">
                  <input className="checkbox" type="checkbox" id="KNOLL" value="producer"></input>KNOLL</label>
                <label className="checkbox_label" htmlFor="LIGNE ROSET">
                  <input className="checkbox" type="checkbox" id="LIGNE ROSET" value="producer"></input>LIGNE ROSET</label>
                <label className="checkbox_label" htmlFor="OXAR">
                  <input className="checkbox" type="checkbox" id="OXAR" value="producer"></input>OXAR</label>
                <label className="checkbox_label" htmlFor="TECNO">
                  <input className="checkbox" type="checkbox" id="TECNO" value="producer"></input>TECNO</label>
                <label className="checkbox_label" htmlFor="VITRA">
                  <input className="checkbox" type="checkbox" id="VITRA" value="producer"></input>VITRA</label>
              </div>
            </div>
          </div>
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
      <section className="products_list"> 
        {isLoaded ? <ProductList /> : <p>Loading...</p>}
      </section>
      </div>
    </main>
    </div>
  )
}