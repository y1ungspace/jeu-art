import { Header } from "../layouts/header";
import { ProductList } from "./loader";
import { useEffect, useState } from "react";
import { Footer } from "../layouts/footer";
import { SearchPannelType, Product } from "../abstracts/interfaces";
import { products } from "../abstracts/products-list";
import { SearchInput, ShopBy, SortBy, searchQuery } from "./search";

function SearchPannel(props: SearchPannelType) {
  return(
    <section className="filter">
        <form>
          <SearchInput />
          <section className="filter-wrapper">
            <ShopBy />
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
    const categarisedArr: Product[] = [];
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
    return categarisedArr;
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

