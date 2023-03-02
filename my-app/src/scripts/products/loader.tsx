import { useNavigate } from "react-router";
import { Product, SearchPannelType, Template } from "../abstracts/interfaces";


export function ProductList(props: SearchPannelType) {

  const arr = props.arr

 if (arr.length === 0) {
  return <p>Sorry, there are no products under your filters</p>
 } else {

 } return( 
    <>
     {arr.map((card: Template) => (
      <Card id={card.id} name={card.type?.slice(0, 1).toUpperCase() + card.type!.slice(1) + ' ' + card.name} 
      cost={card.cost} 
      image={card.image} 
      key={card.id}/>
     ))}
    </>)
}

function Card(props: Template) {

  let navigate = useNavigate(); 
  function routeChange(props: Template) { 
    const pathName = props.name.replace(' ', '-').toLowerCase() + '-' + props.id ;
    let path = `/products/${pathName}`; 
    navigate(path);
    setTimeout(() => window.scrollTo(0, 0), 1)
}
  return(
    <div className="product-card">
      <div className="product-card_img" style={{backgroundImage: `url(${props.image![0]})`}} onClick={() => routeChange(props)}>
        <div className="product-card_add">
          <p className="pruduct_add_text">ADD TO CART</p>
        </div>
      </div>
      <div className="product_inf">
        <h3 className="h3 product_name">{props.name}</h3>
        <h4 className="h4">{'€ ' + props.cost}</h4>
      </div>
    </div>
  )
}




  let arrChecked: string[] = []
  const arrOfInputs = document.querySelectorAll('.checkbox');

  if (localStorage.getItem("saveChecked") !== null) {
    arrChecked = JSON.parse(localStorage.saveChecked);
    console.log(arrOfInputs)
  }

  arrOfInputs.forEach(e => {
   for (let i = 0; i < arrChecked.length; i++) {
    if (e.id === arrChecked[i]) {
      (e as HTMLInputElement).checked = true;
    }
   }
  })


