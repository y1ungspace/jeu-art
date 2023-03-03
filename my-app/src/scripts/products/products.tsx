import { Header } from "../layouts/header";
import { ProductList } from "./loader";
import { useEffect, useState } from "react";
import { Footer } from "../layouts/footer";
import { SearchPannelType, Product } from "../abstracts/interfaces";
import { products } from "../abstracts/products-list";
import { SearchInput, ShopBy, SortBy, searchQuery } from "./search";
import { RangeSlider } from "./rangeSlider";

function SearchPannel(props: SearchPannelType) {
  return(
    <section className="filter">
        <form>
          <SearchInput />
          <section className="filter-wrapper">
            <ShopBy />
            <SortBy />
          </section>
          <RangeSlider name="Price" />
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
    const categarisedArr: Product[] = [];
    const arrAfterRangeFilers: Product[] =[];
    products.forEach(product => {
      if (product.name.toLowerCase().includes(searchQuery.search)) { //search filter
        newArr.push(product)
      }
    })
    newArr.forEach(product => {
      if ((searchQuery.shopBy.color.length === 0 || (searchQuery.shopBy.color as string[]).includes(product.color)) &&
          (searchQuery.shopBy.type.length === 0 || (searchQuery.shopBy.type as string[]).includes(product.type)) &&
          (searchQuery.shopBy.producer.length === 0 || (searchQuery.shopBy.producer as string[]).includes(product.producer)) &&
          (searchQuery.shopBy.designer.length === 0 || (searchQuery.shopBy.designer as string[]).includes(product.designer))) {
              categarisedArr.push(product)
          }
    })
    switch (searchQuery.sortBy) {
          case 'Popular First': categarisedArr.sort((b: Product, a: Product) => a.popularity - b.popularity);
            break;
          case 'Alphabetic: Ascending': categarisedArr.sort((a: Product, b: Product) => a.name.localeCompare(b.name));
            break;
          case 'Alphabetic: Descending': categarisedArr.sort((b: Product, a: Product) => a.name.localeCompare(b.name));
            break;
          case 'Year: Ascending': categarisedArr.sort((a: Product, b: Product) => a.year - b.year);
            break;
          case 'Year: Descending': categarisedArr.sort((b: Product, a: Product) => a.year - b.year);
    }
    // range slider sort
    categarisedArr.forEach(elem => {
      if (elem.cost >= searchQuery.range.price.min && elem.cost <= searchQuery.range.price.max) {
        arrAfterRangeFilers.push(elem);
      }
    })
    
    return arrAfterRangeFilers;
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

